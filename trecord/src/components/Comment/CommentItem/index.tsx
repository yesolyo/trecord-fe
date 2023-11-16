import { SELECT_COMMENT_INFOS, SELECT_MY_COMMENT_INFOS } from '@/types';
import { GetComment } from '@/types/comment';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import SelectButton from '@components/common/button/SelectButton';
import { replaceDate } from '@/utils/replaceDate';

import { ReplyCommentList } from '../ReplyCommentList';
import { ReplyCommentButton } from '../ReplyCommentButton';

interface Props {
  commentData: GetComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  onSaveIsSuccess: (b: boolean) => void;
  selectCommentId: number;
}

export const CommentItem = ({ ...props }: Props) => {
  const handleChangeSelect = (v: string) => {
    props.onSaveCommentType(v);
    switch (v) {
      case 'NEW':
        return;
      case 'MODIFY':
        props.onSaveCommentId(props.commentData.commentId);
        props.onSaveComment(props.commentData.content);
        return;
      case 'REPLY':
        props.onSaveCommentId(props.commentData.commentId);
        return;
      case 'DELETE':
        props.onIsDeleteModalActive();
        props.onSaveCommentId(props.commentData.commentId);
        return;
      default:
    }
  };

  return (
    <S.Layout select={props.selectCommentId === props.commentData.commentId}>
      {props.commentData.commenterImageUrl.length >= 1 ? (
        <img src={props.commentData.commenterImageUrl} className="user-img" />
      ) : (
        <Icon iconType="profile" width={28} />
      )}
      <div className="content_box">
        <div className="title-box">
          <span>{props.commentData.commenterNickname}</span>
          {props.commentData.isUpdatable ? (
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
        <span className="content">{props.commentData.content}</span>
        <span className="content_date">
          {replaceDate({ date: props.commentData.commentCreatedDate })}
        </span>
        {props.commentData.replyCount > 0 && <ReplyCommentButton {...props} />}
      </div>
    </S.Layout>
  );
};
