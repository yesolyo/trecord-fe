import { TextInput } from '@components/common/input/TextInput';
import { ReactElement, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import styled from 'styled-components';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useGetRecord } from '@/apis';
import ImgInput from '@components/common/ImgInput';
import { DateInput } from '@components/common/input/DateInput';
import { NewWeater } from '@components/NewRecord/NewFirstRecord/NewWeather';
import { NewPlace } from '@components/NewRecord/NewFirstRecord/NewPlace';
import { NewFeel } from '@components/NewRecord/NewFirstRecord/NewFeel';
import { NewMove } from '@components/NewRecord/NewFirstRecord/NewMove';
import { SquareButton } from '@components/common/button/SquareButton';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 464px;
  padding-top: 100px;
  gap: 19px;
  .new_feel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 356px;
    gap: 15px;
  }
  .new_btn {
    padding-top: 30px;
  }
`;

const ModifyRecord = observer((): ReactElement => {
  const { id: recordId = '' } = useParams();

  const { data } = useGetRecord({ id: recordId });
  console.log('modify', data);

  const { recordStore } = useStore();

  const [thumbNail, setThumbNail] = useState<{
    data: File | null;
    url: string | null;
  }>({ data: null, url: data?.imageUrl || null });
  const [title, setTitle] = useState(data?.title ?? '');
  const [startDate, setStartDate] = useState(data?.date ?? '');
  const [weather, setWeather] = useState(data?.weather ?? '');
  const [place, setPlace] = useState(data?.place ?? '');
  const [feel, setFeel] = useState(data?.feeling ?? '');
  const [move, setMove] = useState(data?.transportation ?? '');
  const [withPeople, setWithPeople] = useState(data?.companion ?? '');

  const navigate = useNavigate();

  const isDisabled =
    !(
      title.length > 0 &&
      startDate.length > 0 &&
      weather.length > 0 &&
      place.length > 0 &&
      feel.length > 0 &&
      move.length > 0 &&
      withPeople.length > 0
    ) ||
    (title === data?.title &&
      startDate === data.date &&
      weather === data.weather &&
      place === data.place &&
      feel === data.feeling &&
      move === data.transportation &&
      withPeople === data.companion);

  const handleClickNext = () => {
    recordStore.setId(recordId);
    recordStore.setThumbNail(thumbNail);
    recordStore.setTitle(title);
    recordStore.setStartDate(startDate);
    recordStore.setWeather(weather);
    recordStore.setPlace(place);
    recordStore.setFeel(feel);
    recordStore.setMove(move);
    recordStore.setWithPeople(withPeople);

    navigate(`./modify-write`);
  };

  return (
    <Layout>
      <NavBarNew
        title="기록 수정하기"
        isRegister={false}
        onClick={() => {
          recordStore.resetAll();
          navigate(-1);
        }}
      />
      <ImgInput imgFile={thumbNail} imgFileSetter={setThumbNail} />
      <TextInput
        inputValue={title}
        inputSetValue={setTitle}
        labelTitle="제목"
        inputTitle="제목을 입력해주세요"
      />
      <DateInput
        inputValue={startDate}
        inputSetValue={setStartDate}
        labelTitle="여행 시작 날짜"
        inputWidth="342px"
        inputHeight="46px"
      />
      <NewWeater isActive={weather} setIsActive={setWeather} />
      <NewPlace
        inputValue={place}
        inputSetValue={setPlace}
        labelTitle="장소"
        inputTitle="장소를 입력해주세요"
      />
      <div className="new_feel">
        <NewFeel isActive={feel} setIsActive={setFeel} />
        <NewMove isActive={move} setIsActive={setMove} />
      </div>

      <TextInput
        inputValue={withPeople}
        inputSetValue={setWithPeople}
        inputTitle="누구와 같이 갔나요?"
        labelTitle="같이 간 사람"
      />
      <div className="new_btn">
        <SquareButton
          title="다음"
          width="342px"
          height="56px"
          disabled={isDisabled}
          isDark={true}
          onClick={handleClickNext}
        />
      </div>
    </Layout>
  );
});

export default ModifyRecord;
