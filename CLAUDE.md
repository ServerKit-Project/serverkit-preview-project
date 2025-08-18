# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

```bash
# Install dependencies
npm install

# Development server with HMR
npm run dev

# Production build
npm run build

# Run tests
npm run test            # Run tests in watch mode
npm run test:ui         # Run tests with UI
npm run test:run        # Run tests once

# Code quality
npm run lint            # ESLint with TypeScript
npm run preview         # Preview production build
```

## High-Level Architecture

### Technology Stack
- **React 18.3.1** with TypeScript
- **Vite 6.3.5** as build tool with custom component mapping plugin
- **Styled Components** + Tailwind CSS v4 for styling
- **shadcn/ui** design system (50+ components)
- **Vitest** for testing with jsdom environment
- **React Router DOM** for routing

### Core Architectural Patterns

#### 1. Custom Vite Plugin System (Development Only)
The project includes a sophisticated component mapping plugin (`vite.config.ts`) that:
- Automatically injects data attributes (`data-component-id`, `data-component-name`, `data-media-type`) into JSX elements during development
- Reads from `mappingId.json` for component mapping
- Uses Babel AST transformation for code manipulation
- Only active in development mode (`npm run dev`)

#### 2. Context-Based State Management
Two main context providers wrap the application:
- **AuthProvider** (`src/context/auth/`): JWT-based authentication with localStorage persistence, role-based authorization
- **MediaProvider** (`src/context/media/`): Dynamic media configuration management for images/videos

Access via custom hooks: `useAuth()` and `useMedia()`

#### 3. Component Architecture
```
src/components/ui/     # 50+ shadcn/ui components (each with index.ts export)
src/pages/            # Route components (Welcome, Error pages)
src/sdk/              # SDK utilities
  ├── resource/       # Media resource management
  └── route/          # Protected route components
src/theme/            # Comprehensive design system with 25+ color tokens
```

#### 4. Design System & Theming
- Pretendard font family (Korean typography optimized)
- CSS variables for theme tokens
- Comprehensive styled-components theme integration
- Dark mode preparation with CSS variable structure

## Key Development Patterns

### Component Development
- All UI components use index.ts for clean exports
- TypeScript interfaces for all props
- Styled-components integrated with theme system
- shadcn/ui components follow New York style configuration

### Authentication Flow
- JWT tokens stored in localStorage with key: `svk-${projectId}-session`
- Authorization checks via `WidgetAuthSDK.isAuthorized(authAssetId, roles)`
- Protected routes using SDK route components

### Media Management
- Dynamic configuration via MediaProvider
- Fallback to placeholder services (placehold.co)
- Component-based media mapping with type safety

### Testing Strategy
- Unit tests for authentication logic (`tests/WidgetAuthSDK.test.ts`)
- Vitest with jsdom for React component testing
- Mock JWT creation for auth testing

## Important Configuration

### TypeScript
- Strict mode enabled
- Path aliases: `@/*` → `./src/*`
- Project references setup for better build performance
- Disabled unused parameters/locals for development

### Environment Variables
- `VITE_PROJECT_ID`: Project identifier for authentication/storage

### Build Optimization
- Vite for fast development and production builds
- Code splitting via React Router
- Component mapping plugin only in development mode

## Project Structure Focus Areas

When making changes, pay attention to:
1. **Auth System**: Changes to JWT handling affect the entire application security
2. **Component Mapping**: Development-only feature - ensure `mappingId.json` exists if using
3. **Theme System**: All styling should use theme tokens from `src/theme/`
4. **Media Configuration**: Media handling goes through MediaProvider context
5. **Korean Language**: Project is Korean-focused, maintain Pretendard font system

## Critical Files

- `vite.config.ts`: Custom plugin configuration (complex AST transformation)
- `src/context/auth/WidgetAuthSDK.ts`: Core authentication logic
- `src/main.tsx`: Application entry with provider setup
- `src/App.tsx`: Main routing configuration
- `components.json`: shadcn/ui configuration