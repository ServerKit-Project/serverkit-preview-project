import React from 'react';
import { BreadcrumbLinkStyle } from './styles';

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ children, className, ...props }) => {
  return <BreadcrumbLinkStyle className={className} {...props}>{children}</BreadcrumbLinkStyle>;
};
