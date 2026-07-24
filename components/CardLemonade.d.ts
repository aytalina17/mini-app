import * as React from 'react';
export interface CardLemonadeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Персик Вербена". */
  text1?: string;
}
export declare const CardLemonade: React.FC<CardLemonadeProps>;
export default CardLemonade;
