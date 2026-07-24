import * as React from 'react';
export interface IconsProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "user" | "task-square" | "map" | "home";
  state?: "default" | "active";
}
export declare const Icons: React.FC<IconsProps>;
export default Icons;
