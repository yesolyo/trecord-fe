import { feedList } from '@/types';
import * as S from './style';
interface FeedHomeProps {
  pageData: feedList[];
}
export const FeedHome = ({ pageData }: FeedHomeProps) => {
  return (
    <S.Layout>
      {pageData.map((feed) => (
        <S.ImgBox key={feed.id}>
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
