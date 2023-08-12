import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
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

  const uploadS3 = () => {
    AWS.config.update({
      region: import.meta.env.VITE_AWS_REGION,
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    });

    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: 'public-read',
        Bucket: 'trecordbucket',
        Key: `upload/${
          imageFile.originFile instanceof File
            ? imageFile.originFile.name
            : 'default-name'
        }`,
        Body: imageFile.originFile,
      },
    });

    const promise = upload.promise();

    promise
      .then((data) => {
        saveImageUrl(data.Location);
        setIsActive(true);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
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
        .then((response) => {
          console.log(response);
        })
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
