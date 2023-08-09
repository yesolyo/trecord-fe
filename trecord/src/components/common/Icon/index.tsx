import { colorStyles } from '@styles/color';
import icons from '@assets/index';
import { ReactElement } from 'react';

interface IconProps {
  iconType: keyof typeof icons;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: () => void | undefined;
}
export const Icon = ({
  iconType = 'alarm',
  width = 16,
  height = width,
  onClick,
}: IconProps): ReactElement => {
  const IconSvg = icons[iconType];

  return <IconSvg width={width} height={height} onClick={onClick} />;
};
