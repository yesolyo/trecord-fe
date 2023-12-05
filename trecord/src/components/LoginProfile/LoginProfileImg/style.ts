import styled from 'styled-components';

export const Layout = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;

  position: relative;
  z-index: 0;
  width: 74px;
  height: 74px;

  img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    object-fit: cover;
  }

  .upload-box {
    position: absolute;
    top: 50px;
    left: 50px;
  }
`;
