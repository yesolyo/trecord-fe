import { useRef } from 'react';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { uploadS3 } from '@/utils/image';
interface LoginProfileImgPrpos {
  onSaveProfileImgUrl: (url: string) => void;
  profileImgUrl?: string;
}

export const LoginProfileImg = ({
  onSaveProfileImgUrl,
  profileImgUrl,
}: LoginProfileImgPrpos) => {
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleSaveImgFile = () => {
    if (fileInput.current && fileInput.current.files) {
      const file = fileInput.current?.files[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        if (file !== null && reader.result) {
          try {
            const url = (await uploadS3({ imageFile: file })) ?? '';
            onSaveProfileImgUrl(url);
          } catch (e) {
            console.error(e);
          }
        }
      };
    }
  };

  return (
    <S.Layout>
      {profileImgUrl ? (
        <img src={profileImgUrl} alt="프로필 이미지" height="280" width="180" />
      ) : (
        <Icon iconType="profile" width={74} />
      )}
      <div className="upload-box">
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
      </div>
    </S.Layout>
  );
};
