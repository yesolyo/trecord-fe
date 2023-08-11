import { EmojiBtn } from '@components/common/EmojiBtn';
import * as S from './style';
interface NewMoveProps {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
}
export const NewMove = ({ isActive, setIsActive }: NewMoveProps) => {
  return (
    <S.Layout>
      <span>이동 수단</span>
      <S.EmojiBox>
        <EmojiBtn
          iconName="car"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="bus"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="ship"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
        <EmojiBtn
          iconName="airplane"
          width="44px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
        />
      </S.EmojiBox>
    </S.Layout>
  );
};
