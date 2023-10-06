import {
  ReactElement,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Icon } from '../../Icon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContext } from '../../Toast';
import { useGetUser, useGtfOutFromFeed, useInviteUser } from '@/apis';
import { User } from '@/types/user';
import StyledProfile from './StyledComponent/StyledProfile';
import StyledModalBody from './StyledComponent/StyledModalBody';
import InputContainerFallback from './InputContainerFallback';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';

interface Props {
  feedId: number;
  inputValue: string;
  inputValueSetter: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = observer(
  ({ feedId, inputValue, inputValueSetter: setInputValue }: Props) => {
    const { feedStore } = useStore();

    const [enabled, setEnabled] = useState(false);
    const [list, setList] = useState<User[]>(feedStore.contributors);
    const { data: userData } = useGetUser({ q: inputValue, enabled });
    const { mutate } = useInviteUser();
    const { mutate: gtfOut } = useGtfOutFromFeed();

    const handleClickSearch = useCallback(() => {
      setEnabled(true);
    }, []);

    const handleClickResult = useCallback(() => {
      if (userData) {
        if (list.findIndex((l) => l.userId === userData.userId) === -1) {
          mutate(
            { feedId: feedId.toString(), userToId: userData.userId },
            {
              onSuccess: () => {
                setList([...list, userData]);
                setInputValue('');
              },
            },
          );
        } else setInputValue('');
      }
    }, [userData]);

    const handleClickRemove = useCallback(
      (id: number) => {
        gtfOut(
          {
            feedId,
            userId: id,
          },
          {
            onSuccess: () => {
              const newList: User[] = JSON.parse(JSON.stringify(list));
              const index = newList.findIndex((x) => x.userId === id);
              newList.splice(index, 1);

              if (index > -1) setList(newList);
            },
          },
        );
      },
      [gtfOut],
    );

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
            list.findIndex((x) => x.userId === userData?.userId) === -1 && (
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
            {list.map((l) => (
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
  },
);

const ShareModalBody = ({
  feedId,
  inputValue,
  inputValueSetter: setInputValue,
}: Props): ReactElement => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('ToastProvider 필요');
  }

  const { showToast } = toastContext;

  return (
    <StyledModalBody>
      <div className="invite">
        <div className="title">사용자 초대</div>
        <Suspense fallback={<InputContainerFallback inputValue={inputValue} />}>
          <InputContainer
            feedId={feedId}
            inputValue={inputValue}
            inputValueSetter={setInputValue}
          />
        </Suspense>
      </div>

      <hr />
      <div className="share">
        <CopyToClipboard
          text={window.location.href}
          onCopy={() => showToast('클립 보드에 복사되었습니다.')}
        >
          <div className="button">
            <Icon iconType="share" width={24} height={24} />
            <div>초대 링크 복사</div>
          </div>
        </CopyToClipboard>
      </div>
    </StyledModalBody>
  );
};

export default ShareModalBody;
