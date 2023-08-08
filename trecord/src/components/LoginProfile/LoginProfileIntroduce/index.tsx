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
      <label htmlFor="profileIntroduce">소개글</label>
      <textarea
        rows={5}
        cols={33}
        value={introduceValue}
        onChange={(e) => introduceSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
