import React from 'react';
import type { DropdownMenuTriggerProps } from './types';
import { useDropdownMenu } from './DropdownMenu';

export const DropdownMenuTrigger = ({ children }: DropdownMenuTriggerProps) => {
  const { open, setOpen } = useDropdownMenu();
  return <div onClick={() => setOpen(!open)}>{children}</div>;
};
