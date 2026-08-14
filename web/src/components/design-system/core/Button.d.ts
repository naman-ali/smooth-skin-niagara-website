import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
