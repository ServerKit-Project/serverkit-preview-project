import React from "react";
import styled from "styled-components";

// Root Pagination Component
export const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
`;

export interface PaginationProps {
  children: React.ReactNode;
  className?: string;
}

export const Pagination = ({ children, className }: PaginationProps) => {
  return <StyledPagination className={className}>{children}</StyledPagination>;
};

// Pagination Content
export const StyledContent = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PaginationContent = ({ children, className }: PaginationProps) => {
  return <StyledContent className={className}>{children}</StyledContent>;
};

// Pagination Item
export const StyledItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationItem = ({ children, className }: PaginationProps) => {
  return <StyledItem className={className}>{children}</StyledItem>;
};

// Base Link Styles
const baseLinkStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-w-[2.25rem];
  height: 2.25rem;
  padding: 0 0.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-size: 0.875rem;
  color: #374151;
  background: transparent;
  transition: all 0.15s ease;

  &:hover {
    background-color: #F3F4F6;
    color: #111827;
  }

  &:focus-visible {
    outline: 2px solid #E5E7EB;
    outline-offset: 2px;
  }
`;

// Pagination Link
export const StyledLink = styled.a<{ $isActive?: boolean }>`
  ${baseLinkStyles}
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  background-color: ${(props) => (props.$isActive ? "#F3F4F6" : "transparent")};
  color: ${(props) => (props.$isActive ? "#111827" : "#374151")};
`;

export interface PaginationLinkProps extends PaginationProps {
  href: string;
  isActive?: boolean;
}

export const PaginationLink = ({
  children,
  href,
  isActive,
  className,
}: PaginationLinkProps) => {
  return (
    <StyledLink href={href} $isActive={isActive} className={className}>
      {children}
    </StyledLink>
  );
};

// Pagination Previous
export const StyledPrevious = styled.a`
  ${baseLinkStyles}
  gap: 0.5rem;
`;

export const PaginationPrevious = ({
  href,
  className,
}: Omit<PaginationLinkProps, "children">) => {
  return (
    <StyledPrevious href={href} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span>Previous</span>
    </StyledPrevious>
  );
};

// Pagination Next
export const StyledNext = styled.a`
  ${baseLinkStyles}
  gap: 0.5rem;
`;

export const PaginationNext = ({
  href,
  className,
}: Omit<PaginationLinkProps, "children">) => {
  return (
    <StyledNext href={href} className={className}>
      <span>Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </StyledNext>
  );
};

// Pagination Ellipsis
export const StyledEllipsis = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-w-[2.25rem];
  height: 2.25rem;
  color: #6B7280;
`;

export const PaginationEllipsis = ({
  className,
}: Omit<PaginationProps, "children">) => {
  return (
    <StyledEllipsis className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </StyledEllipsis>
  );
};
