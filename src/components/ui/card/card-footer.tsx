import React from 'react';
import { CardFooterWrapper } from './styles';

export const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <CardFooterWrapper className={className}>{children}</CardFooterWrapper>
);
