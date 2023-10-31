import * as S from './style';
interface LoginProfileIntroduce {
  introduce: string;
  onSaveIntroduce: (s: string) => void;
}
export const LoginProfileIntroduce = ({
  introduce,
  onSaveIntroduce,
}: LoginProfileIntroduce) => {
  return (
    <S.Layout>
      <label htmlFor="profileIntroduce">한 줄 소개</label>
      <textarea
        rows={5}
        cols={33}
        placeholder="자신을 소개하는 말을 입력해주세요(최대 50자)"
        value={introduce}
        onChange={(e) => onSaveIntroduce(e.target.value)}
      />
    </S.Layout>
  );
};
