import { useState, ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/pages/NewWriteRecord/style';
import Editor from '@components/common/Editor';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useModifyRecord } from '@/apis';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import { uploadS3 } from '@/utils/image';

const ModifyWriteRecord = observer((): ReactElement => {
  const { recordStore } = useStore();

  const [content, setContent] = useState(recordStore.content);
  const { id: recordId = '' } = useParams();
  const navigate = useNavigate();

  const { mutate } = useModifyRecord({ id: recordId });

  const putData = async () => {
    const getToken = localStorage.getItem('acessToken');

    if (getToken) {
      let imgUrl: string | undefined;

      if (recordStore.thumbNail.data)
        imgUrl = await uploadS3({ imageFile: recordStore.thumbNail.data });

      mutate(
        {
          recordId,
          imageUrl: imgUrl,
          title: recordStore.title,
          date: `${recordStore.startDate}T00:00`,
          place: recordStore.place,
          feeling: recordStore.feel,
          weather: recordStore.weather,
          transportation: recordStore.move,
          content,
          companion: recordStore.withPeople,
        },
        {
          onSuccess: () => {
            recordStore.resetAll();
            navigate(`/recordDetail/${recordId}`, {
              state: {
                feedId: recordStore.feedId,
              },
            });
          },
        },
      );
    }
  };

  return (
    <S.Layout pt="70px">
      <NavBarNew
        title="기록 수정하기"
        isRegister={true}
        disabled={
          content.length <= 0 ||
          content === '<p><br></p>' ||
          content === recordStore.content
        }
        registerClick={putData}
        onClick={() => navigate(-1)}
      />
      <Editor content={content} contentSetter={setContent} />
    </S.Layout>
  );
});

export default ModifyWriteRecord;
