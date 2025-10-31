import React from 'react';

export const AuthLogout: React.FC = () => {
  const goAuth = () => {
    const { pathname } = window.location;
    const redirect = `post_logout_redirect_uri=${pathname}`;
    const url = `/.auth/logout?${redirect}`;
    window.location.href = url;
  };

  return (
    <div className="auth-link" onClick={goAuth}>
      Logout
    </div>
  );
};
