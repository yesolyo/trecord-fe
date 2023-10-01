import { useGetFeedDetail, useModifyFeed } from '@/apis';

import { uploadS3 } from '@/utils/image';
import { Satisfaction } from '@components/NewFeed/Satisfaction';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';

import ImgInput from '@components/common/ImgInput';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { SquareButton } from '@components/common/button/SquareButton';
import { DateInput } from '@components/common/input/DateInput';
import { TextInput } from '@components/common/input/TextInput';
import { TextareaInput } from '@components/common/input/TextareaInput';
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 764px;
  padding-top: 70px;
  gap: 15px;
`;

const DateBox = styled.div`
  display: flex;
  gap: 25px;
`;

const ModifyFeed = (): ReactElement => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { data } = useGetFeedDetail({ id });
  const { mutate } = useModifyFeed({ id });

  const [imgFile, setImgFile] = useState<{
    data: File | null;
    url: string | null;
  }>({ data: null, url: null });
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState<{
    placeName: string;
    lat: string;
    lng: string;
  }>({
    placeName: '',
    lat: '',
    lng: '',
  });
  const [startAt, setStartAt] = useState('');
  const [endAt, setEndAt] = useState('');
  const [withPeople, setWithPeople] = useState('');
  const [tripIntroduce, setTripIntroduce] = useState('');
  const [satisfaction, setSatisfaction] = useState('');

  const disabled = useMemo(
    () =>
      title.length === 0 ||
      startAt.length === 0 ||
      endAt.length === 0 ||
      (imgFile.url === data?.imageUrl &&
        title === data?.name &&
        place.placeName === data?.place &&
        startAt === data?.startAt &&
        endAt === data?.endAt &&
        /** @TODO */
        // withPeople === data?.contributors &&
        tripIntroduce === data?.description &&
        satisfaction === data?.satisfaction),
    [
      title,
      place,
      startAt,
      endAt,
      withPeople,
      tripIntroduce,
      satisfaction,
      data,
    ],
  );

  const handleClickGoback = useCallback(() => {
    navigate(`/feedDetail/${id}`);
  }, [navigate]);

  const handleClickNext = async () => {
    let url = '';
    if (imgFile.url === data?.imageUrl) {
      url = data?.imageUrl;
    } else if (imgFile.data) {
      try {
        url = (await uploadS3({ imageFile: imgFile.data })) ?? '';
      } catch (e) {
        console.error(e);
      }
    }

    mutate(
      {
        id,
        name: title,
        satisfaction,
        place: place.placeName,
        latitude: place.lat,
        longitude: place.lng,
        startAt: `${startAt}T00:00`,
        endAt: `${endAt}T00:00`,
        companion: withPeople,
        description: tripIntroduce,
        imageUrl: url,
      },
      {
        onSuccess: () => {
          navigate(`/feedDetail/${id}`);
        },
      },
    );
  };

  useEffect(() => {
    if (data) {
      setImgFile({ data: null, url: data.imageUrl });
      setTitle(data.name);
      setPlace({
        placeName: data.place,
        lat: data.latitude,
        lng: data.longitude,
      });
      setStartAt(data.startAt);
      setEndAt(data.endAt);
      /** @TODO */
      //   setWithPeople(data.companion);
      setTripIntroduce(data.description);
      setSatisfaction(data.satisfaction);
    }
  }, [data]);

  return (
    <Layout>
      <NavBarNew
        title="피드 수정하기"
        isRegister={false}
        onClick={handleClickGoback}
      />
      <ImgInput imgFile={imgFile} imgFileSetter={setImgFile} />
      <TextInput
        inputValue={title}
        inputSetValue={setTitle}
        labelTitle="제목"
        inputTitle="제목을 입력해주세요"
      />
      <AutoCompletePlace
        place={place.placeName}
        setPlace={setPlace}
        labelTitle="여행지"
        inputTitle="여행지를 입력"
      />
      <DateBox>
        <DateInput
          inputValue={startAt}
          inputSetValue={setStartAt}
          labelTitle="여행 시작 날짜"
          inputWidth="150px"
          inputHeight="46px"
        />
        <DateInput
          inputValue={endAt}
          inputSetValue={setEndAt}
          labelTitle="여행 끝나는 날짜"
          inputWidth="150px"
          inputHeight="46px"
        />
      </DateBox>
      <TextInput
        inputValue={withPeople}
        inputSetValue={setWithPeople}
        labelTitle="같이 간 사람"
        inputTitle="누구와 같이 갔나요?"
      />
      <TextareaInput
        inputValue={tripIntroduce}
        inputSetValue={setTripIntroduce}
        labelTitle="여행 설명"
        inputTitle="여행에 대해 설명해주세요 (최대 100자)"
      />
      <Satisfaction inputValue={satisfaction} inputSetValue={setSatisfaction} />
      <SquareButton
        title="완료"
        width="342px"
        height="56px"
        isDark={true}
        disabled={disabled}
        onClick={handleClickNext}
      />
    </Layout>
  );
};

export default ModifyFeed;
