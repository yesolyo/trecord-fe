import { useNavigate } from 'react-router-dom';
import * as S from './style';
import AWS from 'aws-sdk';
import { useEffect, useState } from 'react';
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
        console.log(data.Location);
        saveImageUrl(data.Location);
        setIsActive(true);
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
          startAt: `${startAtValue}T00:00`,
          endAt: `${endAtValue}T00:00`,
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

  const isDisabled = !(
    titleValue.length > 0 &&
    startAtValue.length > 0 &&
    endAtValue.length > 0
  );

  return (
    <S.BtnBox disabled={isDisabled} onClick={handlePost}>
      {title}
    </S.BtnBox>
  );
};
