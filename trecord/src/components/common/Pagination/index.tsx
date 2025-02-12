import { ReactElement } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 22px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 12px;

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.colorStyles.gray400};
  }

  .more-container {
    border: 0;
    display: inline-flex;
    padding: 9px 20px;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.colorStyles.gray200};
    gap: 12px;

    &:hover,
    &:focus {
      background-color: #e7e7e7;
    }

    .text {
      display: inline-block;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.colorStyles.gray700};

      /* Caption-S */
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 150% */
    }
  }
`;

interface Props {
  loading?: boolean;
  text?: string;
  onClick?: (val?: unknown) => void;
}

const Pagination = ({
  loading = false,
  text = '더보기',
  onClick = undefined,
}: Props): ReactElement => {
  return (
    <StyledDiv>
      <hr />
      <button className="more-container" disabled={loading} onClick={onClick}>
        <div className="text">{text}</div>
        <Icon iconType="arrowDown" />
      </button>
      {loading && <Spinner />}
      <hr />
    </StyledDiv>
  );
};

export default Pagination;
