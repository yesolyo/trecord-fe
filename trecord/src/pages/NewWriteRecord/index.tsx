import { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Editor from '@components/common/Editor';
import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { usePostNewRecord } from '@/apis';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import { uploadS3 } from '@/utils/image';

export const NewWriteRecord = observer((): ReactElement => {
  const { recordStore } = useStore();

  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const { mutate } = usePostNewRecord();

  const postData = async () => {
    const getToken = localStorage.getItem('acessToken');

    if (getToken) {
      let imgUrl: string | undefined;

      if (recordStore.thumbNail.data)
        imgUrl = await uploadS3({ imageFile: recordStore.thumbNail.data });

      mutate(
        {
          feedId: recordStore.id,
          title: recordStore.title,
          date: `${recordStore.startDate}T00:00`,
          place: recordStore.place,
          feeling: recordStore.feel,
          weather: recordStore.weather,
          transportation: recordStore.move,
          content,
          companion: recordStore.withPeople,
          imageUrl: imgUrl,
        },
        {
          onSuccess: (data) => {
            recordStore.resetAll();
            navigate(`/recordDetail/${data.recordId}`);
          },
        },
      );
    }
  };

  return (
    <S.Layout pt="70px">
      <NavBarNew
        title="기록 남기기"
        isRegister={true}
        disabled={content.length <= 0 || content === '<p><br></p>'}
        registerClick={postData}
        onClick={() => navigate(-1)}
      />
      <Editor contentSetter={setContent} />
    </S.Layout>
  );
});
