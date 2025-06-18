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

export const StyledContent = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Pagination Item
export const StyledItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

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

// Pagination Previous
export const StyledPrevious = styled.a`
  ${baseLinkStyles}
  gap: 0.5rem;
`;

// Pagination Next
export const StyledNext = styled.a`
  ${baseLinkStyles}
  gap: 0.5rem;
`;
