import * as S from './style';
interface DateInputProps {
  inputValue: string;
  inputSetValue: React.Dispatch<React.SetStateAction<string>>;
  labelTitle: string;
}
export const DateInput = ({
  inputValue,
  inputSetValue,
  labelTitle,
}: DateInputProps) => {
  return (
    <S.Layout>
      <label htmlFor="input_date">{labelTitle}</label>
      <input
        type="datetime-local"
        name="startAt"
        id="input_date"
        value={inputValue}
        onChange={(e) => inputSetValue(e.target.value)}
      />
    </S.Layout>
  );
};
