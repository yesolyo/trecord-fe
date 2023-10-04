import { useNavigate } from 'react-router-dom';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { useEffect, useState } from 'react';
import { SquareButton } from '@components/common/button/SquareButton';
import uuid from 'react-uuid';
import useNewFeed from '@/apis/Feed/newFeed';
interface NewFeedBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
  imageUrl: string;
  saveImageUrl: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  satisfaction?: string;
  place?: string;
  latitude?: string;
  longitude?: string;
  startAt: string;
  endAt: string;
  description?: string;
  contributors: number[];
  title: string;
}
export const NewFeedBtn = ({
  imageFile,
  imageUrl,
  saveImageUrl,
  name,
  satisfaction,
  place,
  latitude,
  longitude,
  startAt,
  endAt,
  description,
  contributors,
  title,
}: NewFeedBtnProps) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { mutate } = useNewFeed();

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

    const key = uuid();

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

  const postData = () => {
    mutate(
      {
        name,
        satisfaction,
        place,
        imageUrl,
        latitude,
        longitude,
        startAt: `${startAt}T00:00`,
        endAt: `${endAt}T00:00`,
        description,
        contributors,
      },
      {
        onSuccess: () => {
          navigate('/home');
        },
      },
    );
  };

  const handlePost = () => {
    if (imageFile.originFile) {
      uploadS3();
      return;
    }
    postData();
  };

  const isDisabled = !(
    name.length > 0 &&
    startAt.length > 0 &&
    endAt.length > 0
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
