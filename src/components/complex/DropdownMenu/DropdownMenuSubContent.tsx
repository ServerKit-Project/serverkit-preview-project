import React from 'react';
import type { DropdownMenuSubContentProps } from './types';
import { StyledSubContent } from './styles';

export const DropdownMenuSubContent = ({ children }: DropdownMenuSubContentProps) => {
  return <StyledSubContent>{children}</StyledSubContent>;
};
