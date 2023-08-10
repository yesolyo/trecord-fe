import { EmojiBtn } from '@components/common/EmojiBtn';
import * as S from './style';
import { useState } from 'react';
export const Satisfaction = () => {
  const [isActiveBtn, setIsActiveBtn] = useState('');
  return (
    <S.Layout>
      <span>여행 만족도</span>
      <S.EmojiBox>
        <EmojiBtn
          iconName="emojiSad"
          textTitle="불만족ㅠ"
          activeBtn={isActiveBtn}
          activeSetBtn={setIsActiveBtn}
        />
        <EmojiBtn
          iconName="emojiNormal"
          textTitle="보통이에요"
          activeBtn={isActiveBtn}
          activeSetBtn={setIsActiveBtn}
        />
        <EmojiBtn
          iconName="emojiHappy"
          textTitle="만족해요!"
          activeBtn={isActiveBtn}
          activeSetBtn={setIsActiveBtn}
        />
      </S.EmojiBox>
    </S.Layout>
  );
};
