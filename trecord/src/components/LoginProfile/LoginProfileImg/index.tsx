import { useRef } from 'react';

interface LoginProfileImgPrpos {
  profileFile: React.Dispatch<
    React.SetStateAction<{ imgFile: string; originFile: File | null }>
  >;
  profileFileValue: { imgFile: string; originFile: File | null };
}

export const LoginProfileImg = ({
  profileFile,
  profileFileValue,
}: LoginProfileImgPrpos) => {
  const fileInput = useRef<HTMLInputElement | null>(null);

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
        }
      };
    }
  };

  return (
    <>
      <img
        src={profileFileValue.imgFile}
        alt="프로필 이미지"
        height="280"
        width="180"
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleSaveImgFile}
      />
    </>
  );
};
