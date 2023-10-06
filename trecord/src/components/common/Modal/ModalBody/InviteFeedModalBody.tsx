import {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Icon } from '../../Icon';
import { useGetUser } from '@/apis';
import { User } from '@/types/user';
import StyledProfile from './StyledComponent/StyledProfile';
import StyledModalBody from './StyledComponent/StyledModalBody';
import InputContainerFallback from './InputContainerFallback';

interface Props {
  contributors: User[];
  contributorsSetter: React.Dispatch<React.SetStateAction<User[]>>;
}

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
      if (contributors.findIndex((l) => l.userId === userData.userId) === -1) {
        setContributers([...contributors, userData]);
      }
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
            <StyledProfile onClick={handleClickResult} key={l.userId}>
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
