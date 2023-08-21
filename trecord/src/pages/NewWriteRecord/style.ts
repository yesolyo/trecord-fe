import styled from 'styled-components';

interface LayoutProps {
  pt?: string;
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  justify-content: center;
  padding-top: ${({ pt }) => (pt ? pt : '100px')};
  textarea {
    border: none;
  }
`;
