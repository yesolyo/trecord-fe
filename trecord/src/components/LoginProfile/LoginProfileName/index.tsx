import { useGetUser } from '@/apis';
import * as S from './style';
import { Suspense, useEffect, useRef, useState } from 'react';
import Modal from '@components/common/Modal';
import { User } from '@/types/user';
interface LoginProfileNameProps {
  nickname: string;
  onSaveNickname: (name: string) => void;
  onCheckDuplicateNickname: (b: boolean) => void;
  edit: boolean;
  onClickEdit: (b: boolean) => void;
}
export const LoginProfileNameBody = ({
  nickname,
  onSaveNickname,
  onCheckDuplicateNickname,
  edit,
  onClickEdit,
}: LoginProfileNameProps) => {
  const [enabled, setEnabled] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [userData, setUserData] = useState<User | undefined | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useGetUser({ q: nickname, enabled });

  const handleClickSearch = (e: any) => {
    e.preventDefault();
    setEnabled(true);
    onClickEdit(false);
  };

  const handleClickEdit = () => {
    if (inputRef.current !== null) {
      onCheckDuplicateNickname(true);
      onClickEdit(true);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const handleClickConfirmModal = () => {
    if (inputRef.current !== null) {
      setIsModal((prev) => !prev);
      onClickEdit(true);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setUserData(data);
    setEnabled(false);

    if (userData?.userId) {
      setIsModal(true);
      setUserData(null);
      onCheckDuplicateNickname(true);
    }

    if (data === null) {
      onCheckDuplicateNickname(false);
    }
  }, [enabled]);

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

        <button className="button" onClick={handleClickEdit} disabled={edit}>
          수정
        </button>
        <button
          className="button"
          onClick={handleClickSearch}
          disabled={nickname === '' || !edit}
        >
          확인
        </button>
      </div>

      <Modal
        openModal={isModal}
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
  onCheckDuplicateNickname,
  edit,
  onClickEdit,
}: LoginProfileNameProps) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <LoginProfileNameBody
        nickname={nickname}
        onSaveNickname={onSaveNickname}
        onCheckDuplicateNickname={onCheckDuplicateNickname}
        edit={edit}
        onClickEdit={onClickEdit}
      />
    </Suspense>
  );
};
