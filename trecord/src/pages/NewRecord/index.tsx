import { TextInput } from '@components/common/input/TextInput';
import { useState } from 'react';
import { DateInput } from '@components/common/input/DateInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import ImgInput from '@components/common/ImgInput';
import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { SquareButton } from '@components/common/button/SquareButton';
import styled from 'styled-components';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';
import { SelectionBox } from '@components/common/SelectionBox';
import {
  SELECT_FEEL_INFOS,
  SELECT_MOVE_INFOS,
  SELECT_WEATHER_INFOS,
} from '@/types';

const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  overflow: auto;
  padding: 0px 20px;
  box-sizing: border-box;

  padding-top: 100px;
  gap: 19px;
  @media (min-width: 431px) {
    height: calc(844px - 10px);
  }
  width: 100%;
  scrollbar-width: none;
  align-items: center;
  padding-bottom: 20px;
  height: calc(100% - 10px);
  ::-webkit-scrollbar {
    display: none;
  }
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

export const NewRecord = observer(() => {
  const { recordStore } = useStore();

  const [thumbNail, setThumbNail] = useState<{
    data: File | null;
    url: string | null;
  }>(recordStore.thumbNail);
  const [title, setTitle] = useState(recordStore.title);
  const [startDate, setStartDate] = useState(recordStore.startDate);
  const [weather, setWeather] = useState(recordStore.weather);
  const [place, setPlace] = useState<{
    placeName: string;
    lat: string;
    lng: string;
  }>({
    placeName: recordStore.place,
    lat: recordStore.latitude,
    lng: recordStore.latitude,
  });
  const [feel, setFeel] = useState(recordStore.feel);
  const [move, setMove] = useState(recordStore.move);
  const navigate = useNavigate();
  const location = useLocation();
  const { id, maxDate, minDate } = location.state;

  const isDisabled = !(
    title.length > 0 &&
    startDate.length > 0 &&
    weather.length > 0 &&
    place.placeName.length > 0 &&
    feel.length > 0 &&
    move.length > 0
  );

  const handleClickNext = () => {
    recordStore.setId(id);
    recordStore.setThumbNail(thumbNail);
    recordStore.setTitle(title);
    recordStore.setStartDate(startDate);
    recordStore.setWeather(weather);
    recordStore.setPlace(place.placeName);
    recordStore.setLatitude(place.lat);
    recordStore.setLongitude(place.lng);
    recordStore.setFeel(feel);
    recordStore.setMove(move);

    navigate('./newWrite');
  };

  return (
    <>
      <NavBarNew
        title="기록 남기기"
        isRegister={false}
        onClick={() => {
          recordStore.resetAll();
          navigate(-1);
        }}
      />
      <StyledFrame>
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
          endDate={maxDate}
          startDate={minDate}
        />

        <SelectionBox
          title="날씨"
          list={SELECT_WEATHER_INFOS}
          confirm={weather}
          onClick={setWeather}
        />
        <AutoCompletePlace
          place={place.placeName}
          setPlace={setPlace}
          labelTitle="여행지"
          inputTitle="여행지를 입력"
        />
        <div className="new_feel">
          <SelectionBox
            title="오늘의 기분"
            isActive={true}
            list={SELECT_FEEL_INFOS}
            confirm={feel}
            onClick={setFeel}
          />
          <SelectionBox
            title="이동 수단"
            list={SELECT_MOVE_INFOS}
            confirm={move}
            onClick={setMove}
          />
        </div>
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
      </StyledFrame>
    </>
  );
});
