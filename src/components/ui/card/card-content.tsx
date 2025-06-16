import React from 'react';
import { CardContentWrapper } from './styles';

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <CardContentWrapper className={className}>{children}</CardContentWrapper>
);
