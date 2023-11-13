import { SELECT_COMMENT_INFOS, SELECT_MY_COMMENT_INFOS } from '@/types';
import { GetComment } from '@/types/comment';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import SelectButton from '@components/common/button/SelectButton';
import { replaceDate } from '@/utils/replaceDate';

import { ReplyCommentList } from '../ReplyCommentList';

interface Props {
  commentData: GetComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
}

export const CommentItem = ({
  commentData,
  onSaveCommentId,
  onSaveCommentType,
  onSaveComment,
}: Props) => {
  const handleChangeSelect = (v: string) => {
    switch (v) {
      case 'NEW':
        onSaveCommentType('NEW');
        return;
      case 'MODIFY':
        onSaveCommentType('MODIFY');
        onSaveCommentId(commentData.commentId);
        onSaveComment(commentData.content);
        return;
      case 'REPLY':
        onSaveCommentType('REPLY');
        onSaveCommentId(commentData.commentId);
        return;
      case 'DELETE':
        return;
      default:
    }
  };

  return (
    <S.Layout>
      {commentData.commenterImageUrl.length >= 1 ? (
        <img src={commentData.commenterImageUrl} className="user-img" />
      ) : (
        <Icon iconType="profile" width={28} />
      )}
      <div className="content_box">
        <div className="title-box">
          <span>{commentData.commenterNickname}</span>
          {commentData.isUpdatable ? (
            <SelectButton
              options={SELECT_MY_COMMENT_INFOS}
              onSelect={handleChangeSelect}
            />
          ) : (
            <SelectButton
              options={SELECT_COMMENT_INFOS}
              onSelect={handleChangeSelect}
            />
          )}
        </div>
        <span className="content">{commentData.content}</span>
        <span className="content_date">
          {replaceDate({ date: commentData.commentCreatedDate })}
        </span>
        {commentData.replyCount > 0 && (
          <ReplyCommentList
            commentId={commentData.commentId}
            onSaveCommentId={onSaveCommentId}
            onSaveCommentType={onSaveCommentType}
          />
        )}
      </div>
    </S.Layout>
  );
};
