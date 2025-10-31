import React from 'react';
import { HeaderBarBrand } from './HeaderBarBrand';

export const HeaderBar: React.FC = () => {
  return (
    <header>
      <nav
        className="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <HeaderBarBrand />
      </nav>
    </header>
  );
};
