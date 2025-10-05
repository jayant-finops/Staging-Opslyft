# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

ARG SECRET_NAME
ENV SECRET_NAME=${SECRET_NAME}
ENV AWS_DEFAULT_REGION="us-east-1"


# Install AWS CLI for secrets management during build
RUN apk add --no-cache aws-cli

RUN --mount=type=secret,id=aws_access_key_id \
    --mount=type=secret,id=aws_secret_access_key \
    --mount=type=secret,id=aws_session_token \
   sh -c ' \
        export AWS_ACCESS_KEY_ID=$(cat /run/secrets/aws_access_key_id) \
        export AWS_SECRET_ACCESS_KEY=$(cat /run/secrets/aws_secret_access_key) \
        export AWS_SESSION_TOKEN=$(cat /run/secrets/aws_session_token) \
            && \
        echo "Fetching secrets from AWS Secrets Manager: ${SECRET_NAME}" \
            && \
        aws secretsmanager get-secret-value \
            --secret-id "${SECRET_NAME}" \
            --region us-east-1 \
            --query SecretString \
            --output text > .env \
            && \
        echo "Created .env file with secrets"'




# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.env ./.env

USER nextjs

EXPOSE 3000

ENV PORT=3000

# Start the application
CMD ["node", "server.js"]
