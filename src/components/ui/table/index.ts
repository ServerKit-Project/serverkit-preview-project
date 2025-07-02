import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const TableRoot = styled.table<{
  striped?: string;
  bordered?: string;
  hoverable?: string;
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
  striped?: boolean;
  hoverable?: boolean;
  index?: number;
}>`
  ${({ striped, index, theme }) =>
    striped && index && index % 2 === 0
      ? `background-color: ${theme.colors.background.secondary}${striped};`
      : ""}

  ${({ hoverable, theme }) =>
    hoverable &&
    `
      &:hover {
        background-color: ${theme.colors.background.hover.secondary}${hoverable};
      }
    `}
`;

export const TableHeader = styled.th<{ width?: string; bordered?: string }>`
  padding: 12px 16px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  ${({ width }) => width && `width: ${width};`}
  ${({ bordered, theme }) =>
    bordered &&
    `border-right: 1px solid ${theme.colors.border.default}${bordered};`}
  
  &:last-child {
    border-right: none;
  }
`;

export const TableCell = styled.td<{ bordered?: string }>`
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  ${({ bordered, theme }) =>
    bordered &&
    `border-right: 1px solid ${theme.colors.border.default}${bordered};`}

  &:last-child {
    border-right: none;
  }
`;
