import { useState, ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/pages/NewWriteRecord/style';
import Editor from '@components/common/Editor';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import { uploadS3 } from '@/utils/image';
import { useModifyRecordMutation } from '@/apis';
import Modal from '@components/common/Modal';
import { Spinner } from '@components/common/Spinner';

const ModifyWriteRecord = observer((): ReactElement => {
  const { recordStore } = useStore();

  const [content, setContent] = useState(recordStore.content);
  const { id: recordId = '' } = useParams();
  const navigate = useNavigate();

  const { mutate, isLoading } = useModifyRecordMutation({ id: recordId });

  const handleModifyRecord = async () => {
    let imgUrl: string | null | undefined = recordStore.thumbNail.url;

    if (recordStore.thumbNail.data)
      imgUrl = await uploadS3({ imageFile: recordStore.thumbNail.data });

    mutate(
      {
        recordId,
        imageUrl: imgUrl,
        title: recordStore.title,
        date: `${recordStore.startDate}T00:00`,
        place: recordStore.place,
        longitude: recordStore.longitude,
        latitude: recordStore.latitude,
        feeling: recordStore.feel,
        weather: recordStore.weather,
        transportation: recordStore.move,
        content,
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
  };

  return (
    <S.Layout pt="70px">
      <NavBarNew
        title="기록 수정하기"
        isRegister={true}
        disabled={
          content.length <= 0 ||
          content === '<p><br></p>' ||
          content === recordStore.content ||
          isLoading
        }
        registerClick={handleModifyRecord}
        onClick={() => navigate(-1)}
      />
      <Editor content={content} contentSetter={setContent} />
      <Modal openModal={isLoading}>
        <Spinner />
      </Modal>
    </S.Layout>
  );
});

export default ModifyWriteRecord;
