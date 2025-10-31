# Shop at Home - React Application# React + TypeScript + Vite



This is the React version of the Shop at Home application, converted from the Angular v18 application.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## Technology StackCurrently, two official plugins are available:



- **React 19** with TypeScript- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Vite** as the build tool- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **React Router v6** for navigation

- **Axios** for HTTP requests## React Compiler

- **Bulma CSS** for styling

- **Vitest** and React Testing Library for testingThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **ESLint** and **Prettier** for code quality

## Expanding the ESLint configuration

## Features

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Product list management (add, edit, delete products)

- Discount code viewing```js

- Azure Static Web Apps authentication integrationexport default defineConfig([

- Responsive design with Bulma CSS  globalIgnores(['dist']),

- TypeScript strict mode enabled  {

    files: ['**/*.{ts,tsx}'],

## Development    extends: [

      // Other configs...

```bash

# Install dependencies      // Remove tseslint.configs.recommended and replace with this

npm install      tseslint.configs.recommendedTypeChecked,

      // Alternatively, use this for stricter rules

# Start development server      tseslint.configs.strictTypeChecked,

npm run dev      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

# Build for production

npm run build      // Other configs...

    ],

# Preview production build    languageOptions: {

npm run preview      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

# Run tests        tsconfigRootDir: import.meta.dirname,

npm test      },

      // other options...

# Lint code    },

npm run lint  },

])

# Format code```

npm run format

```You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



## Project Structure```js

// eslint.config.js

```import reactX from 'eslint-plugin-react-x'

src/import reactDom from 'eslint-plugin-react-dom'

├── components/

│   ├── core/          # Core UI components (header, nav, auth)export default defineConfig([

│   ├── shared/        # Shared reusable components  globalIgnores(['dist']),

│   └── products/      # Product-specific components  {

├── pages/             # Page components (Home, Products, Discounts)    files: ['**/*.{ts,tsx}'],

├── hooks/             # Custom React hooks    extends: [

├── services/          # API service layer      // Other configs...

├── types/             # TypeScript type definitions      // Enable lint rules for React

├── utils/             # Utility functions and config      reactX.configs['recommended-typescript'],

├── styles/            # Global styles (SCSS)      // Enable lint rules for React DOM

└── test/              # Test setup files      reactDom.configs.recommended,

```    ],

    languageOptions: {

## API Integration      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

The app connects to Azure Functions API endpoints:        tsconfigRootDir: import.meta.dirname,

- `/api/products` - Product CRUD operations      },

- `/api/discounts` - Discount data      // other options...

    },

## Authentication  },

])

Uses Azure Static Web Apps built-in authentication with support for:```

- GitHub
- Microsoft Entra ID

## Deployment

The app is configured for deployment to Azure Static Web Apps. See the root README for deployment instructions.

## Migration Notes

This application was migrated from Angular v18 to React 19, maintaining:
- All original functionality
- Same API integration patterns
- Equivalent UI/UX
- Azure Static Web Apps configuration
