import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useGetFeeds } from '@/apis';
import { useEffect } from 'react';
import { EmptyHome } from '@components/EmptyHome';

const constant = {
  width: 342,
  height: 180,
};

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

  if (pageData?.length === 0) return <EmptyHome />;

  return (
    <S.Layout>
      {pageData?.map((feed) => (
        <S.ImgBox
          key={feed.id}
          onClick={() => navigate(`/feedDetail/${feed.id}`)}
        >
          <img src={feed.imageUrl} {...constant} />
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
