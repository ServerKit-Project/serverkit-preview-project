import React from 'react';
import { CommandWrapper } from './styles';

export const Command = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  return <CommandWrapper className={className}>{children}</CommandWrapper>;
};
