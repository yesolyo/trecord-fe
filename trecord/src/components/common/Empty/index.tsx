import { Icon } from '@components/common/Icon';
import * as S from './style';

interface emptyProps {
  icon: {
    width: number;
    height: number;
  };
  title: string;
  subTitle: {
    id: number;
    body: string;
  }[];
}

export const Empty = ({ ...props }: emptyProps) => {
  return (
    <S.Layout>
      <Icon iconType="noneCharacter" {...props.icon} />
      <S.TextBox>{props.title}</S.TextBox>
      <S.ExplainBox>
        {props.subTitle.map((title) => (
          <div key={title.id}>{title.body}</div>
        ))}
      </S.ExplainBox>
    </S.Layout>
  );
};
