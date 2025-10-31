# Shop At Home - React Application# React + TypeScript + Vite



This is the React version of the Shop At Home application, converted from Angular v18.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## Technology StackCurrently, two official plugins are available:



- **React 18+** with TypeScript- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Vite** as the build tool- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **React Router v6** for routing

- **Axios** for HTTP requests## React Compiler

- **Bulma CSS** for styling

- **Vitest** and **React Testing Library** for testingThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



## Project Structure## Expanding the ESLint configuration



```If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

react/

├── public/              # Static files```js

│   ├── 404.htmlexport default defineConfig([

│   ├── some-legacy-discounts-page.html  globalIgnores(['dist']),

│   └── staticwebapp.config.json  {

├── src/    files: ['**/*.{ts,tsx}'],

│   ├── components/      # Reusable UI components    extends: [

│   ├── hooks/           # Custom React hooks      // Other configs...

│   ├── pages/           # Page components (routes)

│   ├── services/        # API service layer      // Remove tseslint.configs.recommended and replace with this

│   ├── types/           # TypeScript type definitions      tseslint.configs.recommendedTypeChecked,

│   ├── utils/           # Utility functions and configuration      // Alternatively, use this for stricter rules

│   ├── App.tsx          # Main app component with routing      tseslint.configs.strictTypeChecked,

│   ├── main.tsx         # Application entry point      // Optionally, add this for stylistic rules

│   └── styles.scss      # Global styles      tseslint.configs.stylisticTypeChecked,

├── package.json

├── tsconfig.json      // Other configs...

├── vite.config.ts    ],

└── README.md    languageOptions: {

```      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

## Development        tsconfigRootDir: import.meta.dirname,

      },

### Prerequisites      // other options...

    },

- Node.js 18+ and npm  },

- The API server must be running on port 7071 (see `/api` directory)])

```

### Installation

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```bash

cd react```js

npm install// eslint.config.js

```import reactX from 'eslint-plugin-react-x'

import reactDom from 'eslint-plugin-react-dom'

### Running in Development Mode

export default defineConfig([

```bash  globalIgnores(['dist']),

npm run dev  {

```    files: ['**/*.{ts,tsx}'],

    extends: [

The application will be available at `http://localhost:5173`      // Other configs...

      // Enable lint rules for React

The Vite dev server is configured to proxy API requests to `http://localhost:7071`      reactX.configs['recommended-typescript'],

      // Enable lint rules for React DOM

### Building for Production      reactDom.configs.recommended,

    ],

```bash    languageOptions: {

npm run build      parserOptions: {

```        project: ['./tsconfig.node.json', './tsconfig.app.json'],

        tsconfigRootDir: import.meta.dirname,

The build output will be in the `dist/` directory.      },

      // other options...

### Running Tests    },

  },

```bash])

npm test```

```

## Features Converted from Angular

### ✅ Completed

- [x] Basic application structure and routing
- [x] Header bar with branding
- [x] Navigation menu with active route highlighting
- [x] Authentication components (login/logout)
- [x] Home page
- [x] Discounts page with API integration
- [x] Products page with full CRUD operations
  - [x] Product list display
  - [x] Product detail/edit form
  - [x] Add new product
  - [x] Edit existing product
  - [x] Delete product with confirmation modal
- [x] TypeScript types for all data models
- [x] API service layer with Axios
- [x] Custom hooks for data fetching (useDiscounts, useProducts)
- [x] Responsive styling with Bulma
- [x] Azure Static Web App configuration
- [x] Modal component for confirmations

### 🚧 In Progress / TODO

- [ ] Complete unit tests for all components
- [ ] Integration tests
- [ ] Error boundary components
- [ ] Loading states optimization
- [ ] Progressive Web App features

## API Integration

The app connects to Azure Functions API endpoints:

- `GET /api/discounts` - Get all discounts
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Azure Static Web Apps Deployment

The app is configured for deployment to Azure Static Web Apps. The configuration file is located at `public/staticwebapp.config.json`.

### Build Configuration

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **API location**: `../api`

## Converting from Angular

This application was converted from Angular using the following approach:

1. **Components**: Angular components → React functional components with hooks
2. **Services**: Angular services → React custom hooks and service modules
3. **Dependency Injection**: Angular DI → React Context API and service imports
4. **Routing**: Angular Router → React Router v6
5. **HTTP Client**: Angular HttpClient → Axios
6. **Forms**: Angular Reactive Forms → (To be implemented with React Hook Form)
7. **State Management**: Angular services → React hooks (useState, useEffect, useContext)

## Notes

- The app uses the same API endpoints as the Angular version
- Styling has been preserved from the Angular app with Bulma CSS
- The React icon replaces the Angular icon in the header
- Primary color scheme changed to React blue (#00b3e6)
