import {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { useGetUser } from '@/apis';
import Skeleton from '../skeleton';
import { User } from '@/types/user';

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
    .input-result {
      display: flex;
      flex-direction: column;
      padding-top: 10px;

      .user-list {
      }
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
`;

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
  }
`;

interface Props {
  contributors: User[];
  contributorsSetter: React.Dispatch<React.SetStateAction<User[]>>;
}

const InputContainerFallback = ({ inputValue }: { inputValue: string }) => {
  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          type="text"
          placeholder={'닉네임을 입력하세요'}
          id="input_text"
          value={inputValue}
          disabled
        />
        <button type="button" disabled>
          초대
        </button>
      </div>
      <div className="input-result">
        <Skeleton height="30px" />
      </div>
    </div>
  );
};

const InputContainer = ({
  contributors,
  contributorsSetter: setContributers,
}: Props) => {
  const [enabled, setEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { data: userData } = useGetUser({ q: inputValue, enabled });

  const handleClickSearch = useCallback(() => {
    setEnabled(true);
  }, []);

  const handleClickResult = useCallback(() => {
    if (userData) {
      setContributers([...contributors, userData]);
    }
    setInputValue('');
  }, [userData]);

  const handleClickRemove = (id: number) => {
    const newList: User[] = JSON.parse(JSON.stringify(contributors));
    const index = newList.findIndex((x) => x.userId === id);
    newList.splice(index, 1);

    if (index > -1) setContributers(newList);
  };

  useEffect(() => {
    setEnabled(false);
  }, [userData]);

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          type="text"
          placeholder={'닉네임을 입력하세요'}
          id="input_text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          disabled={inputValue === ''}
          onClick={handleClickSearch}
        >
          초대
        </button>
      </div>
      <div className="input-result">
        {userData &&
          contributors.findIndex((x) => x.userId === userData?.userId) ===
            -1 && (
            <StyledProfile onClick={handleClickResult}>
              <div className="profile">
                {userData.imageUrl && <img src={userData.imageUrl} />}
                {!userData.imageUrl && (
                  <Icon iconType="profile" width={24} height={24} />
                )}
                <div className="name">{userData.nickname}</div>
              </div>
            </StyledProfile>
          )}
        <div className="user-list">
          {contributors.map((l) => (
            <StyledProfile onClick={handleClickResult}>
              <div className="profile">
                {l.imageUrl && <img src={l.imageUrl} />}
                {!l.imageUrl && (
                  <Icon iconType="profile" width={24} height={24} />
                )}
                <div className="name">{l.nickname}</div>
              </div>
              <div onClick={() => handleClickRemove(l.userId)}>
                <Icon iconType="close" width={24} height={24} />
              </div>
            </StyledProfile>
          ))}
        </div>
      </div>
    </div>
  );
};

const InviteFeedModalBody = ({
  contributors,
  contributorsSetter: setContributers,
}: Props): ReactElement => {
  return (
    <StyledModalBody>
      <div className="invite">
        <div className="title">사용자 초대</div>
        <Suspense fallback={<InputContainerFallback inputValue={''} />}>
          <InputContainer
            contributors={contributors}
            contributorsSetter={setContributers}
          />
        </Suspense>
      </div>
    </StyledModalBody>
  );
};

export default InviteFeedModalBody;
