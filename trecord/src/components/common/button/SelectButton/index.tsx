import { Icon } from '@components/common/Icon';
import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from 'react';
import * as S from './style';
interface Props {
  right?: string;
  options: {
    label: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
}

const Dropdown = ({ options, onSelect }: Props) => {
  return (
    <S.DropdownBox>
      {options.map((option) => (
        <div
          className="option"
          key={option.value}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(option.value);
          }}
        >
          {option.label}
        </div>
      ))}
    </S.DropdownBox>
  );
};

const SelectButton = ({ right, options, onSelect }: Props): ReactElement => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickButton = (event: ReactMouseEvent) => {
    event.stopPropagation();
    setDropdownVisible((prev) => !prev);
  };

  const handleSelect = (v: string) => {
    onSelect(v);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <S.Layout right={right} onClick={handleClickButton}>
      <Icon iconType="more" width={24} />
      {isDropdownVisible && (
        <div ref={dropdownRef}>
          <Dropdown options={options} onSelect={handleSelect} />
        </div>
      )}
    </S.Layout>
  );
};

export default SelectButton;
