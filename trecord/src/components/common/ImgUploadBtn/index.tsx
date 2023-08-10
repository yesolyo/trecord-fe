import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
interface ImgUploadBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
  imageUrl: string;
  saveImageUrl: React.Dispatch<React.SetStateAction<string>>;
  nickNameValue: string;
  title: string;
}

interface PostDataProps {
  nickName: string;
  imgUrl: string;
}

export const ImgUploadBtn = ({
  imageFile,
  saveImageUrl,
  nickNameValue,
  imageUrl,
  title,
}: ImgUploadBtnProps) => {
  const navigate = useNavigate();

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
      .then((data) => saveImageUrl(data.Location))
      .catch((err) => console.log(err));
  };

  const postData = ({ nickName }: PostDataProps) => {
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
          imageUrl:
            'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+10.03.06.png',
          introduction: '소개글',
        }),
      })
        .then((response) => {
          console.log(response);
          console.log('post 성공');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <S.BtnBox
      type="button"
      disabled={nickNameValue.length <= 0}
      onClick={() => {
        if (imageFile.originFile) {
          const formData = new FormData();
          formData.append('file', imageFile.originFile);
          formData.append(
            'name',
            imageFile.originFile instanceof File
              ? imageFile.originFile.name
              : 'default-name',
          );

          uploadS3();
        }
        postData({ nickName: nickNameValue, imgUrl: imageUrl });
        navigate('/home');
      }}
    >
      {title}
    </S.BtnBox>
  );
};
