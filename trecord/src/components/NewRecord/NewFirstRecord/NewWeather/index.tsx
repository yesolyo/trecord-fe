import { EmojiBtn } from '@components/common/EmojiBtn';
import * as S from './style';
interface NewWeaterProps {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
}
export const NewWeater = ({ isActive, setIsActive }: NewWeaterProps) => {
  return (
    <S.Layout>
      <span>날씨</span>
      <S.EmojiBox>
        <EmojiBtn
          iconName="sun"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="cloudSunny"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="cloud"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="cloudDrizzle"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="flash"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="wind"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="snow"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
      </S.EmojiBox>
    </S.Layout>
  );
};
