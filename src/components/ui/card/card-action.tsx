import React from 'react';
import { CardActionWrapper } from './styles';

export const CardAction = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <CardActionWrapper className={className}>{children}</CardActionWrapper>
);
