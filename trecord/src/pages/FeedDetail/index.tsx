import { useParams } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
import { feedDetailProps } from '@/types';
import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { Tag } from '@components/common/Tag';
import { Icon } from '@components/common/Icon';

export const FeedDetail = () => {
  const { id } = useParams();
  const getToken = localStorage.getItem('acessToken');
  const [detailData, setDetailData] = useState<feedDetailProps | null>(null);

  useEffect(() => {
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/feeds/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.data);
          setDetailData(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <S.Layout>
      <NavBarBackBtn isDark={false} />
      <S.ImgBox>
        <img src={detailData?.imageUrl} />
      </S.ImgBox>
      <S.ExplainBox>
        <div className="detail_name">{detailData?.name}</div>
        <Icon iconType="more" width={24} />
        <div className="detail_place">
          {detailData?.place} | {detailData?.startAt} ~ {detailData?.endAt}
        </div>
        <Tag title={detailData?.companion} />
        <div className="detail_description">{detailData?.description}</div>
      </S.ExplainBox>
    </S.Layout>
  );
};
