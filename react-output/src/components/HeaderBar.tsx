import { HeaderBarBrand } from './HeaderBarBrand';

export const HeaderBar = () => {
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
