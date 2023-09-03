import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colorStyles } from './color';

export const GlobalStyle = createGlobalStyle`
${reset}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh;
  margin: 0;
  font: inherit;
  color: ${colorStyles.gray900};
  background-color: #000000;
}
`;
