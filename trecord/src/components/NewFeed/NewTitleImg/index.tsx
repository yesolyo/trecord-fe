import { Icon } from '@components/common/Icon';
import { useRef, useState } from 'react';
import * as S from './style';
interface NewTitleImgPrpos {
  titleImgFile: React.Dispatch<
    React.SetStateAction<{ imgFile: string; originFile: File | Blob | string }>
  >;
  titleImgFileValue: { imgFile: string; originFile: File | Blob | string };
}
export const NewTitleImg = ({
  titleImgFile,
  titleImgFileValue,
}: NewTitleImgPrpos) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const handleSaveImgFile = () => {
    if (fileInput.current && fileInput.current.files) {
      const file = fileInput.current?.files[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (file !== null && reader.result) {
          titleImgFile({
            imgFile: String(reader.result),
            originFile: file,
          });
          setIsProfileActive(true);
        }
      };
    }
  };

  return (
    <S.Layout>
      <label htmlFor="input-file">
        {isProfileActive ? (
          <img src={titleImgFileValue.imgFile} alt="프로필 이미지" />
        ) : (
          <S.ImgBox>
            <Icon iconType="gallery" width={33} />
            <div className="title_img">썸네일 사진을 골라주세요</div>
          </S.ImgBox>
        )}
      </label>
      <input
        type="file"
        id="input-file"
        accept="image/*"
        ref={fileInput}
        onChange={handleSaveImgFile}
        style={{ display: 'none' }}
      />
    </S.Layout>
  );
};
