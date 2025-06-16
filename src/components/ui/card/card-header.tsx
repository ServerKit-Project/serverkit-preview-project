import React from 'react';
import { CardHeaderWrapper } from './styles';

export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <CardHeaderWrapper className={className}>{children}</CardHeaderWrapper>
);
