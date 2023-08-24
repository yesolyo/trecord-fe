import { TextInput } from '@components/common/input/TextInput';
import { useState } from 'react';
import * as S from './style';
import { DateInput } from '@components/common/input/DateInput';
import { NewWeater } from '@components/NewRecord/NewFirstRecord/NewWeather';
import { NewPlace } from '@components/NewRecord/NewFirstRecord/NewPlace';
import { NewFeel } from '@components/NewRecord/NewFirstRecord/NewFeel';
import { NewMove } from '@components/NewRecord/NewFirstRecord/NewMove';
import { SquareBtn } from '@components/common/SquareBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import ImgInput from '@components/common/ImgInput';

export const NewRecord = observer(() => {
  const { recordStore } = useStore();

  const [thumbNail, setThumbNail] = useState<{
    data: File | null;
    url: string | null;
  }>(recordStore.thumbNail);
  const [title, setTitle] = useState(recordStore.title);
  const [startDate, setStartDate] = useState(recordStore.startDate);
  const [weather, setWeather] = useState(recordStore.weather);
  const [place, setPlace] = useState(recordStore.place);
  const [feel, setFeel] = useState(recordStore.feel);
  const [move, setMove] = useState(recordStore.move);
  const [withPeople, setWithPeople] = useState(recordStore.withPeople);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const isDisabled = !(
    title.length > 0 &&
    startDate.length > 0 &&
    weather.length > 0 &&
    place.length > 0 &&
    feel.length > 0 &&
    move.length > 0 &&
    withPeople.length > 0
  );

  const handleClickNext = () => {
    recordStore.setId(id);
    recordStore.setThumbNail(thumbNail);
    recordStore.setTitle(title);
    recordStore.setStartDate(startDate);
    recordStore.setWeather(weather);
    recordStore.setPlace(place);
    recordStore.setFeel(feel);
    recordStore.setMove(move);
    recordStore.setWithPeople(withPeople);

    navigate('./newWrite');
  };

  return (
    <S.Layout>
      <NavBarNew
        title="기록 남기기"
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
        <SquareBtn
          title="다음"
          width="342px"
          height="56px"
          disabled={isDisabled}
          onClick={handleClickNext}
        />
      </div>
    </S.Layout>
  );
});
