import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider } from '@components/common/Toast';
import { RealTimeNotificationProvider } from '@components/common/RealTimeNotification';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('resize', () => setScreenSize());

const MobileLikeDiv = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  box-sizing: border-box;
  .module {
    width: 100vh;
  }
  @media (min-width: 431px) {
    border-radius: 40px;
    box-shadow: 0px 0px 10px 5px #777777;
    /** iphone pro 12 */
    width: 390px;
    .module {
      height: calc(var(--vh, 1vh) * 100);
    }
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
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileLikeDiv id="frame">
          <RealTimeNotificationProvider>
            <ToastProvider>
              <Outlet />
            </ToastProvider>
          </RealTimeNotificationProvider>
        </MobileLikeDiv>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
