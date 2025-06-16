import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";

const DataTableWrapper = styled.div`
  width: 100%;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

const SearchInput = styled.input`
  max-width: 20rem;
  padding: 0.5rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #6B7280;
  }
`;

const ColumnVisibilityButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.375rem;
  background: white;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #F9FAFB;
  }

  &:focus {
    outline: none;
    border-color: #6B7280;
  }
`;

const ColumnVisibilityDropdown = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

const ColumnVisibilityItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;

  &:hover {
    background-color: #F9FAFB;
  }

  input {
    margin: 0;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const PaginationInfo = styled.div`
  font-size: 0.875rem;
  color: #6B7280;
`;

const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PaginationButton = styled.button<{ $disabled?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.375rem;
  background: white;
  font-size: 0.875rem;
  color: ${props => props.$disabled ? '#D1D5DB' : '#374151'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background-color: #F9FAFB;
  }

  &:focus {
    outline: none;
    border-color: #6B7280;
  }
`;

// Add style prop to TableCell interface
export interface DataTableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  style?: React.CSSProperties;
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  searchKey?: string;
}

export function DataTable<TData>({
  columns,
  data,
  searchKey,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [isColumnSelectorOpen, setIsColumnSelectorOpen] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <DataTableWrapper>
      <ToolbarWrapper>
        {searchKey && (
          <SearchInput
            placeholder="Search..."
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
          />
        )}
        <div style={{ position: 'relative', marginLeft: 'auto' }}>
          <ColumnVisibilityButton onClick={() => setIsColumnSelectorOpen(!isColumnSelectorOpen)}>
            Columns <ChevronDown size={16} />
          </ColumnVisibilityButton>
          <ColumnVisibilityDropdown $isOpen={isColumnSelectorOpen}>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <ColumnVisibilityItem key={column.id}>
                    <input
                      type="checkbox"
                      checked={column.getIsVisible()}
                      onChange={(event) => column.toggleVisibility(event.target.checked)}
                    />
                    <span style={{ textTransform: 'capitalize' }}>{column.id}</span>
                  </ColumnVisibilityItem>
                );
              })}
          </ColumnVisibilityDropdown>
        </div>
      </ToolbarWrapper>

      <div style={{ border: '1px solid #E5E7EB', borderRadius: '0.5rem' }}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div style={{ height: '6rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    No results.
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <PaginationWrapper>
        <PaginationInfo>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </PaginationInfo>
        <PaginationButtons>
          <PaginationButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            $disabled={!table.getCanPreviousPage()}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            $disabled={!table.getCanNextPage()}
          >
            Next
          </PaginationButton>
        </PaginationButtons>
      </PaginationWrapper>
    </DataTableWrapper>
  );
} 