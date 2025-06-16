import React from 'react';
import type { DropdownMenuContentProps } from './types';
import { DropdownMenuContext } from './DropdownMenu';
import { StyledContent } from './styles';

export const DropdownMenuContent = ({ children }: DropdownMenuContentProps) => {
  const { open } = React.useContext(DropdownMenuContext);
  if (!open) return null;
  return <StyledContent>{children}</StyledContent>;
};
