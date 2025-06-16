import React from 'react';
import { BreadcrumbContainer } from './styles';

export interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className }) => {
  return <BreadcrumbContainer className={className}>{children}</BreadcrumbContainer>;
};
