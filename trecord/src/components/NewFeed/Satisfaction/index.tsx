import { EmojiBtn } from '@components/common/EmojiBtn';
import * as S from './style';
interface SatisfactionProps {
  inputValue: string;
  inputSetValue: React.Dispatch<React.SetStateAction<string>>;
}
export const Satisfaction = ({
  inputValue,
  inputSetValue,
}: SatisfactionProps) => {
  return (
    <S.Layout>
      <span>여행 만족도</span>
      <S.EmojiBox>
        <EmojiBtn
          iconName="emojiSad"
          textTitle="불만족ㅠ"
          activeBtn={inputValue}
          activeSetBtn={inputSetValue}
        />
        <EmojiBtn
          iconName="emojiNormal"
          textTitle="보통이에요"
          activeBtn={inputValue}
          activeSetBtn={inputSetValue}
        />
        <EmojiBtn
          iconName="emojiHappy"
          textTitle="만족해요!"
          activeBtn={inputValue}
          activeSetBtn={inputSetValue}
        />
      </S.EmojiBox>
    </S.Layout>
  );
};
