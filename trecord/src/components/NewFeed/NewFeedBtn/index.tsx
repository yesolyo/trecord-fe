import { useNavigate } from 'react-router-dom';
import * as S from './style';
import AWS from 'aws-sdk';
import { useEffect } from 'react';
interface NewFeedBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
  imageUrl: string;
  saveImageUrl: React.Dispatch<React.SetStateAction<string>>;
  titleValue: string;
  tripPlaceValue: string;
  startAtValue: string;
  endAtValue: string;
  withPeopleValue: string;
  tripIntrouceValue: string;
  satisfactionValue: string;
  title: string;
}
export const NewFeedBtn = ({
  imageFile,
  imageUrl,
  saveImageUrl,
  titleValue,
  tripPlaceValue,
  startAtValue,
  endAtValue,
  withPeopleValue,
  tripIntrouceValue,
  satisfactionValue,
  title,
}: NewFeedBtnProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (imageUrl.length > 0) {
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
        console.log(data.Location);
        saveImageUrl(data.Location);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  const handleUploadPost = () => {
    postData();
    navigate('/home');
  };

  const postData = () => {
    const getToken = localStorage.getItem('acessToken');
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/feeds`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
        body: JSON.stringify({
          name: titleValue,
          satisfaction: satisfactionValue,
          place: tripPlaceValue,
          startAt: startAtValue,
          endAt: endAtValue,
          companion: withPeopleValue,
          description: tripIntrouceValue,
          imageUrl: imageUrl,
        }),
      })
        .then((response) => {
          console.log(response);
          console.log('post 성공');
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
    <S.BtnBox disabled={titleValue.length < 0} onClick={handlePost}>
      {title}
    </S.BtnBox>
  );
};
