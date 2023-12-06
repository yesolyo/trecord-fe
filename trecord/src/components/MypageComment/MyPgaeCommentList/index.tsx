import * as S from './style';
import Pagination from '@components/common/Pagination';
import { Page } from '@/types';
import { GetMypageComment } from '@/types/mypage';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { Empty } from '@components/common/Empty';
import { Fragment } from 'react';
import { MyPageCommentItem } from '../MyPageCommentItem';

interface Props {
  onModalActive: (id: number) => void;
  myCommentListData: InfiniteData<Page<GetMypageComment>>;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<Page<GetMypageComment>, unknown>>;
  hasNextPage: boolean | undefined;
  isFetching: boolean;
}

export const MypageCommentList = ({
  onModalActive,
  myCommentListData,
  fetchNextPage,
  hasNextPage,
  isFetching,
}: Props) => {
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 댓글이 없어요.',
      },
    ],
  };

  if (myCommentListData.pages[0].content.length === 0)
    return <Empty {...constant} />;

  return (
    <S.Layout>
      {myCommentListData.pages.map((page, pageIndex) =>
        page.content.map((comment, commentIndex) => (
          <Fragment key={comment.commentId}>
            <MyPageCommentItem
              comment={comment}
              onModalActive={onModalActive}
            />
            {myCommentListData.pages[myCommentListData.pages.length - 1]
              .content[page.content.length - 1] !==
              myCommentListData.pages[pageIndex].content[commentIndex] && (
              <hr className="line" />
            )}
          </Fragment>
        )),
      )}
      {hasNextPage && (
        <Pagination
          text="댓글 더보기"
          onClick={() => fetchNextPage()}
          loading={isFetching}
        />
      )}
    </S.Layout>
  );
};
