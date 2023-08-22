import * as S from './style';
interface DateInputProps {
  inputValue: string;
  inputSetValue: React.Dispatch<React.SetStateAction<string>>;
  labelTitle: string;
  inputWidth: string;
  inputHeight: string;
}
export const DateInput = ({
  inputValue,
  inputSetValue,
  labelTitle,
  inputWidth,
  inputHeight,
}: DateInputProps) => {
  return (
    <S.Layout width={inputWidth} height={inputHeight}>
      <label htmlFor="input_date">{labelTitle}</label>
      <input
        type="date"
        name="startAt"
        id="input_date"
        value={inputValue}
        onChange={(e) => inputSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
