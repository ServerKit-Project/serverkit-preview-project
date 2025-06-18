import React from 'react';
import type { DropdownMenuSubTriggerProps } from './types';
import { StyledItem } from './styles';

interface ExtendedDropdownMenuSubTriggerProps extends DropdownMenuSubTriggerProps {
  setOpen?: (value: boolean) => void;
}

export const DropdownMenuSubTrigger = ({ children, setOpen }: ExtendedDropdownMenuSubTriggerProps) => (
  <StyledItem onMouseEnter={() => setOpen?.(true)}>
    {children}
    <span style={{ marginLeft: 'auto' }}>▶</span>
  </StyledItem>
);
