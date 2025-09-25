# Opslyft V2 - Industry-Grade Architecture

## 🏗️ Project Structure

This project follows industry-standard patterns for scalable Next.js applications with feature-based organization.

```
src/
├── app/                         # Next.js 13+ App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── pricing/
│   │   └── page.tsx            # Pricing page
│   └── company/
│       └── page.tsx            # Company page
│
├── components/                  # Shared/Reusable Components
│   ├── ui/                     # Base UI Components
│   │   ├── button.tsx          # Button component with variants
│   │   └── index.ts            # UI exports
│   ├── layout/                 # Layout Components
│   │   ├── navbar.tsx          # Site navigation
│   │   ├── navbar.data.ts      # Navbar data
│   │   ├── footer.tsx          # Site footer
│   │   ├── footer.data.ts      # Footer data
│   │   └── index.ts            # Layout exports
│   ├── common/                 # Common shared components
│   └── index.ts                # All component exports
│
├── features/                    # Feature-Based Organization
│   ├── home/                   # Home Page Feature
│   │   ├── components/         # Home-specific components
│   │   │   ├── hero-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── struggle-section.tsx
│   │   │   ├── solutions-section.tsx
│   │   │   └── index.ts        # Home component exports
│   │   ├── data/               # Home page data
│   │   │   ├── index.ts        # Main data exports
│   │   │   ├── testimonials.ts
│   │   │   ├── struggle.ts
│   │   │   └── solutions.ts
│   │   └── index.ts            # Home feature exports
│   │
│   ├── about/                  # About Page Feature
│   │   ├── components/
│   │   │   ├── hero-section.tsx
│   │   │   ├── mission-section.tsx
│   │   │   ├── team-section.tsx
│   │   │   ├── join-section.tsx
│   │   │   └── index.ts
│   │   ├── data/
│   │   │   └── index.ts        # About page data
│   │   └── index.ts
│   │
│   ├── pricing/                # Pricing Page Feature
│   │   ├── data/
│   │   │   └── index.ts        # Pricing data
│   │   └── index.ts
│   │
│   ├── company/                # Company Page Feature
│   │   ├── components/
│   │   │   ├── timeline-section.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   └── index.ts                # All feature exports
│
├── types/                      # TypeScript Type Definitions
│   ├── api/                    # API-related types
│   │   └── sanity.ts          # Sanity CMS types
│   ├── components/             # Component prop types
│   │   └── index.ts           # Component types
│   └── index.ts               # All type exports
│
├── lib/                        # Utilities & Configurations
│   ├── sanity.ts              # Sanity CMS client & queries
│   ├── utils.ts               # Utility functions
│   └── env.ts                 # Environment configuration
│
├── hooks/                      # Custom React Hooks
│   ├── useRippleAnimation.ts
│   └── useScrollAnimation.ts
│
├── constants/                  # Application Constants
│   └── index.ts               # App-wide constants
│
└── app/globals.css            # Global styles
```

## 🎯 Key Principles

### 1. Feature-Based Organization

- **Benefit**: Related code stays together, easier to find and maintain
- **Pattern**: Each page/feature has its own directory with components, data, and logic
- **Example**: All home page related code is in `src/features/home/`

### 2. Separation of Concerns

- **Components**: Only UI logic, no business logic
- **Data**: Separate data layer with fallbacks for CMS content
- **Types**: Centralized type definitions with domain separation

### 3. Barrel Exports

- **Pattern**: Each directory has an `index.ts` file that re-exports everything
- **Benefit**: Clean imports, easier refactoring
- **Example**: `import { Button } from "@/components/ui"` instead of `import Button from "@/components/ui/button"`

### 4. TypeScript Best Practices

- Strict typing with no `any` types (except in specific cases)
- Domain-separated types (`api/`, `components/`)
- Shared interfaces for reusable patterns

## 📦 Import Patterns

### Good Import Examples

```typescript
// Feature-based imports
import { HeroSection, TestimonialsSection } from "@/features/home";
import { AboutHeroSection } from "@/features/about";

// Shared component imports
import { Button } from "@/components/ui";
import { Navbar, Footer } from "@/components/layout";

// Type imports
import { Hero, Testimonial } from "@/types";

// Utility imports
import { cn } from "@/lib/utils";
import { COMPANY, ROUTES } from "@/constants";
```

### Avoid These Patterns

```typescript
// ❌ Direct file imports
import Button from "@/components/ui/button";
import HeroSection from "@/features/home/components/hero-section";

// ❌ Relative imports for shared code
import Button from "../../components/ui/button";
import { Hero } from "../../../types/api/sanity";
```

## 🔧 Development Guidelines

### Adding New Components

1. **Shared Components** → `src/components/ui/` or `src/components/common/`
2. **Page-Specific Components** → `src/features/{page}/components/`
3. **Layout Components** → `src/components/layout/`

### Adding New Pages

1. Create page in `src/app/{page}/page.tsx`
2. Create feature directory `src/features/{page}/`
3. Add components in `src/features/{page}/components/`
4. Add data in `src/features/{page}/data/`
5. Export everything in barrel files (`index.ts`)

### Adding New Types

1. **API Types** → `src/types/api/`
2. **Component Types** → `src/types/components/`
3. Export in `src/types/index.ts`

## 🚀 Benefits of This Structure

### For Development

- **Faster Development**: Easy to find where to add new features
- **Better Collaboration**: Clear conventions for team members
- **Easier Testing**: Components are isolated and pure
- **Simplified Refactoring**: Barrel exports make moving code easier

### For Maintenance

- **Reduced Cognitive Load**: Related code is co-located
- **Easier Debugging**: Clear data flow and component hierarchy
- **Better Performance**: Tree-shaking friendly with barrel exports
- **Scalable**: Structure grows naturally with the application

### For Onboarding

- **Self-Documenting**: Structure tells you where things belong
- **Consistent Patterns**: Same patterns across all features
- **Clear Dependencies**: Import structure shows component relationships

## 🔄 Migration Summary

### What Was Reorganized

1. **Components**: Moved from flat structure to feature-based + shared
2. **Data**: Moved from global `/data` to feature-specific data directories
3. **Types**: Split large `sanity.ts` into domain-specific files
4. **Imports**: Updated all imports to use barrel exports
5. **Structure**: Implemented industry-standard feature-based organization

### What Improved

- ✅ **Maintainability**: Related code is co-located
- ✅ **Scalability**: Easy to add new features without conflicts
- ✅ **Developer Experience**: Faster navigation and cleaner imports
- ✅ **Type Safety**: Better TypeScript organization and exports
- ✅ **Build Performance**: Tree-shaking friendly structure

## 📚 Next Steps

1. **Add Tests**: Create test files alongside components
2. **Add Storybook**: Document components with interactive examples
3. **Add Error Boundaries**: Implement proper error handling
4. **Add Loading States**: Implement consistent loading patterns
5. **Add Accessibility**: Ensure all components meet WCAG standards

This architecture provides a solid foundation for scaling your Opslyft application while maintaining code quality and developer productivity.
