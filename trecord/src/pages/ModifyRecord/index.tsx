import { TextInput } from '@components/common/input/TextInput';
import { ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import styled from 'styled-components';
import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { useGetRecord } from '@/apis';
import ImgInput from '@components/common/ImgInput';
import { DateInput } from '@components/common/input/DateInput';
import { NewWeater } from '@components/NewRecord/NewFirstRecord/NewWeather';
import { NewFeel } from '@components/NewRecord/NewFirstRecord/NewFeel';
import { NewMove } from '@components/NewRecord/NewFirstRecord/NewMove';
import { SquareButton } from '@components/common/button/SquareButton';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';

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
    height: calc(844px - 120px);
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

const ModifyRecord = observer((): ReactElement => {
  const { id: recordId = '' } = useParams();
  const location = useLocation();
  const { minDate, maxDate } = location.state;
  const { data } = useGetRecord({ id: recordId });

  const { recordStore } = useStore();

  const [thumbNail, setThumbNail] = useState<{
    data: File | null;
    url: string | null;
  }>({ data: null, url: data?.imageUrl || null });
  const [title, setTitle] = useState(data?.title ?? '');
  const [startDate, setStartDate] = useState(data?.date ?? '');
  const [weather, setWeather] = useState(data?.weather ?? '');
  const [place, setPlace] = useState<{
    placeName: string;
    lat: string;
    lng: string;
  }>({
    placeName: data?.place ?? '',
    lat: data?.latitude ?? '',
    lng: data?.longitude ?? '',
  });
  const [feel, setFeel] = useState(data?.feeling ?? '');
  const [move, setMove] = useState(data?.transportation ?? '');

  const navigate = useNavigate();

  const isDisabled =
    !(
      title.length > 0 &&
      startDate.length > 0 &&
      weather.length > 0 &&
      place.placeName.length > 0 &&
      feel.length > 0 &&
      move.length > 0
    ) ||
    (thumbNail.url === data?.imageUrl &&
      title === data?.title &&
      startDate === data.date &&
      weather === data.weather &&
      place.placeName === data.place &&
      feel === data.feeling &&
      move === data.transportation);

  const handleClickNext = () => {
    recordStore.setId(recordId);
    recordStore.setThumbNail(thumbNail);
    recordStore.setTitle(title);
    recordStore.setStartDate(startDate);
    recordStore.setWeather(weather);
    recordStore.setPlace(place.placeName);
    recordStore.setLatitude(place.lat);
    recordStore.setLongitude(place.lng);
    recordStore.setFeel(feel);
    recordStore.setMove(move);

    navigate(`./modify-write`);
  };

  useEffect(() => {
    if (data) {
      recordStore.setContent(data.content);
      recordStore.setFeedId(data.feedId.toString());
    }
  }, [data]);

  return (
    <>
      <NavBarNew
        title="기록 수정하기"
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
          startDate={minDate}
          endDate={maxDate}
        />
        <NewWeater isActive={weather} setIsActive={setWeather} />
        <AutoCompletePlace
          place={place.placeName}
          setPlace={setPlace}
          labelTitle="여행지"
          inputTitle="여행지를 입력"
        />
        <div className="new_feel">
          <NewFeel isActive={feel} setIsActive={setFeel} />
          <NewMove isActive={move} setIsActive={setMove} />
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

export default ModifyRecord;
