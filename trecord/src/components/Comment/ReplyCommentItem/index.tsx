import { SELECT_REPLY_COMMENT_INFOS } from '@/types';
import { CommentUserModalProps, GetReplyComment } from '@/types/comment';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import SelectButton from '@components/common/button/SelectButton';
import { replaceDate } from '@/utils/replaceDate';

interface Props {
  replyCommentData: GetReplyComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  selectCommentId: number;
  onClickUserProfile: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
}

export const ReplyCommentItem = ({
  replyCommentData,
  onSaveCommentId,
  onSaveCommentType,
  onIsDeleteModalActive,
  onSaveComment,
  onClickUserProfile,
  selectCommentId,
}: Props) => {
  const handleChangeSelect = (v: string) => {
    onSaveCommentId(replyCommentData.commentId);
    switch (v) {
      case 'MODIFY':
        onSaveCommentType('MODIFY');
        onSaveComment(replyCommentData.content);
        return;
      case 'DELETE':
        onIsDeleteModalActive();
        return;
      default:
    }
  };
  return (
    <S.Layout select={selectCommentId === replyCommentData.commentId}>
      <div className="comment-arrow"></div>
      <div className="comment-user">
        {replyCommentData.commenterImageUrl.length >= 1 ? (
          <img
            src={replyCommentData.commenterImageUrl}
            className="comment-user__image"
            onClick={() =>
              onClickUserProfile({
                imgUrl: replyCommentData.commenterImageUrl,
                nickName: replyCommentData.commenterNickname,
                content: replyCommentData.content,
              })
            }
          />
        ) : (
          <Icon
            iconType="profile"
            width={28}
            onClick={() =>
              onClickUserProfile({
                imgUrl: replyCommentData.commenterImageUrl,
                nickName: replyCommentData.commenterNickname,
                content: replyCommentData.content,
              })
            }
          />
        )}

        <div className="comment-content-box">
          <div className="comment-content__title">
            <span>{replyCommentData.commenterNickname}</span>
            {replyCommentData.updatable && (
              <SelectButton
                options={SELECT_REPLY_COMMENT_INFOS}
                onSelect={handleChangeSelect}
              />
            )}
          </div>
          <span className="comment-content">{replyCommentData.content}</span>
          <span className="comment-content__date">
            {replaceDate({ date: replyCommentData.createdDateTime })}
          </span>
        </div>
      </div>
    </S.Layout>
  );
};
