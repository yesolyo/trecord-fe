import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useGetFeeds } from '@/apis';
import { Empty } from '@components/common/Empty';
import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';

import Pagination from '@components/common/Pagination';
import usePagedData from '@/hooks/usePagedData';
import Skeleton from '@components/common/skeleton';

const StyledFallback = styled.div`
  height: calc(100% - 190px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 18px;
  padding-top: 90px;
  padding-bottom: 100px;
`;

export const Fallback = (): ReactElement => {
  return (
    <StyledFallback>
      <Skeleton num={6} />
    </StyledFallback>
  );
};

interface FeedHomeProps {
  totalFeedsSetter: React.Dispatch<React.SetStateAction<number>>;
}

export const FeedHome = ({
  totalFeedsSetter: setTotalFeeds,
}: FeedHomeProps) => {
  const {
    data: pageData,
    isLoading,
    paginationClickEventHandler: handleClickPagination,
  } = usePagedData({
    queryFunctionProps: { page: 0 },
    queryFunction: useGetFeeds,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (pageData) setTotalFeeds(pageData.totalElements);
  }, [pageData]);

  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 생성된 페이지가 없어요.',
      },
      {
        id: 2,
        body: '소중한 여행 추억을 기록해보세요.',
      },
    ],
  };

  if (pageData?.content.length === 0) return <Empty {...constant} />;

  return (
    <S.Layout>
      {pageData?.content.map((feed) => (
        <S.ImgBox
          key={feed.id}
          onClick={() => navigate(`/feedDetail/${feed.id}`)}
        >
          <img
            src={
              feed.imageUrl
                ? feed.imageUrl
                : import.meta.env.VITE_AWS_DEFAULT_IMG
            }
            width={342}
            height={180}
          />
          <S.TextBox>
            <div className="feed_name">{feed.name}</div>
            <div className="feed_sub">
              <div className="feed_place">{feed.place}</div>
              <span>
                |{feed.startAt}~{feed.endAt}{' '}
              </span>
            </div>
          </S.TextBox>
        </S.ImgBox>
      ))}
      {!pageData?.last && (
        <Pagination
          text="피드 더보기"
          loading={isLoading}
          onClick={handleClickPagination}
        />
      )}
    </S.Layout>
  );
};
