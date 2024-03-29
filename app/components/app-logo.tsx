import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { IconSize, SVGIcon } from './svg-icon';

/**
 * Pro tip: don't do small = "small". I learned that this results in
    string comparison, which is slow, compared to integer comparison
  Enum properties are integers in Ts by default
  In this case, small = 0, large = 1
  Integers are passed by value, whereas strings are passed by pointers,
    and memory access is expensive
  Ref: https://romgrk.com/posts/optimizing-javascript
 */
export enum LogoSize {
  small,
  huge,
}

const logoSizeClasses = (size?: LogoSize): { iconSize: IconSize; textSize: string } => {
  switch (size) {
    case LogoSize.small:
      return { iconSize: IconSize.small, textSize: 'text-sm' };
    case LogoSize.huge:
      return { iconSize: IconSize.huge, textSize: 'text-3xl' };
    default:
      return { iconSize: IconSize.default, textSize: 'text-2xl' };
  }
};

type Props = {
  size?: LogoSize;
};
export const AppLogo: React.FC<Props> = ({ size }) => {
  const { textSize, iconSize } = logoSizeClasses(size);
  return (
    <Link
      to={'/'}
      className={clsx('text-accent flex select-none items-center font-bold uppercase', textSize, {
        'gap-2': size != LogoSize.huge,
        'gap-4': size === LogoSize.huge,
      })}
    >
      <SVGIcon name="ri-donut-chart-fill" size={iconSize} className="text-accent" />
      <p className="text-fore text-nowrap font-extralight">GH Stats</p>
    </Link>
  );
};
