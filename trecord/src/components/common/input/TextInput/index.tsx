import * as S from './style';
interface TextInputProps {
  inputValue: string;
  inputSetValue: React.Dispatch<React.SetStateAction<string>>;
  labelTitle: string;
  inputTitle: string;
}

export const TextInput = ({
  inputValue,
  inputSetValue,
  labelTitle,
  inputTitle,
}: TextInputProps) => {
  return (
    <S.Layout>
      <label htmlFor="input_text">{labelTitle}</label>
      <input
        type="text"
        placeholder={inputTitle}
        id="input_text"
        value={inputValue}
        onChange={(e) => inputSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
