# Copilot Instructions for Shop At Home Rollover Project

This project converts an Angular v18 application (in `/app`) to the latest React version with TypeScript support.

## Project Structure Rules

- **DO NOT** create a new workspace for the conversion
- The new React application must be placed in a `./react` directory within the existing workspace
- Maintain the existing API structure in `/api` (Azure Functions)
- Keep all existing apps (`/app`) intact

## React Setup Requirements

- Use **React 18+** with TypeScript
- Use **Vite** as the build tool (not Create React App)
- Include React Router for navigation
- Set up proper ESLint and Prettier configuration
- Use CSS Modules or Styled Components for styling
- Include testing setup with Jest and React Testing Library

## Conversion Guidelines

### Complete Migration Requirements
- **MANDATORY**: Before marking any conversion task as complete, perform a comprehensive audit of EVERY file in the Angular app
- Create a complete inventory of ALL files in `/app/src` including:
  - Every `.ts`, `.html`, `.css`, `.scss` file
  - Every component, service, directive, pipe, guard, and interceptor
  - All assets: images, fonts, icons, SVGs, JSON files
  - All configuration files and environment files
  - All HTML templates (inline and external)
  - All styles (component-level and global)
- For EACH file found, verify it has been:
  - ✅ Migrated to React equivalent
  - ✅ Documented in conversion tracking
  - ✅ Tested for functionality
- **NO file should be skipped or assumed unnecessary** - if it exists in Angular, justify why it's not needed in React or migrate it
- Use `find`, `ls -R`, or `tree` commands to systematically scan the Angular app directory structure
- Cross-reference every Angular file against the React app to ensure nothing is missing

### Component Migration
- Convert Angular components to React functional components with hooks
- Map Angular services to React custom hooks or context providers
- Convert Angular dependency injection to React context/providers pattern
- Transform Angular directives to React custom hooks or components

### State Management
- Convert Angular services to React context providers or state management libraries
- Use React hooks (useState, useEffect, useContext) for local state
- Consider Redux Toolkit or Zustand for complex global state

### Routing
- Replace Angular Router with React Router v6
- Convert Angular route guards to React route protection components
- Map Angular lazy loading to React.lazy() and Suspense

### HTTP Client
- Replace Angular HttpClient with Axios or native fetch
- Convert Angular interceptors to Axios interceptors or custom fetch wrappers
- Maintain the same API endpoints structure

### API Configuration and CORS
- **DO NOT modify the Azure Functions API** (`/api` directory) to fix CORS or other issues
- **ALWAYS use Vite proxy** for local development to avoid CORS problems
- Configure Vite proxy in `vite.config.ts` to forward `/api` requests to `http://localhost:7071` when running locally in development environment
- Set `VITE_API_URL=/api` in `.env.development` (relative path, not full URL)
- Set `VITE_API_URL=/api` in `.env.production` for Azure Static Web Apps deployment

**Required Vite proxy configuration:**
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7071',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
```

**Environment variable setup:**
```dotenv
# .env.development
VITE_API_URL=/api

# .env.production
VITE_API_URL=/api
```

### Forms
- Replace Angular Reactive Forms with React Hook Form or Formik
- Convert Angular validators to custom validation functions
- Maintain form validation logic and error handling

## Development Workflow

### Terminal Commands
- Use `npm` or `yarn` consistently throughout the project
- Run TypeScript compiler checks before suggesting completion

### File Organization
```
./react/
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── some-legacy-discounts-page.html
│   └── staticwebapp.config.json
├── src/
│   ├── components/
│   ├── hooks/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── styles/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Bulma CSS Framework Integration

When migrating Bulma styles from Angular to React, follow these critical rules to avoid common pitfalls:

#### Installation
- **ALWAYS** install the official `bulma` npm package: `npm install bulma sass`
- **NEVER** use CDN links or other Bulma packages (bulma-css, etc.)
- Ensure `sass` is installed as a dev dependency for Vite to process SCSS files

#### Import Syntax - CRITICAL
- **ALWAYS** use modern Sass `@use` syntax (required for Dart Sass 2.0+)
- **NEVER** use deprecated `@import` syntax (will be removed in Dart Sass 3.0.0)
- **NEVER** mix `@use` and `@import` for the same module

**Correct pattern:**
```scss
// Define custom color variables BEFORE @use
$angular: #ac282b;
$react: #61dafb;

// Import Bulma using modern @use syntax with variable overrides
@use 'bulma/sass' with (
  $primary: $angular,
  $link: $angular,
  $info: $angular
);

// Your custom styles below
```

