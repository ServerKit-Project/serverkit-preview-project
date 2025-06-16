import React from 'react';
import { CardContainer } from './styles';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return <CardContainer className={className} {...props}>{children}</CardContainer>;
};
