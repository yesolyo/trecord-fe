import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colorStyles } from './color';

export const GlobalStyle = createGlobalStyle`
${reset}
body {
  width: 100%;
  height:100%;
  margin: 0;
  font: inherit;
  color: ${colorStyles.gray900};
}
`;
