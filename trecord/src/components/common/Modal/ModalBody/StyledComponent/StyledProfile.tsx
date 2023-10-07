import styled from 'styled-components';

const StyledProfile = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  .profile {
    display: inline-flex;
    gap: 12px;

    .name {
      color: var(--Gray900, #1e1e1e);
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    img {
      max-width: 26px;
      max-height: 26px;
      border-radius: 100%;
    }
  }
`;

export default StyledProfile;
