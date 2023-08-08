import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';

interface ImgUploadBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
  imageUrl: string;
  saveImageUrl: React.Dispatch<React.SetStateAction<string>>;
  nickNameValue: string;
}

export const ImgUploadBtn = ({
  imageFile,
  imageUrl,
  saveImageUrl,
  nickNameValue,
}: ImgUploadBtnProps) => {
  const navigate = useNavigate();
  const uploadS3 = (formDate: any) => {
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

  return (
    <button
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

          uploadS3(formData);
        }
        navigate('/home');
      }}
    >
      건너뛰기
    </button>
  );
};
