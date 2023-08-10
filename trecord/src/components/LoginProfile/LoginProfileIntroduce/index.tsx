import * as S from './style';
interface LoginProfileIntroduce {
  introduceValue: string;
  introduceSetValue: React.Dispatch<React.SetStateAction<string>>;
}
export const LoginProfileIntroduce = ({
  introduceValue,
  introduceSetValue,
}: LoginProfileIntroduce) => {
  return (
    <S.Layout>
      <label htmlFor="profileIntroduce">한 줄 소개</label>
      <textarea
        rows={5}
        cols={33}
        placeholder="자신을 소개하는 말을 입력해주세요(최대 50자)"
        value={introduceValue}
        onChange={(e) => introduceSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
