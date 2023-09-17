import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  position: relative;

  div:not(:first-child) {
    display: flex;
    position: absolute;
    top: 20px;
    right: 0px;
  }
`;
