import * as S from './style';
interface LoginProfileNameProps {
  nickNameValue: string;
  nickNameSetValue: React.Dispatch<React.SetStateAction<string>>;
}
export const LoginProfileName = ({
  nickNameValue,
  nickNameSetValue,
}: LoginProfileNameProps) => {
  return (
    <S.Layout>
      <label htmlFor="nickName">닉네임(필수)</label>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요"
        id="nickName"
        value={nickNameValue}
        onChange={(e) => nickNameSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
