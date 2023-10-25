import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
interface Props {
  children: ReactNode;
}
export const Portal = ({ children }: Props) => {
  const frame = document.querySelector('#frame');
  return frame && createPortal(children, frame);
};
