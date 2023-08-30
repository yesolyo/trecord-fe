import { ReactElement } from 'react';

interface Props {
  fill?: string;
}

const CloseIcon = ({ fill = 'none' }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        d="M9.16992 14.83L14.8299 9.17001"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8299 14.83L9.16992 9.17001"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
