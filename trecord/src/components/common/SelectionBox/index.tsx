import { SelectionBtn } from '@components/common/SelectionBtn';
import * as S from './style';
import icons from '@/assets/index';
interface SelectionTypeProps {
  value: keyof typeof icons | string;
  label: string;
}
interface SelectionBoxProps {
  title: string;
  list: (keyof typeof icons | SelectionTypeProps)[];
  isActive?: boolean;
  confirm: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
}
export const SelectionBox = ({
  title,
  confirm,
  list,
  isActive = false,
  onClick,
}: SelectionBoxProps) => {
  return (
    <S.Layout>
      <span>{title}</span>
      <div className="list-box">
        {list.map((l) => (
          <SelectionBtn
            isActive={isActive}
            key={typeof l === 'string' ? l : l.value}
            iconName={typeof l === 'string' ? l : l.value}
            textTitle={typeof l === 'string' ? '' : l.label}
            activeBtn={confirm}
            activeSetBtn={onClick}
          />
        ))}
      </div>
    </S.Layout>
  );
};
