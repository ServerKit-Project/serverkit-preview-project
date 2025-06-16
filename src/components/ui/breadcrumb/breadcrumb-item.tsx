import React from 'react';
import { BreadcrumbItemWrapper } from './styles';

export const BreadcrumbItem: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <BreadcrumbItemWrapper>{children}</BreadcrumbItemWrapper>;
};
