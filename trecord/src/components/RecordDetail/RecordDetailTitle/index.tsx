import { recordDetailList } from '@/types';
import * as S from './style';
import { CircleTag } from '@components/FeedDetail/RecordSummary/CircleTag/inedx';
import { TagBox } from '@components/NewRecord/NewFirstRecord/NewFeel/style';
import { Tag } from '@components/common/Tag';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';
import { useNavigate } from 'react-router-dom';

interface RecordDetailDataProps {
  recordData: recordDetailList;
}
interface FeelSetProps {
  feel: string;
}
export const RecordDetailTitle = ({ recordData }: RecordDetailDataProps) => {
  const feelSet = ({ feel }: FeelSetProps) => {
    switch (feel) {
      case 'happy':
        return '행복해요';
      case 'sad':
        return '슬퍼요';
      case 'angry':
        return '화나요';
      case 'flutter':
        return '설레요';
    }
  };
  return (
    <S.Layout>
      <div className="title">{recordData.title}</div>
      <S.DateBox>
        <span className="first">여행 날짜</span>
        <span className="second">
          {recordData.date} |{' '}
          <Icon iconType={recordData.weather} fill={colorStyles.gray900}></Icon>
        </span>
      </S.DateBox>
      <S.PlaceBox>
        <span className="first">장소</span>
        <span className="second">{recordData.place}</span>
      </S.PlaceBox>
      <S.FeelBox>
        <span className="first">오늘의 기분</span>
        <span className="second">{feelSet({ feel: recordData.feeling })}</span>
      </S.FeelBox>
      <S.MoveBox>
        <span className="first">이동수단</span>
        <Icon iconType={recordData.transportation} />
      </S.MoveBox>
      <S.PeopleBox>
        <span className="first">같이 간 사람</span>
        <Tag title={recordData.companion} />
      </S.PeopleBox>
    </S.Layout>
  );
};
