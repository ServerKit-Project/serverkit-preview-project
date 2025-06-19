import React from "react";
import styled, { css } from "styled-components";

// Root Pagination Component
export const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <StyledItem key={i}>
          <StyledLink
            href="#"
            $isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
          >
            {i}
          </StyledLink>
        </StyledItem>
      );
    }

    return pages;
  };

  return (
    <StyledPagination className={className}>
      <StyledContent>
        <StyledItem>
          <StyledPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            $disabled={currentPage === 1}
          >
            이전
          </StyledPrevious>
        </StyledItem>
        {renderPageNumbers()}
        <StyledItem>
          <StyledNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            $disabled={currentPage === totalPages}
          >
            다음
          </StyledNext>
        </StyledItem>
      </StyledContent>
    </StyledPagination>
  );
};

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
const baseLinkStyles = css<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.secondary : theme.colors.text.primary};
  background: transparent;
  transition: all 0.15s ease;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ theme, $disabled }) =>
      $disabled ? "transparent" : theme.colors.background.secondary};
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.secondary : theme.colors.text.primary};
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

export const StyledPrevious = styled.a<{ $disabled?: boolean }>`
  ${baseLinkStyles}
  gap: ${({ theme }) => theme.spacing.small};
`;

export const StyledNext = styled.a<{ $disabled?: boolean }>`
  ${baseLinkStyles}
  gap: ${({ theme }) => theme.spacing.small};
`;
