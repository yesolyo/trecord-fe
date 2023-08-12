import * as S from './style';
import { FeelTag } from '../FeelTag';
interface NewFeelProps {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
}
export const NewFeel = ({ isActive, setIsActive }: NewFeelProps) => {
  return (
    <S.Layout>
      <span>오늘의 기분</span>
      <S.TagBox>
        <FeelTag
          feelName="happy"
          width="73px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
          textTitle="행복해요"
        />
        <FeelTag
          feelName="flutter"
          width="61px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
          textTitle="설레요"
        />
        <FeelTag
          feelName="sad"
          width="61px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
          textTitle="슬퍼요"
        />
        <FeelTag
          feelName="angry"
          width="61px"
          height="40px"
          activeBtn={isActive}
          activeSetBtn={setIsActive}
          textTitle="화나요"
        />
      </S.TagBox>
    </S.Layout>
  );
};
