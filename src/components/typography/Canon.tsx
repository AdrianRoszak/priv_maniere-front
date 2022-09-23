import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

export const Canon = ({
  children,
  as: Tag = 'h1',
  color,
  fontWeight = 400,
  serif = false,
}: TypographyProps) => {
  return (
    <Tag
      className={[
        `text-4xl`,
        serif && `font-serif`,
        getFontWeight(fontWeight),
        getColor(color),
      ].join(' ')}
    >
      {children}
    </Tag>
  );
};

export default Canon;
