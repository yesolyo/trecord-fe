import { Icon } from '@components/common/Icon';
import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  min-width: 97px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--gray-100, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);

  .option:not(:last-child) {
    border-bottom: 1px solid #e9e9e9;
  }

  .option {
    color: var(--gray-900, #1e1e1e);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    padding: 9px 24px;
    text-align: center;
  }
`;

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
    <StyledDropdown>
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
    </StyledDropdown>
  );
};

const StyledDiv = styled.div<{ right?: string }>`
  display: flex;
  position: relative;
  > div {
    position: absolute;
    top: 25px;
    right: ${({ right = '10%' }) => right};
    z-index: 100;
  }
`;

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
    <StyledDiv right={right} onClick={handleClickButton}>
      <Icon iconType="more" width={24} />
      {isDropdownVisible && (
        <div ref={dropdownRef}>
          <Dropdown options={options} onSelect={handleSelect} />
        </div>
      )}
    </StyledDiv>
  );
};

export default SelectButton;
