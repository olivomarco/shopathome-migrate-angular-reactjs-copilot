import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { UserInfo } from '../types';
import { AuthLogin } from './AuthLogin';
import { AuthLogout } from './AuthLogout';

export const Nav = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const providers = ['github', 'Microsoft Entra ID'];

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUserInfo(clientPrincipal || null);
    } catch (error) {
      console.error('No profile could be found');
      setUserInfo(null);
    }
  };

  return (
    <>
      <nav className="menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'router-link-active' : ''}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'router-link-active' : ''}>
            <span>My List</span>
          </NavLink>
          <NavLink to="/discounts" className={({ isActive }) => isActive ? 'router-link-active' : ''}>
            <span>My Discounts</span>
          </NavLink>
        </ul>
      </nav>
      <nav className="menu auth">
        <p className="menu-label">Auth</p>
        <div className="menu-list auth">
          {!userInfo && providers.map((provider) => (
            <AuthLogin key={provider} provider={provider} />
          ))}
          {userInfo && <AuthLogout />}
        </div>
      </nav>
      {userInfo && (
        <div className="user">
          <p>Welcome</p>
          <p>{userInfo.userDetails}</p>
          <p>{userInfo.identityProvider}</p>
        </div>
      )}
    </>
  );
};
