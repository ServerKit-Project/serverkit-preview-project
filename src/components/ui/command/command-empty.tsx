import React from 'react';
import { EmptyState } from './styles';

export const CommandEmpty = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <EmptyState className={className}>{children}</EmptyState>;
};
