import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthLogin } from './AuthLogin';
import { AuthLogout } from './AuthLogout';
import type { UserInfo } from '../../types';

export const Nav: React.FC = () => {
  const providers = ['github', 'Microsoft Entra ID'];
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        setUserInfo(clientPrincipal);
      } catch (error) {
        // Silently handle auth check failure (expected in local dev)
        setUserInfo(null);
      }
    };

    getUserInfo();
  }, []);

  return (
    <>
      <nav className="menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'router-link-active' : '')}>
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'router-link-active' : '')}
          >
            <span>My List</span>
          </NavLink>
          <NavLink
            to="/discounts"
            className={({ isActive }) => (isActive ? 'router-link-active' : '')}
          >
            <span>My Discounts</span>
          </NavLink>
        </ul>
      </nav>
      <nav className="menu auth">
        <p className="menu-label">Auth</p>
        <div className="menu-list auth">
          {!userInfo && (
            <>
              {providers.map((provider) => (
                <AuthLogin key={provider} provider={provider} />
              ))}
            </>
          )}
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
