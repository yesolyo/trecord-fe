import { TextInput } from '@components/common/input/TextInput';
import { ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import * as S from './style';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import ImgInput from '@components/common/ImgInput';
import { DateInput } from '@components/common/input/DateInput';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';
import { SelectionBox } from '@components/common/SelectionBox';
import {
  SELECT_FEEL_INFOS,
  SELECT_MOVE_INFOS,
  SELECT_WEATHER_INFOS,
} from '@/types';
import { SquareBtn } from '@components/common/SquareBtn';
import { useRecordQuery } from '@/apis';

const ModifyRecord = observer((): ReactElement => {
  const { id: recordId = '' } = useParams();
  const location = useLocation();
  const { minDate, maxDate } = location.state;
  const { data } = useRecordQuery({ id: recordId });

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
      <S.Layout>
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
        <SquareBtn
          size="l"
          title="다음"
          isDark={true}
          onClick={handleClickNext}
        />
      </S.Layout>
    </>
  );
});

export default ModifyRecord;