**WRONG patterns to avoid:**
```scss
// ❌ WRONG: Deprecated @import
@import 'bulma/bulma';

// ❌ WRONG: Mixing @use and @import
@use 'bulma/sass' with (...);
@import 'bulma/bulma';  // This will cause deprecation warnings

// ❌ WRONG: Wrong import path
@use 'bulma';  // Too vague, won't work
@import '~bulma/css/bulma.css';  // Angular-specific, won't work in Vite
```

#### Bulma Mixins and Functions
- **WARNING**: Not all Bulma Sass mixins are available or work the same way
- Common issue: `@include until($tablet)` mixin may not be available
- **Solution**: Replace Bulma responsive mixins with standard CSS media queries

**Migration pattern for responsive styles:**
```scss
// Angular (Bulma mixin):
@include until($tablet) {
  .nav-menu {
    display: none;
  }
}

// React (standard media query):
@media screen and (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
```

#### Variable Overrides
- Define custom variables BEFORE the `@use` statement
- Pass variables using the `with (...)` syntax
- Reference Bulma's default variable names (check Bulma docs)

#### Build Verification
- After migrating Bulma styles, ALWAYS run `npm run build`
- Check for Sass deprecation warnings in build output
- Verify no `@import` statements remain in SCSS files
- Test responsive behavior works as expected

#### Troubleshooting Common Errors
1. **"Cannot find module 'bulma/sass'"**
   - Solution: Run `npm install bulma sass`
   - Verify `node_modules/bulma` directory exists

2. **"Deprecation Warning: @import is deprecated"**
   - Solution: Replace ALL `@import 'bulma/...'` with `@use 'bulma/sass' with (...)`
   - Search codebase for any remaining `@import` statements

3. **"Undefined mixin"**
   - Solution: Replace Bulma mixins with standard CSS (media queries, etc.)
   - Check Bulma Sass documentation for available mixins in current version

4. **Styles not applying**
   - Verify SCSS file is imported in main.tsx: `import './styles/styles.scss'`
   - Check Vite config has no CSS-related issues
   - Verify class names match Bulma conventions

### Code Quality
- Ensure TypeScript strict mode is enabled
- Fix all TypeScript errors before suggesting completion
- Maintain consistent code formatting with Prettier
- Follow React best practices and hooks rules
- Include proper error boundaries and loading states

### Testing
- Write unit tests for components using React Testing Library
- Include integration tests for complex user flows
- Test custom hooks separately
- Maintain test coverage similar to Angular app

### Performance
- Implement code splitting with React.lazy()
- Use React.memo() for component optimization where appropriate
- Implement proper loading states and error handling
- Consider implementing Progressive Web App features

## Azure Static Web Apps Integration

- Copy and adapt `staticwebapp.config.json` from Angular app
- Ensure routing configuration works with React Router
- Test deployment configuration locally before suggesting completion
- Maintain the same API integration patterns

## Final Checklist

Before considering the conversion complete:
1. ✅ All TypeScript errors resolved
2. ✅ App builds successfully with `npm run build`
3. ✅ All major features from Angular app are working
4. ✅ Routing works correctly
5. ✅ API integration is functional
6. ✅ Tests are passing
7. ✅ Static web app configuration is correct
8. ✅ Performance is acceptable
9. ✅ Code follows React best practices
10. ✅ Documentation is updated
11. ✅ **COMPLETE FILE AUDIT PERFORMED** - Every single Angular file has been:
    - Listed and categorized (components, services, styles, assets, etc.)
    - Evaluated for migration necessity
    - Either migrated to React or explicitly documented as not needed
    - Verified in the React app
12. ✅ **NO ORPHANED FILES** - Confirmed that:
    - All Angular components have React equivalents
    - All Angular services have React service/hook equivalents
    - All CSS/SCSS styles have been migrated
    - All images and assets have been copied
    - All HTML templates have been converted to JSX
    - All utilities and helpers have been ported
    - All pipes/filters have React equivalents
    - All guards have route protection equivalents
    - All interceptors have Axios interceptor equivalents
13. ✅ **VISUAL COMPARISON** - Side-by-side comparison of Angular and React apps shows identical:
    - UI appearance and layout
    - User interactions and flows
    - Functionality and features
    - Error handling and edge cases
