import AWS from 'aws-sdk';

interface ImgUploadBtnProps {
  imageFile: { imgFile: string; originFile: File | Blob | string };
}

export const ImgUploadBtn = ({ imageFile }: ImgUploadBtnProps) => {
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
      .then((data) => console.log(data.Location))
      .catch((err) => console.log(err));
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (!imageFile.imgFile) {
          alert('이미지를 등록해 주세요.');
          return;
        }

        const formData = new FormData();
        formData.append('file', imageFile.originFile);
        formData.append(
          'name',
          imageFile.originFile instanceof File
            ? imageFile.originFile.name
            : 'default-name',
        );

        uploadS3(formData);
      }}
    >
      업로드!
    </button>
    // <button
    //   disabled={nickName.length <= 0}
    //   onClick={() => {
    //     navigate('/home');
    //   }}
    // >
    //   건너뛰기
    // </button>
  );
};
