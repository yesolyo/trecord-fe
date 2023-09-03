import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
