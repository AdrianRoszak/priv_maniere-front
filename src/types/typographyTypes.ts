import {ReactNode, ElementType, CSSProperties} from 'react';

export interface TypographyProps {
  children: ReactNode;
  as?: ElementType;
  color?: string;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  className: CSSProperties;
}
