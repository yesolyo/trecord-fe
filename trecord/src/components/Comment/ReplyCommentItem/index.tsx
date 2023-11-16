import { SELECT_REPLY_COMMENT_INFOS } from '@/types';
import { GetReplyComment } from '@/types/comment';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import SelectButton from '@components/common/button/SelectButton';
import { replaceDate } from '@/utils/replaceDate';

interface Props {
  replyData: GetReplyComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  selectCommentId: number;
}

export const ReplyCommentItem = ({
  replyData,
  onSaveCommentId,
  onSaveCommentType,
  onIsDeleteModalActive,
  onSaveComment,
  selectCommentId,
}: Props) => {
  const handleChangeSelect = (v: string) => {
    onSaveCommentId(replyData.commentId);
    switch (v) {
      case 'MODIFY':
        onSaveCommentType('MODIFY');
        onSaveComment(replyData.content);
        return;
      case 'DELETE':
        onIsDeleteModalActive();
        return;
      default:
    }
  };
  return (
    <S.Layout select={selectCommentId === replyData.commentId}>
      {replyData.commenterImageUrl.length >= 1 ? (
        <img src={replyData.commenterImageUrl} className="user-img" />
      ) : (
        <Icon iconType="profile" width={28} />
      )}
      <div className="content_box">
        <div className="title-box">
          <span>{replyData.commenterNickname}</span>
          {replyData.updatable && (
            <SelectButton
              options={SELECT_REPLY_COMMENT_INFOS}
              onSelect={handleChangeSelect}
            />
          )}
        </div>
        <span className="content">{replyData.content}</span>
        <span className="content_date">
          {replaceDate({ date: replyData.createdDateTime })}
        </span>
      </div>
    </S.Layout>
  );
};
