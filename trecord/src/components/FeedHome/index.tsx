import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useGetFeeds } from '@/apis';
import { Empty } from '@components/common/Empty';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '@components/common/skeleton';
import { MoreButton } from '@components/common/MoreButton';

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
  const [pageCount, setPageCount] = useState<number>(10);
  const { data: pageData } = useGetFeeds({ pageCount });
  const navigate = useNavigate();

  useEffect(() => {
    if (pageData) setTotalFeeds(pageData.content.length);
  }, [pageData]);

  const handlePageCount = () => {
    setPageCount((prev) => prev + 10);
  };

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
          <img src={feed.imageUrl} width={342} height={180} />
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
      {!pageData?.last && <MoreButton title="피드" onClick={handlePageCount} />}
    </S.Layout>
  );
};
