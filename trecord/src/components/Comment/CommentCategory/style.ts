import styled from 'styled-components';

export const Layout = styled.div`
  svg {
    display: flex;
    position: relative;
  }

  div:not(:first-child) {
    display: flex;
    position: absolute;
    right: 25px;
  }
`;

// export const DimmedBox = styled.div`
//   width: 100%;
//   height: 100%;
//   background: gray;
// `;
