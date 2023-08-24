import { useRef, useState } from 'react';
import * as S from './style';
import { Icon } from '@components/common/Icon';
interface LoginProfileImgPrpos {
  profileFile: React.Dispatch<
    React.SetStateAction<{ imgFile: string; originFile: File | Blob | string }>
  >;
  profileFileValue: { imgFile: string; originFile: File | Blob | string };
  profileUrl?: string;
}

export const LoginProfileImg = ({
  profileFile,
  profileFileValue,
  profileUrl,
}: LoginProfileImgPrpos) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const handleSaveImgFile = () => {
    if (fileInput.current && fileInput.current.files) {
      const file = fileInput.current?.files[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (file !== null && reader.result) {
          profileFile({
            imgFile: String(reader.result),
            originFile: file,
          });
          setIsProfileActive(true);
        }
      };
    }
  };

  const ChoiceImage = () => {
    if (profileUrl && !isProfileActive) {
      return (
        <img src={profileUrl} alt="프로필 이미지" height="280" width="180" />
      );
    } else if (isProfileActive) {
      return (
        <img
          src={profileFileValue.imgFile}
          alt="프로필 이미지"
          height="280"
          width="180"
        />
      );
    } else {
      return <Icon iconType="profile" width={74} />;
    }
  };

  return (
    <>
      <S.Layout>
        <S.ImgBox>{ChoiceImage()}</S.ImgBox>
        <S.UploadBox>
          <label htmlFor="input-file">
            <Icon iconType="add" width={24} />
          </label>
          <input
            type="file"
            id="input-file"
            accept="image/*"
            ref={fileInput}
            onChange={handleSaveImgFile}
            style={{ display: 'none' }}
          />
        </S.UploadBox>
      </S.Layout>
    </>
  );
};
