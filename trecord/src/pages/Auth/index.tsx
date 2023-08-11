import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const queryCode = url.searchParams.get('code');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/google-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authorizationCode: queryCode,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('로그인 데이터', data.data);
        console.log('엑세스토큰', data.data.token.token);
        localStorage.setItem('acessToken', data.data.token.token);
        localStorage.setItem('refrashToken', data.data.token.refreshToken);
        if (!data.data.user.nickname) {
          navigate('/loginProfile');
        } else {
          navigate('/home');
        }
      })
      .catch((err) => console.log(err));
  });
};
