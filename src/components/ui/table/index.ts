import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const TableRoot = styled.table<{
  isStriped?: boolean;
  isBordered?: boolean;
  isHoverable?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr<{
  isStriped?: boolean;
  isHoverable?: boolean;
  index?: number;
}>`
  ${({ isStriped, index, theme }) =>
    isStriped && index && index % 2 === 0
      ? `background-color: ${theme.colors.background.secondary};`
      : ""}

  ${({ isHoverable, theme }) =>
    isHoverable &&
    `
      &:hover {
        background-color: ${theme.colors.background.hover.secondary};
      }
    `}
`;

export const TableHeader = styled.th<{ width?: string; isBordered?: boolean }>`
  padding: 12px 16px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  ${({ width }) => width && `width: ${width};`}
  ${({ isBordered, theme }) =>
    isBordered && `border-right: 1px solid ${theme.colors.border.default};`}
  
  &:last-child {
    border-right: none;
  }
`;

export const TableCell = styled.td<{ isBordered?: boolean }>`
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  ${({ isBordered, theme }) =>
    isBordered && `border-right: 1px solid ${theme.colors.border.default};`}

  &:last-child {
    border-right: none;
  }
`;
