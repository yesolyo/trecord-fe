import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider } from '@components/common/Toast';

const MobileLikeDiv = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.colorStyles.gray100};
  width: 100vw;
  height: 100dvh;
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
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileLikeDiv id="frame">
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </MobileLikeDiv>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
