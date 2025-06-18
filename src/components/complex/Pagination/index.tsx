import React from "react";
import styled, { css } from "styled-components";

// Root Pagination Component
export const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export interface PaginationProps {
  children: React.ReactNode;
  className?: string;
}

export const StyledContent = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
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
const baseLinkStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.default};
    outline-offset: 2px;
  }
`;

// Pagination Link
export const StyledLink = styled.a<{ $isActive?: boolean }>`
  ${baseLinkStyles}
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.fontWeights.bold : theme.fontWeights.normal};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.background.secondary : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.text.primary : theme.colors.text.secondary};
`;

export interface PaginationLinkProps extends PaginationProps {
  href: string;
  isActive?: boolean;
}

// Pagination Previous
export const StyledPrevious = styled.a`
  ${baseLinkStyles}
  gap: ${({ theme }) => theme.spacing.small};
`;

// Pagination Next
export const StyledNext = styled.a`
  ${baseLinkStyles}
  gap: ${({ theme }) => theme.spacing.small};
`;
