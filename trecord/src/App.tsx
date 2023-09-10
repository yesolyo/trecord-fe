import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
// import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const MobileLikeDiv = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  @media (min-width: 431px) {
    border-radius: 40px;
    box-shadow: 0px 0px 10px 5px #777777;
    /** iphone pro 12 */
    width: 390px;
    height: 844px;
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      suspense: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  //TODO:sse 이벤트 연결 부분 로직(차후 기능 완성 시 연결 예정)
  // const getToken = localStorage.getItem('acessToken');
  // const EventSource = EventSourcePolyfill || NativeEventSource;
  // useEffect(() => {
  //   if (getToken) {
  //     const fetchSse = async () => {
  //       try {
  //         const sse = new EventSource(
  //           `${
  //             import.meta.env.VITE_BASE_URL
  //           }/api/v1/notifications/subscribe?token=${getToken}`,
  //           {
  //             withCredentials: true,
  //           },
  //         );
  //         sse.onmessage = async (e) => {
  //           console.log('데이터입니다', e);
  //         };
  //         sse.onerror = async (e) => {
  //           console.log('에러입니다', e);
  //           sse.close();
  //         };
  //       } catch (error) {}
  //     };
  //     fetchSse();
  //   }
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileLikeDiv id="frame">
          <Outlet />
        </MobileLikeDiv>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
