import React from 'react';
import type { DropdownMenuItemProps } from './types';
import { StyledItem } from './styles';

export const DropdownMenuItem = ({ children, disabled, onSelect }: DropdownMenuItemProps) => (
  <StyledItem
    role="menuitem"
    tabIndex={0}
    data-disabled={disabled}
    onClick={!disabled ? onSelect : undefined}
  >
    {children}
  </StyledItem>
);
