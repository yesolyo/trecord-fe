import * as S from './style';
interface TextareaInputProps {
  inputValue: string;
  inputSetValue: React.Dispatch<React.SetStateAction<string>>;
  labelTitle: string;
  inputTitle: string;
}

export const TextareaInput = ({
  inputValue,
  inputSetValue,
  labelTitle,
  inputTitle,
}: TextareaInputProps) => {
  return (
    <S.Layout>
      <label htmlFor="input_textare">{labelTitle}</label>
      <textarea
        rows={5}
        cols={33}
        id="input_textare"
        placeholder={inputTitle}
        value={inputValue}
        onChange={(e) => inputSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
