import * as React from 'react';
export interface ChipProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "default";
  /** Text content; defaults to "Все". */
  text1?: string;
}
export declare const Chip: React.FC<ChipProps>;
export default Chip;
