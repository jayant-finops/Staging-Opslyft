// Application constants

// Company information
export const COMPANY = {
  name: "Opslyft",
  tagline: "Context-Led Cloud Optimization & Visibility",
  description:
    "Automates FinOps with context-led, AI-powered insights and actionable fixes for engineering teams",
  website: "https://opslyft.com",
  email: "contact@opslyft.com",
} as const;

// Navigation routes
export const ROUTES = {
  home: "/",
  about: "/about",
  pricing: "/pricing",
  company: "/company",
  contact: "/contact",
  login: "/login",
} as const;

// API endpoints
export const API_ENDPOINTS = {
  newsletter: "/api/newsletter",
  contact: "/api/contact",
  demo: "/api/demo",
} as const;

// Animation durations (in seconds)
export const ANIMATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slideIn: 0.6,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Color palette
export const COLORS = {
  primary: "#24823D",
  primaryDark: "#1E7A37",
  green: "#68CA68",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const;
