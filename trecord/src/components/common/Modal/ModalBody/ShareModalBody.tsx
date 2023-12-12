import { ReactElement, Suspense, useContext } from 'react';
import { Icon } from '../../Icon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContext } from '../../Toast';
import { User } from '@/types/user';
import StyledProfile from './StyledComponent/StyledProfile';
import StyledModalBody from './StyledComponent/StyledModalBody';
import InputContainerFallback from './InputContainerFallback';
import { observer } from 'mobx-react-lite';
import { useDebounce } from '@/hooks/useDebounce';
import { useQueryClient } from '@tanstack/react-query';
import USER_API_KEY from '@/apis/User/constants';
import {
  useGtfOutFromFeedMutation,
  useInviteUserMutation,
  useUserQuery,
} from '@/apis';

interface Props {
  writerId: number;
  feedId: number;
  inputValue: string;
  contributors: User[];
  contributorsSetter: React.Dispatch<React.SetStateAction<User[]>>;
  inputValueSetter: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = observer(
  ({
    writerId,
    feedId,
    inputValue,
    contributors,
    contributorsSetter: setContributors,
    inputValueSetter: setInputValue,
  }: Props) => {
    const nickname = useDebounce(inputValue, 300);
    const { data: userData, refetch } = useUserQuery({ q: nickname });
    const { mutate } = useInviteUserMutation();
    const { mutate: gtfOut } = useGtfOutFromFeedMutation();
    const queryClient = useQueryClient();
    const handleClickSearch = () => {
      if (
        contributors.filter((user) => user.nickname === inputValue).length === 0
      ) {
        refetch();
      } else {
        setInputValue('');
      }
    };

    const handleClickResult = () => {
      if (userData) {
        if (
          contributors.findIndex((l) => l.userId === userData.userId) === -1
        ) {
          mutate(
            { feedId: feedId.toString(), userToId: userData.userId },
            {
              onSuccess: () => {
                setContributors([...contributors, userData]);
                queryClient.removeQueries([
                  USER_API_KEY.USER,
                  { q: inputValue },
                ]);
                setInputValue('');
              },
            },
          );
        } else setInputValue('');
      }
    };

    const handleClickRemove = (id: number) => {
      gtfOut(
        {
          feedId,
          userId: id,
        },
        {
          onSuccess: () => {
            const newList: User[] = JSON.parse(JSON.stringify(contributors));
            const index = newList.findIndex((x) => x.userId === id);
            newList.splice(index, 1);
            if (index > -1) setContributors(newList);
          },
        },
      );
    };

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
                <div
                  style={{
                    display: l.userId === writerId ? 'none' : undefined,
                  }}
                  onClick={() => handleClickRemove(l.userId)}
                >
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
  writerId,
  feedId,
  contributors,
  contributorsSetter,
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
            writerId={writerId}
            feedId={feedId}
            contributors={contributors}
            contributorsSetter={contributorsSetter}
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
