import { TextareaInput } from '@components/common/input/TextareaInput';
import { TextInput } from '@components/common/input/TextInput';
import { useMemo, useState } from 'react';
import * as S from './style';
import { DateInput } from '@components/common/input/DateInput';
import { Satisfaction } from '@components/NewFeed/Satisfaction';
import { NewTitleImg } from '@components/NewFeed/NewTitleImg';
import { NewFeedBtn } from '@components/NewFeed/NewFeedBtn';
import { useNavigate } from 'react-router-dom';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { AutoCompletePlace } from '@components/common/AutoCompletePlace';
import styled from 'styled-components';
import Modal from '@components/common/Modal';
import InviteFeedModalBody from '@components/common/Modal/InviteFeedModalBody';
import { User } from '@/types/user';

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

export const NewFeed = () => {
  const [titleImgFile, setTitleImgFile] = useState<{
    imgFile: string;
    originFile: File | Blob | string;
  }>({
    imgFile: '',
    originFile: '',
  });
  const [titleImgUrl, setTitleImgUrl] = useState<string>('');
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
  const [contributers, setContributers] = useState<User[]>([]);
  const contributerIds = useMemo(
    () => contributers.map((c) => c.userId),
    [contributers],
  );
  const [tripIntroduce, setTripIntroduce] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const navigate = useNavigate();

  const [openShareModal, setOpenShareModal] = useState(false);

  return (
    <>
      <S.Layout>
        <NavBarNew
          title="피드 만들기"
          isRegister={false}
          onClick={() => navigate('/home')}
        />
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
        </S.DateBox>
        <StyledDiv>
          <div className="title">같이 간 사람</div>
          <div className="content">누구와 같이 갔나요?</div>
        </StyledDiv>
        <TextareaInput
          inputValue={tripIntroduce}
          inputSetValue={setTripIntroduce}
          labelTitle="여행 설명"
          inputTitle="여행에 대해 설명해주세요 (최대 100자)"
        />
        <Satisfaction
          inputValue={satisfaction}
          inputSetValue={setSatisfaction}
        />
        <NewFeedBtn
          imageFile={titleImgFile}
          imageUrl={titleImgUrl}
          saveImageUrl={setTitleImgUrl}
          name={title}
          satisfaction={satisfaction}
          place={place.placeName}
          latitude={place.lat}
          longitude={place.lng}
          startAt={startAt}
          endAt={endAt}
          description={tripIntroduce}
          contributors={contributerIds}
          title="완료"
        />
      </S.Layout>
      <Modal
        openModal={openShareModal}
        onClose={() => setOpenShareModal(false)}
      >
        <InviteFeedModalBody
          contributers={contributers}
          contributersSetter={setContributers}
        />
      </Modal>
    </>
  );
};
