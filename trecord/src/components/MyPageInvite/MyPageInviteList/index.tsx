import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment, useState } from 'react';
import { Empty } from '@components/common/Empty';
import Modal from '@components/common/Modal';
import { useNavigate } from 'react-router-dom';
import Pagination from '@components/common/Pagination';
import { Page } from '@/types';
import { GetInviteFeedList } from '@/types/mypage';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
interface Props {
  inviteFeedListData: InfiniteData<Page<GetInviteFeedList>>;
  onDelete: (id: number) => void;
  isDataFetching: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<Page<GetInviteFeedList>, unknown>>;
}

export const MyPageInviteList = ({
  inviteFeedListData,
  onDelete,
  isDataFetching,
  hasNextPage,
  fetchNextPage,
}: Props) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 초대된 피드가 없어요.',
      },
    ],
  };

  if (inviteFeedListData.pages[0].content.length === 0)
    return <Empty {...constant} />;

  return (
    <S.Layout>
      {inviteFeedListData.pages.map((page, pageIndex) =>
        page.content.map((inviteFeed, feedIndex) => (
          <Fragment key={inviteFeed.feedId}>
            <div className="container">
              {inviteFeed.imageUrl && (
                <img src={inviteFeed.imageUrl} className="img" />
              )}
              <div
                className="content"
                onClick={() => navigate(`/feedDetail/${inviteFeed.feedId}`)}
              >
                <span className="title ellipsis">{inviteFeed.feedName}</span>
                <span className="sub ellipsis">{inviteFeed.ownerNickname}</span>
              </div>
              <Icon
                iconType="close"
                width={24}
                onClick={() => setIsActive(true)}
              />
            </div>
            {!page.last &&
              inviteFeedListData.pages[inviteFeedListData.pages.length - 1]
                .content[page.content.length - 1] !==
                inviteFeedListData.pages[pageIndex].content[feedIndex] && (
                <hr className="line" />
              )}
            <Modal
              openModal={isActive}
              title="해당 피드에서 나갈까요?"
              closeText="취소"
              confirmText="나가기"
              onClose={() => setIsActive(false)}
              onConfirm={() => onDelete(inviteFeed.feedId)}
            />
          </Fragment>
        )),
      )}
      {hasNextPage && (
        <Pagination
          text="피드 더보기"
          loading={isDataFetching}
          onClick={() => fetchNextPage()}
        />
      )}
    </S.Layout>
  );
};
