import { useGetFeedDetail, useModifyFeed } from '@/apis';
import { User } from '@/types/user';

import { uploadS3 } from '@/utils/image';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';
import ChipContainer from '@components/common/ChipContainer';

import ImgInput from '@components/common/ImgInput';
import Modal from '@components/common/Modal';
import InviteModifyFeedModalBody from '@components/common/Modal/ModalBody/InviteModifyFeedModalBody';
import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { SquareButton } from '@components/common/button/SquareButton';
import { DateInput } from '@components/common/input/DateInput';
import { TextInput } from '@components/common/input/TextInput';
import { TextareaInput } from '@components/common/input/TextareaInput';
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SelectionBox } from '@components/common/SelectionBox';
import { SELECT_SATISFACTION_INFOS } from '@/types';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
  .title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .content {
    height: 40px;
    width: 100%;
    padding: 2px 12px;
    border: 1px solid rgb(233, 233, 233);
    border-radius: 8px;
    color: rgb(153, 153, 153);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: 70px;
  gap: 15px;
  height: calc(100% - 80px);
  overflow: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
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
  const [contributors, setContributers] = useState<User[]>([]);
  const contributorIds = useMemo(
    () => contributors.map((c) => c.userId),
    [contributors],
  );
  // const contributerNames = useMemo(
  //   () => contributors.map((c) => c.nickname ?? ''),
  //   [contributors],
  // );
  const [tripIntroduce, setTripIntroduce] = useState('');
  const [satisfaction, setSatisfaction] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const handleClickContributer = useCallback(() => {
    if (data) setOpenModal(true);
  }, []);

  const isSameContributors = useMemo(() => {
    const res = contributors.map(
      (c, i) => c.userId === data?.contributors[i]?.userId,
    );
    return !res.includes(false);
  }, [contributors, data]);

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
        isSameContributors &&
        tripIntroduce === data?.description &&
        satisfaction === data?.satisfaction),
    [
      title,
      place,
      startAt,
      endAt,
      tripIntroduce,
      satisfaction,
      data,
      isSameContributors,
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
        contributors: contributorIds,
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
      setContributers(data.contributors);
      setTripIntroduce(data.description);
      setSatisfaction(data.satisfaction);
    }
  }, [data]);

  return (
    <>
      <NavBarNew
        title="피드 수정하기"
        isRegister={false}
        onClick={handleClickGoback}
      />
      <Layout>
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
        <StyledDiv>
          <div className="title">같이 간 사람</div>
          <div className="content" onClick={handleClickContributer}>
            누구와 같이 갔나요?
          </div>
          <div>
            <ChipContainer users={contributors} />
          </div>
        </StyledDiv>
        <TextareaInput
          inputValue={tripIntroduce}
          inputSetValue={setTripIntroduce}
          labelTitle="여행 설명"
          inputTitle="여행에 대해 설명해주세요 (최대 100자)"
        />
        <SelectionBox
          title="여행 만족도"
          list={SELECT_SATISFACTION_INFOS}
          confirm={satisfaction}
          onClick={setSatisfaction}
        />
        <SquareButton
          title="완료"
          width="342px"
          height="56px"
          isDark={true}
          disabled={disabled}
          onClick={handleClickNext}
        />
      </Layout>
      <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
        <InviteModifyFeedModalBody
          writerId={data?.writerId ?? -1}
          feedId={+id}
          contributors={contributors}
          contributorsSetter={setContributers}
        />
      </Modal>
    </>
  );
};

export default ModifyFeed;
