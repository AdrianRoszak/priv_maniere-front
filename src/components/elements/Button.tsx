import clsx from 'clsx';
import {Link} from '@shopify/hydrogen';

import {missingClass} from '~/lib/utils';

export function Button({
  as = 'button',
  className = '',
  variant = 'primary',
  width = 'auto',
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  variant?: 'primary' | 'secondary' | 'inline';
  width?: 'auto' | 'full';
  [key: string]: any;
}) {
  const Component = props?.to ? Link : as;

  const baseButtonClasses =
    'inline-block text-fine rounded font-medium text-center py-1 px-6 uppercase';

  const hoverButtonClasses = 'hover:bg-supplementary';

  const variants = {
    primary: `${baseButtonClasses} bg-primary text-contrast border border-contrast ${hoverButtonClasses}`,
    secondary: `${baseButtonClasses} border border-primary bg-contrast text-primary`,
    inline: 'border-b border-primary leading-none pb-1',
  };

  const widths = {
    auto: 'w-auto',
    full: 'w-full',
  };

  const styles = clsx(
    missingClass(className, 'bg-') && variants[variant],
    missingClass(className, 'w-') && widths[width],
    className,
  );

  return <Component className={styles} {...props} />;
}
