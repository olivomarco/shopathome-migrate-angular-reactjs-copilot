import React from 'react';

interface AuthLoginProps {
  provider: string;
}

export const AuthLogin: React.FC<AuthLoginProps> = ({ provider }) => {
  const goAuth = () => {
    const { pathname } = window.location;
    const redirect = `post_login_redirect_uri=${pathname}`;
    const url = `/.auth/login/${provider}?${redirect}`;
    window.location.href = url;
  };

  return (
    <div className="auth-link" onClick={goAuth}>
      {provider}
    </div>
  );
};
