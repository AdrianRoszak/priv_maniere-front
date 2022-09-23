import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

const Pica = ({
  children,
  as: Tag = 'p',
  color,
  fontWeight = 400,
}: TypographyProps) => {
  return (
    <Tag
      className={[`text-sm`, getFontWeight(fontWeight), getColor(color)].join(
        ' ',
      )}
    >
      {children}
    </Tag>
  );
};

export default Pica;
