import React, { type ReactNode } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";

export interface TableProps {
  data: Array<Record<string, unknown>>;
  columns: Array<{
    key: string;
    title: string;
    width?: string;
    render?: (value: unknown, record: Record<string, unknown>) => ReactNode;
  }>;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}

const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) =>
    theme?.borderRadius || defaultTheme.borderRadius};
  border: 1px solid
    ${({ theme }) =>
      theme?.colors.border.default || defaultTheme.colors.border.default};
`;

const StyledTable = styled.table<{
  $striped?: boolean;
  $bordered?: boolean;
  $hoverable?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) =>
    theme?.fontSize.medium || defaultTheme.fontSize.medium};
`;

const TableHead = styled.thead`
  background-color: ${({ theme }) =>
    theme?.colors.background.secondary ||
    defaultTheme.colors.background.secondary};
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr<{
  $striped?: boolean;
  $hoverable?: boolean;
  $index?: number;
}>`
  ${({ $striped, $index, theme }) =>
    $striped && $index && $index % 2 === 0
      ? `background-color: ${
          theme?.colors.background.secondary ||
          defaultTheme.colors.background.secondary
        }20;`
      : ""}

  ${({ $hoverable, theme }) =>
    $hoverable
      ? `
        &:hover {
          background-color: ${
            theme?.colors.background.hover.secondary ||
            defaultTheme.colors.background.hover.secondary
          };
        }
      `
      : ""}
`;

const TableHeader = styled.th<{ $width?: string; $bordered?: boolean }>`
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};
  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $bordered, theme }) =>
    $bordered
      ? `border-right: 1px solid ${
          theme?.colors.border.default || defaultTheme.colors.border.default
        };`
      : ""}
  
  &:last-child {
    border-right: none;
  }
`;

const TableCell = styled.td<{ $bordered?: boolean }>`
  padding: 12px 16px;
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};
  border-bottom: 1px solid
    ${({ theme }) =>
      theme?.colors.border.default || defaultTheme.colors.border.default};
  ${({ $bordered, theme }) =>
    $bordered
      ? `border-right: 1px solid ${
          theme?.colors.border.default || defaultTheme.colors.border.default
        };`
      : ""}

  &:last-child {
    border-right: none;
  }
`;

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  striped = false,
  bordered = false,
  hoverable = true,
}) => {
  return (
    <TableContainer>
      <StyledTable
        $striped={striped}
        $bordered={bordered}
        $hoverable={hoverable}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                $width={column.width}
                $bordered={bordered}
              >
                {column.title}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record, index) => (
            <TableRow
              key={index}
              $striped={striped}
              $hoverable={hoverable}
              $index={index}
            >
              {columns.map((column) => (
                <TableCell key={column.key} $bordered={bordered}>
                  {column.render
                    ? column.render(record[column.key], record)
                    : (record[column.key] as ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
