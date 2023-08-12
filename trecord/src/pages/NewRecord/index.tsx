import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { TextInput } from '@components/common/TextInput';
import { useState } from 'react';
import * as S from './style';
import { DateInput } from '@components/common/DateInput';
import { NewWeater } from '@components/NewRecord/NewFirstRecord/NewWeather';
import { NewPlace } from '@components/NewRecord/NewFirstRecord/NewPlace';
import { NewFeel } from '@components/NewRecord/NewFirstRecord/NewFeel';
import { NewMove } from '@components/NewRecord/NewFirstRecord/NewMove';
import { SquareBtn } from '@components/common/SquareBtn';
import { useLocation, useNavigate } from 'react-router-dom';
export const NewRecord = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [weather, setWeather] = useState('');
  const [place, setPlace] = useState('');
  const [feel, setFeel] = useState('');
  const [move, setMove] = useState('');
  const [withPeople, setWithPeople] = useState('');
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

  return (
    <S.Layout>
      <NavBarBackBtn
        title="기록 남기기"
        isDark={true}
        isRegister={false}
        onClick={() => navigate(-1)}
      />
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
          onClick={() => {
            navigate('./newWrite', {
              state: {
                feedId: id,
                title: title,
                startDate: startDate,
                weather: weather,
                place: place,
                feel: feel,
                move: move,
                withPeople: withPeople,
              },
            });
          }}
        />
      </div>
    </S.Layout>
  );
};
