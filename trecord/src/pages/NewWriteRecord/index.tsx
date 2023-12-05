import { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Editor from '@components/common/Editor';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';

import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import { uploadS3 } from '@/utils/image';
import { useNewRecordMutation } from '@/apis';

export const NewWriteRecord = observer((): ReactElement => {
  const { recordStore } = useStore();

  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const { mutate } = useNewRecordMutation();

  const handleSaveRecord = async () => {
    let imgUrl: string | undefined;

    if (recordStore.thumbNail.data)
      imgUrl = await uploadS3({ imageFile: recordStore.thumbNail.data });

    mutate(
      {
        feedId: recordStore.id,
        title: recordStore.title,
        date: `${recordStore.startDate}T00:00`,
        place: recordStore.place,
        latitude: recordStore.latitude,
        longitude: recordStore.longitude,
        feeling: recordStore.feel,
        weather: recordStore.weather,
        transportation: recordStore.move,
        content,
        imageUrl: imgUrl,
      },
      {
        onSuccess: (data) => {
          recordStore.resetAll();
          navigate(`/recordDetail/${data.recordId}`, {
            state: {
              feedId: recordStore.id,
            },
          });
        },
      },
    );
  };

  return (
    <S.Layout pt="70px">
      <NavBarNew
        title="기록 남기기"
        isRegister={true}
        disabled={content.length <= 0 || content === '<p><br></p>'}
        registerClick={handleSaveRecord}
        onClick={() => navigate(-1)}
      />
      <Editor content={content} contentSetter={setContent} />
    </S.Layout>
  );
});
