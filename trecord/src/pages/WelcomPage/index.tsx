import { Icon } from '@components/common/Icon';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { SquareBtn } from '@components/common/SquareBtn';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const constant = {
    character: {
      width: 74,
      height: 98,
    },
    logo: {
      width: 142,
      height: 22,
    },
    explain: [
      { id: 1, text: '트레코드는 소중한 여행 기억을 더 오래' },
      { id: 2, text: '간직할 수 있도록 도와줘요.' },
      { id: 3, text: '함께 간 친구와도 여행을 공유해보세요!' },
    ],
    sqaureBtn: {
      title: '기록하기',
      isDark: true,
      onClick: () => navigate('/login'),
    },
  };
  return (
    <S.Layout>
      <S.CharcterBox>
        <Icon iconType="welcomeCharacter" {...constant.character} />
      </S.CharcterBox>
      <S.LogoBox>
        <Icon iconType="trecordLogo" {...constant.logo} />
      </S.LogoBox>
      <S.ExplainBox>
        {constant.explain.map((text) => (
          <Fragment key={text.id}>
            <span>{text.text}</span>
          </Fragment>
        ))}
      </S.ExplainBox>
      <SquareBtn
        title="기록하기"
        isDark={true}
        onClick={() => navigate('/login')}
      />
    </S.Layout>
  );
};
