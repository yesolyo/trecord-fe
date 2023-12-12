import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { Empty } from '@components/common/Empty';
import { useNavigate } from 'react-router-dom';
import Pagination from '@components/common/Pagination';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { Page } from '@/types';
import { GetMyPageLike } from '@/types/mypage';
interface MyPageLikeListProps {
  likeListData: InfiniteData<Page<GetMyPageLike>> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<Page<GetMyPageLike>, unknown>>;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
}
export const MyPageLikeList = ({
  likeListData,
  fetchNextPage,
  hasNextPage,
  isLoading,
}: MyPageLikeListProps) => {
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
        body: '아직 좋아요가 없어요.',
      },
    ],
  };
  if (likeListData?.pages[0].content.length === 0)
    return <Empty {...constant} />;
  return (
    <S.Layout>
      {likeListData?.pages.map(
        (page, pageIndex) =>
          page?.content.map((like, feedIndex) => (
            <Fragment key={like.recordId}>
              <div
                className="container"
                onClick={() => navigate(`/recordDetail/${like.recordId}`)}
              >
                <Icon iconType="heart" width={24} />
                <div className="content">
                  <span className="title ellipsis">{like.title}</span>
                  <span className="sub ellipsis">{like.authorNickname}</span>
                </div>
                {like.imageUrl && <img src={like.imageUrl} className="img" />}
              </div>
              {likeListData.pages[likeListData.pages.length - 1].content[
                page.content.length - 1
              ] !== likeListData.pages[pageIndex].content[feedIndex] && (
                <hr className="line" />
              )}
            </Fragment>
          )),
      )}
      {hasNextPage && (
        <Pagination
          text="좋아요 더보기"
          onClick={() => fetchNextPage()}
          loading={isLoading}
        />
      )}
    </S.Layout>
  );
};
