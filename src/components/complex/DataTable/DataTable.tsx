import styled from "styled-components";
import React, { useState, useMemo } from "react";

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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e2e8f0;
  background-color: white;
`;

const Th = styled.th<{ $width?: string }>`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: #4a5568;
  background-color: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
  width: ${(props) => props.$width || "auto"};
  position: relative;
`;

const SortButton = styled.button<{ $direction?: "asc" | "desc" }>`
  background: none;
  border: none;
  padding: 0;
  margin-left: 0.5rem;
  cursor: pointer;
  color: #a0aec0;

  &:hover {
    color: #4a5568;
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

const Td = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #2d3748;
  border-bottom: 1px solid #e2e8f0;
`;

const Tr = styled.tr<{ $isSelected?: boolean }>`
  background-color: ${(props) => (props.$isSelected ? "#ebf8ff" : "white")};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "#bee3f8" : "#f7fafc")};
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-top: none;
`;

const PageInfo = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
`;

const PageButton = styled.button<{ $disabled?: boolean }>`
  padding: 0.375rem 0.75rem;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: ${(props) => (props.$disabled ? "#a0aec0" : "#4a5568")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  font-size: 0.875rem;
  border-radius: 0.25rem;
  margin: 0 0.25rem;

  &:hover:not(:disabled) {
    background-color: #f7fafc;
  }

  &:disabled {
    opacity: 0.6;
  }
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

  const handleSelectAll = (checked: boolean) => {
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
      <Table>
        <thead>
          <tr>
            {selectable && (
              <Th>
                <Checkbox
                  checked={paginatedData.every((row) =>
                    selectedRows.has(row.id)
                  )}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </Th>
            )}
            {columns.map((column) => (
              <Th key={column.key} $width={column.width}>
                {column.header}
                {sortable && column.sortable !== false && (
                  <SortButton
                    onClick={() => handleSort(column.key)}
                    $direction={
                      sortConfig?.key === column.key
                        ? sortConfig.direction
                        : undefined
                    }
                  />
                )}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <Tr
              key={row.id}
              $isSelected={selectedRows.has(row.id)}
              onClick={() => selectable && handleSelectRow(row.id)}
              style={{ cursor: selectable ? "pointer" : "default" }}
            >
              {selectable && (
                <Td>
                  <Checkbox
                    checked={selectedRows.has(row.id)}
                    onChange={(e) => e.stopPropagation()}
                  />
                </Td>
              )}
              {columns.map((column) => (
                <Td key={column.key}>
                  {column.render
                    ? column.render((row as any)[column.key], row)
                    : (row as any)[column.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
      {pagination && totalPages > 1 && (
        <PaginationContainer>
          <PageInfo>
            {(currentPage - 1) * pageSize + 1} -{" "}
            {Math.min(currentPage * pageSize, sortedData.length)} of{" "}
            {sortedData.length}
          </PageInfo>
          <div>
            <PageButton
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              ≪
            </PageButton>
            <PageButton
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </PageButton>
            <PageButton
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </PageButton>
            <PageButton
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              ≫
            </PageButton>
          </div>
        </PaginationContainer>
      )}
    </div>
  );
}
