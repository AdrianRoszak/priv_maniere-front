import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

const DoublePica = ({
  children,
  as: Tag = 'h4',
  color,
  fontWeight = 400,
}: TypographyProps) => {
  return (
    <Tag
      className={[`text-xl`, getFontWeight(fontWeight), getColor(color)].join(
        ' ',
      )}
    >
      {children}
    </Tag>
  );
};

export default DoublePica;
