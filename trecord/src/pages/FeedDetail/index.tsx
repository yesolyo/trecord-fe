import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
import { feedDetailProps } from '@/types';
import { NavBarBackBtn } from '@components/common/navBar/NavBarBackBtn/index.tsx';
import { Tag } from '@components/common/Tag';
import { Icon } from '@components/common/Icon';
import { ViewRecord } from '@components/FeedDetail/ViewRecord';
import { feelCategory } from '@/utils';
import { CircularButton } from '@components/common/button/CircularButton';

export const FeedDetail = () => {
  const { id } = useParams();
  const getToken = localStorage.getItem('acessToken');
  const [detailData, setDetailData] = useState<feedDetailProps | null>(null);
  const navigate = useNavigate();
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
          setDetailData(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <S.Layout>
      <NavBarBackBtn
        onBackBtnClick={() => navigate('/home')}
        isCategory={false}
      />
      <S.ImgBox>
        <img src={detailData?.imageUrl} />
      </S.ImgBox>
      <S.ExplainBox>
        <S.IconBox>
          <div className="detail_name">{detailData?.name}</div>
          <Icon iconType="more" width={24} />
        </S.IconBox>
        <div className="detail_place">
          {detailData?.place} | {detailData?.startAt} ~ {detailData?.endAt}
        </div>
        {detailData?.companion && detailData?.companion.length > 0 && (
          <Tag title={detailData?.companion} />
        )}

        {detailData?.satisfaction && (
          <S.EmojiBox>
            <div>만족도</div>
            <S.FeelBox>
              <Icon iconType={detailData?.satisfaction} width={24} />
              <span>{feelCategory({ feel: detailData?.satisfaction })}</span>
            </S.FeelBox>
          </S.EmojiBox>
        )}
        <div className="detail_description">{detailData?.description}</div>
        {detailData?.records && <ViewRecord listData={detailData?.records} />}
      </S.ExplainBox>
      <S.EditButtonBox>
        <CircularButton
          iconType="edit"
          width={24}
          onClick={() =>
            navigate('/newRecord', {
              state: {
                id: id,
              },
            })
          }
        />
      </S.EditButtonBox>
    </S.Layout>
  );
};
