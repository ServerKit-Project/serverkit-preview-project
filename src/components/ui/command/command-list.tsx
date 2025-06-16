import React from 'react';
import { ListWrapper } from './styles';

export const CommandList = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <ListWrapper className={className}>{children}</ListWrapper>;
};
