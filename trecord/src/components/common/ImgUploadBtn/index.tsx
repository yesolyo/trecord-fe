import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './style';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

interface ImgUploadBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
  imageUrl: string;
  saveImageUrl: React.Dispatch<React.SetStateAction<string>>;
  nickNameValue: string;
  title: string;
  intrduceValue: string;
}

interface PostDataProps {
  nickName: string;
  imgUrl: string;
  introduce: string;
}

export const ImgUploadBtn = ({
  imageFile,
  saveImageUrl,
  nickNameValue,
  imageUrl,
  title,
  intrduceValue,
}: ImgUploadBtnProps) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      handleUploadPost();
    }
  }, [imageUrl]);

  const uploadS3 = async () => {
    const s3Client = new S3Client({
      region: import.meta.env.VITE_AWS_REGION,
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      },
    });

    const key =
      imageFile.originFile instanceof File
        ? imageFile.originFile.name
        : 'default-name';

    const params = {
      ACL: 'public-read',
      Bucket: import.meta.env.VITE_AWS_BUCKET,
      Key: `upload/${key}`,
      Body: imageFile.originFile,
    };

    try {
      const command = new PutObjectCommand(params);
      const data = await s3Client.send(command);
      if (data.$metadata.httpStatusCode === 200) {
      }
      const url = `https://${import.meta.env.VITE_AWS_BUCKET}.s3.${
        import.meta.env.VITE_AWS_REGION
      }.amazonaws.com/upload/${key}`;
      saveImageUrl(url);
      setIsActive(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadPost = () => {
    postData({
      nickName: nickNameValue,
      imgUrl: imageUrl,
      introduce: intrduceValue,
    });
    setIsActive(false);
    navigate('/home');
  };

  const postData = ({ nickName, introduce }: PostDataProps) => {
    const getToken = localStorage.getItem('acessToken');
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
        body: JSON.stringify({
          nickname: nickName,
          imageUrl: imageUrl,
          introduction: introduce,
        }),
      })
        .then(() => {})
        .catch((err) => console.log(err));
    }
  };

  const handlePost = () => {
    if (imageFile.originFile) {
      uploadS3();
      return;
    }
    handleUploadPost();
  };

  return (
    <S.BtnBox
      type="button"
      disabled={nickNameValue.length <= 0}
      onClick={handlePost}
    >
      {title}
    </S.BtnBox>
  );
};
