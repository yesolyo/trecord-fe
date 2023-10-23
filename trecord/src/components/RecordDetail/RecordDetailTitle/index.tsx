import * as S from './style';
import { Tag } from '@components/common/Tag';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';
import { feelSet } from '@/utils';
import { useState } from 'react';
import RecordDetailGoogleMap from '../RecordDetailGoogleMap';
import { recordDetailList } from '@/types/record';

interface RecordDetailDataProps {
  recordData: recordDetailList;
}

export const RecordDetailTitle = ({ recordData }: RecordDetailDataProps) => {
  const [isActiveMap, setIsActiveMap] = useState(false);
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
        <span className="first space">장소</span>
        <span className="second ellipsis">{recordData.place}</span>
        <button className="map_view" onClick={() => setIsActiveMap(true)}>
          지도로 보기
        </button>
      </S.PlaceBox>
      {isActiveMap && (
        <RecordDetailGoogleMap
          latitude={recordData.latitude}
          longitude={recordData.longitude}
        />
      )}
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
        {recordData.companion && <Tag title={recordData.companion} />}
      </S.PeopleBox>
    </S.Layout>
  );
};
