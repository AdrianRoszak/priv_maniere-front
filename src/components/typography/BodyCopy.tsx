import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

export const BodyCopy = ({
  children,
  as: Tag = 'p',
  color,
  fontWeight = 400,
  className,
}: TypographyProps) => {
  const classes = [
    `text-base`,
    getFontWeight(fontWeight),
    getColor(color),
  ].join(' ');

  return <Tag className={[classes, className]}>{children}</Tag>;
};
