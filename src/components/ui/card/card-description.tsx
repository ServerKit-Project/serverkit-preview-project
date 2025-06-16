import React from 'react';
import { CardDescriptionText } from './styles';

export const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <CardDescriptionText className={className}>{children}</CardDescriptionText>
);
