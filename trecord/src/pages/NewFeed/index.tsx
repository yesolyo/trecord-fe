import { TextareaInput } from '@components/common/input/TextareaInput';
import { TextInput } from '@components/common/input/TextInput';
import { useCallback, useMemo, useState } from 'react';
import * as S from './style';
import { DateInput } from '@components/common/input/DateInput';
import { NewTitleImg } from '@components/NewFeed/NewTitleImg';
import { useNavigate } from 'react-router-dom';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';
import styled from 'styled-components';
import Modal from '@components/common/Modal';
import InviteFeedModalBody from '@components/common/Modal/ModalBody/InviteFeedModalBody';
import { User } from '@/types/user';
import ChipContainer from '@components/common/ChipContainer';
import { SelectionBox } from '@components/common/SelectionBox';
import { SELECT_SATISFACTION_INFOS } from '@/types';
import { SquareBtn } from '@components/common/SquareBtn';
import useNewFeedMutation from '@/apis/Feed/useNewFeedMutation';
import { uploadS3 } from '@/utils/image';
import { Spinner } from '@components/common/Spinner';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 342px;

  box-sizing: border-box;
  .title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .content {
    height: 40px;
    width: 342px;
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

export const NewFeed = () => {
  const { mutate, isLoading } = useNewFeedMutation();
  const [titleImgFile, setTitleImgFile] = useState<{
    imgFile: string;
    originFile: File | Blob | string;
  }>({
    imgFile: '',
    originFile: '',
  });
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
  const contributerIds = useMemo(
    () => contributors.map((c) => c.userId),
    [contributors],
  );

  const [tripIntroduce, setTripIntroduce] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const handleClickContributer = useCallback(() => {
    setOpenModal(true);
  }, []);

  const isDisabled = !(
    title.length > 0 &&
    startAt.length > 0 &&
    endAt.length > 0
  );

  const handleClickNewFeedButton = async (e: any) => {
    e.preventDefault();
    let url = '';
    if (titleImgFile.originFile) {
      try {
        url = (await uploadS3({ imageFile: titleImgFile.originFile })) ?? '';
      } catch (e) {
        console.error(e);
      }
    }
    mutate(
      {
        name: title,
        satisfaction,
        place: place.placeName,
        imageUrl: url,
        latitude: place.lat,
        longitude: place.lng,
        startAt: `${startAt}T00:00`,
        endAt: `${endAt}T00:00`,
        description: tripIntroduce,
        contributors: contributerIds,
      },
      {
        onSuccess: () => {
          navigate('/home');
        },
      },
    );
  };

  return (
    <>
      <NavBarNew
        title="피드 만들기"
        isRegister={false}
        onClick={() => navigate('/home')}
      />
      <S.Layout>
        <NewTitleImg
          titleImgFile={setTitleImgFile}
          titleImgFileValue={titleImgFile}
        />
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
        <S.DateBox>
          <DateInput
            inputValue={startAt}
            inputSetValue={setStartAt}
            endDate={endAt}
            labelTitle="여행 시작 날짜"
            inputWidth="150px"
            inputHeight="46px"
          />
          <DateInput
            inputValue={endAt}
            inputSetValue={setEndAt}
            startDate={startAt}
            labelTitle="여행 끝나는 날짜"
            inputWidth="150px"
            inputHeight="46px"
          />
        </S.DateBox>
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
        <div className="selection-box">
          <SelectionBox
            title="여행 만족도"
            list={SELECT_SATISFACTION_INFOS}
            confirm={satisfaction}
            onClick={setSatisfaction}
          />
        </div>
        <SquareBtn
          title="완료"
          size="l"
          disabled={isDisabled || isLoading}
          isDark={true}
          onClick={handleClickNewFeedButton}
        />
      </S.Layout>
      <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
        <InviteFeedModalBody
          contributors={contributors}
          contributorsSetter={setContributers}
        />
      </Modal>
      <Modal openModal={isLoading}>
        <Spinner />
      </Modal>
    </>
  );
};
