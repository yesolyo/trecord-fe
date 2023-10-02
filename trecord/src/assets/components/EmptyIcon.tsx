import { ReactElement } from 'react';
import { Props } from './interface';

const EmptyIcon = ({ fill = 'none' }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="74"
      viewBox="0 0 112 74"
      fill={fill}
    >
      <ellipse cx="34" cy="68" rx="34" ry="6" fill="#E9E9E9" />
      <path
        d="M104.223 59.1759L107.046 39.6856C107.326 37.7478 105.952 36.0815 104.007 35.9647L103.91 35.9507C100.477 35.7503 95.0757 36.7321 91.9395 38.1244L91.6393 38.2623C91.1289 38.4851 90.3538 38.3729 89.9276 38.0144L89.559 37.7138C86.9443 35.5051 82.0571 33.0498 78.7059 32.2842C76.8077 31.8445 75.0309 33.071 74.7526 34.9925L71.9278 54.4991C71.7033 56.0492 72.7524 57.6849 74.2745 58.1032L74.7334 58.2356C78.1697 59.2113 83.3219 61.771 86.1768 63.9155L86.2367 63.9571C86.6376 64.2625 87.332 64.363 87.7869 64.1816C91.1351 62.9189 96.8203 61.9122 100.408 61.9537L100.951 61.9663C102.529 61.997 103.999 60.7261 104.223 59.1759Z"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M90.7061 38.6712L87.1984 62.8929"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M83.1411 42.5217L79.5078 41.9956"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M83.651 47.5415L78.8066 46.8399"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 63.5H25L26.0714 58.5L12 63.5Z" fill="#1E1E1E" />
      <path
        d="M28 49.5L26.0714 58.5M26.0714 58.5L25 63.5H12L26.0714 58.5Z"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M56.5 63.5H43.5L42.4286 58.5L56.5 63.5Z" fill="#1E1E1E" />
      <path
        d="M40.5 49.5L42.4286 58.5M42.4286 58.5L43.5 63.5H56.5L42.4286 58.5Z"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="34.5"
        cy="26.5"
        r="25.5"
        fill="white"
        stroke="#1E1E1E"
        strokeWidth="2"
      />
      <path
        d="M22 15.5L28 21.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 15.5L22 21.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 15.5L47 21.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 15.5L41 21.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="28" r="2" fill="#1E1E1E" />
      <path
        d="M10 28L2 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59 28L67 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmptyIcon;
