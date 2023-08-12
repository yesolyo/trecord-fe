import { feedList } from '@/types';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
interface FeedHomeProps {
  pageData: feedList[];
}
export const FeedHome = ({ pageData }: FeedHomeProps) => {
  const navigate = useNavigate();
  console.log(pageData);
  return (
    <S.Layout>
      {pageData.map((feed) => (
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
