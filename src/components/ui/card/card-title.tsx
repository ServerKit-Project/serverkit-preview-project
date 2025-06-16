import React from 'react';
import { CardTitleText } from './styles';

export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <CardTitleText className={className}>{children}</CardTitleText>
);
