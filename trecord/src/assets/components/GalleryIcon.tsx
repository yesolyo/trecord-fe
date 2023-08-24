import { ReactElement } from 'react';

interface Props {
  fill?: string;
}

const GalleryIcon = ({ fill = 'none' }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill={fill}
    >
      <path
        d="M12.375 30.25H20.625C27.5 30.25 30.25 27.5 30.25 20.625V12.375C30.25 5.5 27.5 2.75 20.625 2.75H12.375C5.5 2.75 2.75 5.5 2.75 12.375V20.625C2.75 27.5 5.5 30.25 12.375 30.25Z"
        stroke="#999999"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.375 13.75C13.8938 13.75 15.125 12.5188 15.125 11C15.125 9.48122 13.8938 8.25 12.375 8.25C10.8562 8.25 9.625 9.48122 9.625 11C9.625 12.5188 10.8562 13.75 12.375 13.75Z"
        stroke="#999999"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.6709 26.0563L10.4496 21.505C11.5359 20.7763 13.1034 20.8588 14.0796 21.6975L14.5334 22.0963C15.6059 23.0175 17.3384 23.0175 18.4109 22.0963L24.1309 17.1875C25.2034 16.2663 26.9359 16.2663 28.0084 17.1875L30.2496 19.1125"
        stroke="#999999"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GalleryIcon;
