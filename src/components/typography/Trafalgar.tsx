import {getFontWeight, getColor} from '~/utils/classGenerator.ts';
import type {TypographyProps} from '~/types/typographyTypes.ts';

const Trafalgar = ({
  children,
  as: Tag = 'h2',
  color,
  fontWeight = 400,
}: TypographyProps) => {
  return (
    <Tag
      className={[`text-3xl`, getFontWeight(fontWeight), getColor(color)].join(
        ' ',
      )}
    >
      {children}
    </Tag>
  );
};

export default Trafalgar;
