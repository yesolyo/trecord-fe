import { Icon } from '@components/common/Icon';
import * as S from './style';
export const EmptyHome = () => {
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        text: '아직 생성된 페이지가 없어요.',
      },
      {
        id: 2,
        text: '소중한 여행 추억을 기록해보세요.',
      },
    ],
  };
  return (
    <S.Layout>
      <Icon iconType="noneCharacter" {...constant.icon} />
      <S.TextBox>{constant.title}</S.TextBox>
      <S.ExplainBox>
        {constant.subTitle.map((title) => (
          <div key={title.id}>{title.text}</div>
        ))}
      </S.ExplainBox>
    </S.Layout>
  );
};
