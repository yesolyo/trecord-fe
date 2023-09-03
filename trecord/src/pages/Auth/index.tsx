import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
        redirectionUri: import.meta.env.VITE_REDIRECT_URI,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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

  return <StyledDiv>로그인 중입니다.</StyledDiv>;
};
