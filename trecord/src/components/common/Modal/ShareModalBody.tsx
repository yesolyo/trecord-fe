import { ReactElement } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px;
  gap: 20px;

  .invite {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .title {
      text-align: center;
      color: var(--Gray900, #1e1e1e);
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 155.556% */
    }
    .input-container {
      display: inline-flex;
      gap: 10px;
      input {
        box-sizing: border-box;
        flex: 1;
        height: 48px;
        padding-left: 12px;
        padding-top: 2px;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
        color: #999;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        &:focused {
          border: 1px solid #1e1e1e;
        }
      }
      button {
        border: 0;
        width: 61px;
        height: 48px;
        flex-shrink: 0;
        border-radius: 8px;
        background-color: #1e1e1e;
        color: var(--Gray100, #fff);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */

        &:disabled {
          background-color: var(--Gray500, #b8b8b8);
        }
      }
    }
  }

  hr {
    width: 100%;
    border-top: 1px solid #cdcdcd;
  }

  .share {
    display: inline-flex;
    justify-content: flex-end;
    gap: 5px;
    color: var(--Gray900, #1e1e1e);

    /* Body-M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

interface Props {
  inputValue: string;
  inputValueSetter: React.Dispatch<React.SetStateAction<string>>;
}

const ShareModalBody = ({
  inputValue,
  inputValueSetter: setInputValue,
}: Props): ReactElement => {
  return (
    <StyledModalBody>
      <div className="invite">
        <div className="title">사용자 초대</div>
        <div className="input-container">
          <input
            type="text"
            placeholder={'닉네임을 입력하세요'}
            id="input_text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="button" disabled={inputValue === ''}>
            초대
          </button>
        </div>
      </div>
      <hr />
      <div className="share">
        <Icon iconType="share" width={24} height={24} />
        <div>초대 링크 복사</div>
      </div>
    </StyledModalBody>
  );
};

export default ShareModalBody;
