import { useGetUser } from '@/apis';
import * as S from './style';
import { Suspense, useEffect, useState } from 'react';
import Modal from '@components/common/Modal';
interface LoginProfileNameProps {
  nickNameValue: string;
  nickNameSetValue: React.Dispatch<React.SetStateAction<string>>;
  setIsNickName: React.Dispatch<React.SetStateAction<boolean>>;
  userNicknameData?: string;
}
export const LoginProfileNameBody = ({
  nickNameValue,
  nickNameSetValue,
  setIsNickName,
  userNicknameData,
}: LoginProfileNameProps) => {
  const [enabled, setEnabled] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const { data: userData } = useGetUser({ q: nickNameValue, enabled });

  const handleClickSearch = (e: any) => {
    e.preventDefault();
    setEnabled(true);
    setIsNickName(false);
  };

  useEffect(() => {
    setEnabled(false);
    if (userData?.userId) {
      setIsModal(true);
      nickNameSetValue('');
      setIsNickName(true);
    }
    if (userNicknameData === nickNameValue) {
      setIsNickName(false);
    }
    if (userNicknameData !== nickNameValue) {
      setIsNickName(true);
    }
  }, [nickNameValue]);

  return (
    <S.Layout>
      <label htmlFor="nickName">닉네임(필수)</label>
      <div className="container">
        <input
          type="text"
          placeholder="닉네임을 입력해주세요"
          id="nickName"
          value={nickNameValue}
          onChange={(e) => {
            nickNameSetValue(e.target.value);
          }}
        />
        <button
          className="button"
          onClick={handleClickSearch}
          disabled={nickNameValue === ''}
        >
          확인
        </button>
      </div>

      <Modal
        openModal={isModal}
        title="이미 닉네임이 존재합니다"
        confirmText="확인"
        onConfirm={() => setIsModal((prev) => !prev)}
      />
    </S.Layout>
  );
};

export const LoginProfileName = ({
  nickNameValue,
  nickNameSetValue,
  setIsNickName,
  userNicknameData,
}: LoginProfileNameProps) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <LoginProfileNameBody
        nickNameValue={nickNameValue}
        nickNameSetValue={nickNameSetValue}
        setIsNickName={setIsNickName}
        userNicknameData={userNicknameData}
      />
    </Suspense>
  );
};
