import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

const Brevier = ({
  children,
  as: Tag = 'p',
  color,
  fontWeight = 400,
}: TypographyProps) => {
  return (
    <Tag
      className={[`text-2xs`, getFontWeight(fontWeight), getColor(color)].join(
        ' ',
      )}
    >
      {children}
    </Tag>
  );
};

export default Brevier;
