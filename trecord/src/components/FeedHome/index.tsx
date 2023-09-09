import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useGetFeeds } from '@/apis';
import { useEffect } from 'react';
import { Empty } from '@components/common/Empty';

interface FeedHomeProps {
  totalFeedsSetter: React.Dispatch<React.SetStateAction<number>>;
}

export const FeedHome = ({
  totalFeedsSetter: setTotalFeeds,
}: FeedHomeProps) => {
  const { data: pageData } = useGetFeeds();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageData) setTotalFeeds(pageData.length);
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

  if (pageData?.length === 0) return <Empty {...constant} />;

  return (
    <S.Layout>
      {pageData?.map((feed) => (
        <S.ImgBox
          key={feed.id}
          onClick={() => navigate(`/feedDetail/${feed.id}`)}
        >
          <img src={feed.imageUrl} width={342} height={180} />
          <div className="img_oppacity"></div>
          <S.TextBox>
            <div className="feed_name">{feed.name}</div>
            <div className="feed_sub">
              {feed.place}|{feed.startAt}~{feed.endAt}
            </div>
          </S.TextBox>
        </S.ImgBox>
      ))}
    </S.Layout>
  );
};
