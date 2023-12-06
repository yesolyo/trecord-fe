import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Skeleton from '@components/common/skeleton';
import { Empty } from '@components/common/Empty';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { Page } from '@/types';
import { Feed } from '@/types/feeds';
import Pagination from '@components/common/Pagination';
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
  feedData: InfiniteData<Page<Feed>> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<Page<Feed>, unknown>>;
  hasNextPage: boolean | undefined;
  isFetching: boolean;
}

export const FeedHome = ({
  feedData,
  fetchNextPage,
  hasNextPage,
  isFetching,
}: FeedHomeProps) => {
  const navigate = useNavigate();

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

  if (feedData?.pages[0].content.length === 0) return <Empty {...constant} />;

  return (
    <S.Layout>
      {feedData?.pages.map((page) =>
        page.content.map((feed) => (
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
        )),
      )}
      {hasNextPage && (
        <Pagination
          text="피드 더보기"
          loading={isFetching}
          onClick={() => fetchNextPage()}
        />
      )}
    </S.Layout>
  );
};
