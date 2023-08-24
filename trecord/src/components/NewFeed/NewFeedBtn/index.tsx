import { useNavigate } from 'react-router-dom';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { useEffect, useState } from 'react';
import { SquareButton } from '@components/common/button/SquareButton';
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
      postData();
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
      console.log('성공');
    } catch (error) {
      console.error(error);
    }
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
          if (response.status === 200 || response.status === 201) {
            navigate('/home');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handlePost = () => {
    if (imageFile.originFile) {
      uploadS3();
      return;
    }
    postData();
  };

  const isDisabled = !(
    titleValue.length > 0 &&
    startAtValue.length > 0 &&
    endAtValue.length > 0
  );

  const constant = {
    square: {
      title: title,
      width: '342px',
      height: '56px',
      disabled: isDisabled,
      isDark: true,
      onClick: handlePost,
    },
  };

  return <SquareButton {...constant.square} />;
};
