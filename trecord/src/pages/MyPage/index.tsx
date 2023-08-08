import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
export const MyPage = () => {
  const [profileFile, setProfileFile] = useState<{
    imgFile: string;
    originFile: File | null;
  }>({
    imgFile:
      'https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg',
    originFile: null,
  });
  const [nickName, setNickName] = useState<string>('안예림');
  const [introduce, setIntroduce] = useState<string>('안예림 소개글임');
  const [isEditing, setIsEditing] = useState(false);
  return (
    <S.Layout
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      {isEditing ? (
        <LoginProfileImg
          profileFile={setProfileFile}
          profileFileValue={profileFile}
        />
      ) : (
        <img
          src={profileFile.imgFile}
          alt="프로필 이미지"
          height="280"
          width="180"
        ></img>
      )}
      닉네임: {''}
      {isEditing ? (
        <LoginProfileName
          nickNameValue={nickName}
          nickNameSetValue={setNickName}
        />
      ) : (
        <b>{nickName}</b>
      )}
      소개글: {''}
      {isEditing ? (
        <LoginProfileIntroduce
          introduceValue={introduce}
          introduceSetValue={setIntroduce}
        />
      ) : (
        <b>{introduce}</b>
      )}
      <button type="submit">{isEditing ? '저장하기' : '수정하기'}</button>
    </S.Layout>
  );
};
