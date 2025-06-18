import styled from "styled-components";
import React, { useState, useMemo, type ChangeEvent } from "react";
import {
  TableRoot,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "../../primitive/Table/Table";
import { Button } from "../../primitive/Button/Button";
import { Text } from "../../primitive/Text/Text";
import { CheckboxBox } from "../../primitive/Checkbox/Checkbox";

interface Column<T> {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortable?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  onSort?: (key: string, direction: "asc" | "desc") => void;
  pagination?: boolean;
  pageSize?: number;
}

interface SortButtonProps {
  $direction?: "asc" | "desc";
}

const SortButton = styled(Button)<SortButtonProps>`
  background: none;
  border: none;
  padding: 0;
  margin-left: 0.5rem;
  min-width: auto;
  min-height: auto;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &::after {
    content: "${(props) =>
      props.$direction === "asc"
        ? "▲"
        : props.$direction === "desc"
        ? "▼"
        : "⇅"}";
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top: none;
`;

const PageInfo = styled(Text)`
  font-size: 0.875rem;
`;

const PageButton = styled(Button)<{ $disabled?: boolean }>`
  padding: 0.375rem 0.75rem;
  margin: 0 0.25rem;
  min-width: auto;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
`;

interface StyledTableRowProps {
  $striped?: boolean;
  $hoverable?: boolean;
  $selected?: boolean;
}

const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.background.primary : "inherit"};
`;

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  sortable = true,
  selectable = false,
  onRowSelect,
  onSort,
  pagination = true,
  pageSize = 10,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set()
  );
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig?.key === key) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }

    setSortConfig({ key, direction });
    onSort?.(key, direction);
  };

  const handleSelectAll = (checked: boolean, paginatedData: T[]) => {
    const newSelectedRows = new Set<string | number>();
    if (checked) {
      paginatedData.forEach((row) => newSelectedRows.add(row.id));
    }
    setSelectedRows(newSelectedRows);
    onRowSelect?.(
      Array.from(paginatedData.filter((row) => newSelectedRows.has(row.id)))
    );
  };

  const handleSelectRow = (id: string | number) => {
    const newSelectedRows = new Set(selectedRows);
    if (selectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
    onRowSelect?.(
      Array.from(data.filter((row) => newSelectedRows.has(row.id)))
    );
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a: any, b: any) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize, pagination]);

  return (
    <div>
      <TableContainer>
        <TableRoot>
          <TableHead>
            <TableRow>
              {selectable && (
                <TableHeader>
                  <CheckboxBox
                    $checked={Array.from(selectedRows).every((row) =>
                      paginatedData.some((pRow) => pRow.id === row)
                    )}
                    onClick={() =>
                      handleSelectAll(
                        Array.from(selectedRows).every((row) =>
                          paginatedData.some((pRow) => pRow.id === row)
                        ),
                        paginatedData
                      )
                    }
                  />
                </TableHeader>
              )}
              {columns.map((column) => (
                <TableHeader key={column.key} $width={column.width}>
                  {column.header}
                  {sortable && column.sortable !== false && (
                    <SortButton
                      onClick={() => handleSort(column.key)}
                      $direction={
                        sortConfig?.key === column.key
                          ? sortConfig.direction
                          : undefined
                      }
                    >
                      {column.header}
                    </SortButton>
                  )}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <StyledTableRow
                key={row.id}
                $striped={true}
                $hoverable={true}
                $selected={selectedRows.has(row.id)}
              >
                {selectable && (
                  <TableCell>
                    <CheckboxBox
                      $checked={selectedRows.has(row.id)}
                      onClick={() => handleSelectRow(row.id)}
                    />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.render
                      ? column.render(row[column.key as keyof T], row)
                      : String(row[column.key as keyof T])}
                  </TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </TableRoot>
      </TableContainer>

      {pagination && totalPages > 1 && (
        <PaginationContainer>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          <div>
            <PageButton
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              First
            </PageButton>
            <PageButton
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </PageButton>
            <PageButton
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </PageButton>
            <PageButton
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              Last
            </PageButton>
          </div>
        </PaginationContainer>
      )}
    </div>
  );
}
