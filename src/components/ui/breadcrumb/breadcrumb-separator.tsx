import React from 'react';
import { Separator } from './styles';

export const BreadcrumbSeparator: React.FC<{ className?: string }> = ({ className }) => {
  return <Separator className={className}>/</Separator>;
};
