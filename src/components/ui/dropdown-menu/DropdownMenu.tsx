import React, { createContext, useContext, useState } from 'react';
import type { DropdownMenuProps } from './types';

export const DropdownMenuContext = createContext<{
  open: boolean;
  setOpen: (value: boolean) => void;
}>({ open: false, setOpen: () => {} });

export const DropdownMenu = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  children,
}: DropdownMenuProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = (value: boolean) => {
    if (!isControlled) setUncontrolledOpen(value);
    onOpenChange?.(value);
  };

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>{children}</div>
    </DropdownMenuContext.Provider>
  );
};

export const useDropdownMenu = () => useContext(DropdownMenuContext);
