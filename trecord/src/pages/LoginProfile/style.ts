import styled from 'styled-components';

export const ProfileBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding-top: 100px;
  height: calc(100% - 170px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
