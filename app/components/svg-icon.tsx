import clsx from 'clsx';

export enum IconSize {
  small,
  big,
  huge,
  default,
}

const sizeClass = (size?: IconSize): string => {
  switch (size) {
    case IconSize.small:
      return 'ri-1x';
    case IconSize.big:
      return 'ri-3x';
    case IconSize.huge:
      return 'ri-6x';
    default:
      return 'ri-2x';
  }
};

type Props = {
  name: `ri-${string}-${'fill' | 'line'}`;
  size?: IconSize;
  className?: string;
};
export const SVGIcon: React.FC<Props> = ({ name, size, className }) => {
  return <i className={clsx(name, sizeClass(size), { [className]: !!className })}></i>;
};
