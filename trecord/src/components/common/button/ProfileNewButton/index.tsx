import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { SquareBtn } from '../../SquareBtn';
import uuid from 'react-uuid';
import usePostNewUser from '@/apis/User/postNewUser';

interface ImgUploadBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
  imageUrl: string;
  saveImageUrl: React.Dispatch<React.SetStateAction<string>>;
  nickNameValue: string;
  title: string;
  intrduceValue: string;
  isNickName: boolean;
}

export const ProfileNewButton = ({
  imageFile,
  saveImageUrl,
  nickNameValue,
  imageUrl,
  title,
  intrduceValue,
  isNickName,
}: ImgUploadBtnProps) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { mutate } = usePostNewUser();
  useEffect(() => {
    if (isActive) {
      handlePostNewUser();
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

    const key = imageFile instanceof File ? uuid() : Date.now();

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

  const handlePostNewUser = () => {
    mutate(
      {
        nickname: nickNameValue,
        imageUrl,
        introduction: intrduceValue,
      },
      {
        onSuccess: () => {
          setIsActive(false);
          navigate('/mypage', { replace: true });
        },
      },
    );
  };

  const handlePost = (e: any) => {
    if (imageFile.originFile) {
      uploadS3();
      e.preventDefault();
      return;
    }
    handlePostNewUser();
    e.preventDefault();
  };

  const constant = {
    sqare: {
      title: title,
      width: '342px',
      height: '56px',
      disabled: isNickName || nickNameValue === '',
      onClick: handlePost,
    },
  };

  return <SquareBtn {...constant.sqare} />;
};
