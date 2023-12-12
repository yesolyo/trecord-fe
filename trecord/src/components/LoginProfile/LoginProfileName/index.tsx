import { useUserQuery } from '@/apis';
import * as S from './style';
import { Suspense, useRef, useState } from 'react';
import Modal from '@components/common/Modal';
import { useQueryClient } from '@tanstack/react-query';
import USER_API_KEY from '@/apis/User/constants';
import { useDebounce } from '@/hooks/useDebounce';
interface LoginProfileNameProps {
  nickname: string;
  onSaveNickname: (name: string) => void;
  onIsDuplicateNickname: (b: boolean) => void;
}
export const LoginProfileNameBody = ({
  nickname,
  onSaveNickname,
  onIsDuplicateNickname,
}: LoginProfileNameProps) => {
  const debouncedNickname = useDebounce(nickname, 300);
  const [isNicknameDuplicateModal, setIsNicknameDuplicateModal] =
    useState(false);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { refetch } = useUserQuery({ q: debouncedNickname });
  const queryCilent = useQueryClient();

  const handleCheckDuplicateNickname = async (e: any) => {
    e.preventDefault();
    const userData = await refetch();
    if (userData.data?.userId) {
      setIsNicknameDuplicateModal(true);
      queryCilent.removeQueries([USER_API_KEY.USER, { nickname }]);
      onIsDuplicateNickname(true);
    } else {
      onIsDuplicateNickname(false);
    }
    setEdit(false);
  };

  const handleClickEditNickname = () => {
    if (inputRef.current !== null) {
      onIsDuplicateNickname(true);
      setEdit(true);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const handleClickConfirmModal = () => {
    if (inputRef.current !== null) {
      setIsNicknameDuplicateModal((prev) => !prev);
      setEdit(true);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  return (
    <S.Layout>
      <label htmlFor="nickName">닉네임(필수)</label>
      <div className="container">
        <input
          type="text"
          ref={inputRef}
          placeholder="닉네임을 입력해주세요"
          id="nickName"
          value={nickname}
          disabled={!edit}
          onChange={(e) => {
            onSaveNickname(e.target.value);
          }}
        />

        <button
          className="button"
          onClick={handleClickEditNickname}
          disabled={edit}
        >
          수정
        </button>
        <button
          className="button"
          onClick={handleCheckDuplicateNickname}
          disabled={nickname === '' || !edit}
        >
          확인
        </button>
      </div>

      <Modal
        openModal={isNicknameDuplicateModal}
        title="이미 닉네임이 존재합니다"
        confirmText="확인"
        onConfirm={handleClickConfirmModal}
      />
    </S.Layout>
  );
};

export const LoginProfileName = ({
  nickname,
  onSaveNickname,
  onIsDuplicateNickname,
}: LoginProfileNameProps) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <LoginProfileNameBody
        nickname={nickname}
        onSaveNickname={onSaveNickname}
        onIsDuplicateNickname={onIsDuplicateNickname}
      />
    </Suspense>
  );
};
