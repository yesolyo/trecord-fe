import { Icon } from '@components/common/Icon';
import * as S from './style';
interface NewPlaceProps {
  inputValue: string;
  inputSetValue: React.Dispatch<React.SetStateAction<string>>;
  labelTitle: string;
  inputTitle: string;
}

export const NewPlace = ({
  inputValue,
  inputSetValue,
  labelTitle,
  inputTitle,
}: NewPlaceProps) => {
  return (
    <S.Layout>
      <label htmlFor="input_text">{labelTitle}</label>
      <S.InputBox>
        <input
          type="text"
          placeholder={inputTitle}
          id="input_text"
          value={inputValue}
          onChange={(e) => inputSetValue(e.target.value)}
        />
        <Icon iconType="addSquare" width={24} />
      </S.InputBox>
    </S.Layout>
  );
};
