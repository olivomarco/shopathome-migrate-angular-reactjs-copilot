import { Link } from 'react-router-dom';

export const HeaderBarBrand = () => {
  return (
    <div className="navbar-brand">
      <a
        className="navbar-item"
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab js-logo fa-react fa-2x" aria-hidden="true"></i>
      </a>
      <Link className="navbar-item nav-home" to="/">
        <span className="brand-first">SHOP</span>
        <span className="brand-second">AT</span>
        <span className="brand-third">HOME</span>
      </Link>
    </div>
  );
};
