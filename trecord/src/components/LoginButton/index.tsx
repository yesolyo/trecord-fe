import React from 'react';

export const LoginButton = () => {
  const loginUri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID
  }&redirect_uri=http://localhost:3000/auth&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  const githubLoginHandler = () => {
    window.location.href = loginUri;
  };

  return <button onClick={githubLoginHandler}>Google Button</button>;
};
