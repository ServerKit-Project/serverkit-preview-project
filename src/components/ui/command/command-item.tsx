import React from 'react';
import { ItemWrapper } from './styles';

export const CommandItem = ({
  children,
  disabled = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <ItemWrapper
      onClick={disabled ? undefined : onClick}
      data-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={className}
    >
      {children}
    </ItemWrapper>
  );
};
