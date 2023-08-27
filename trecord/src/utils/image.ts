import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import uuid from 'react-uuid';
export const uploadS3 = async ({
  imageFile,
  afterUploadSuccess = undefined,
}: {
  imageFile: File | Blob | string;
  afterUploadSuccess?: () => void;
}): Promise<string | undefined> => {
  const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });

  const key = imageFile instanceof File ? uuid() : Date.now(); // 이름이 없을 경우 현재 시간을 이름으로 지정

  const params = {
    ACL: 'public-read',
    Bucket: import.meta.env.VITE_AWS_BUCKET,
    Key: `upload/${key}`,
    Body: imageFile,
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3Client.send(command);
    if (data.$metadata.httpStatusCode === 200) {
      afterUploadSuccess?.();
    }
    const url = `https://${import.meta.env.VITE_AWS_BUCKET}.s3.${
      import.meta.env.VITE_AWS_REGION
    }.amazonaws.com/upload/${key}`;

    return url;
  } catch (error) {
    console.error(error);
  }
};
