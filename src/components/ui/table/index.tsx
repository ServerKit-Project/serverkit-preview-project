import React from 'react';
import styled from 'styled-components';

// Root Table Component
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  caption-side: bottom;
  font-size: 0.875rem;
  line-height: 1.5;
`;

export interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return <StyledTable className={className}>{children}</StyledTable>;
};

// Table Header
const StyledHeader = styled.thead`
  border-bottom: 1px solid #E5E7EB;
  [data-state=selected] & {
    border-color: #E5E7EB;
  }
`;

export const TableHeader = ({ children, className }: TableProps) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};

// Table Body
const StyledBody = styled.tbody`
  & tr:last-child {
    border: none;
  }
`;

export const TableBody = ({ children, className }: TableProps) => {
  return <StyledBody className={className}>{children}</StyledBody>;
};

// Table Footer
const StyledFooter = styled.tfoot`
  border-top: 1px solid #E5E7EB;
  font-weight: 500;
  background-color: #F9FAFB;
`;

export const TableFooter = ({ children, className }: TableProps) => {
  return <StyledFooter className={className}>{children}</StyledFooter>;
};

// Table Row
const StyledRow = styled.tr`
  border-bottom: 1px solid #E5E7EB;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #F9FAFB;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableRow = ({ children, className }: TableProps) => {
  return <StyledRow className={className}>{children}</StyledRow>;
};

// Table Head
const StyledHead = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  color: #6B7280;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25;
  white-space: nowrap;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`;

export interface TableHeadProps extends TableProps {
  className?: string;
}

export const TableHead = ({ children, className }: TableHeadProps) => {
  return <StyledHead className={className}>{children}</StyledHead>;
};

// Table Cell
const StyledCell = styled.td`
  padding: 0.75rem 1rem;
  color: #374151;
  vertical-align: middle;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`;

export interface TableCellProps extends TableProps {
  colSpan?: number;
  className?: string;
}

export const TableCell = ({ children, colSpan, className }: TableCellProps) => {
  return <StyledCell colSpan={colSpan} className={className}>{children}</StyledCell>;
};

// Table Caption
const StyledCaption = styled.caption`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6B7280;
`;

export const TableCaption = ({ children, className }: TableProps) => {
  return <StyledCaption className={className}>{children}</StyledCaption>;
};