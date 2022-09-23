import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

const GreatPrimer = ({
  children,
  as: Tag = 'h5',
  color,
  fontWeight = 400,
}: TypographyProps) => {
  return (
    <Tag
      className={[`text-lg`, getFontWeight(fontWeight), getColor(color)].join(
        ' ',
      )}
    >
      {children}
    </Tag>
  );
};

export default GreatPrimer;
