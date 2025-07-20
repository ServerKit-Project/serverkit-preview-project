import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  TableContainer as TableContainerBase,
  TableRoot as TableRootBase,
  TableHead as TableHeadBase,
  TableBody as TableBodyBase,
  TableRow as TableRowBase,
  TableCell as TableCellBase,
} from "@/components/ui/table";

export interface SortButtonProps {
  direction?: "asc" | "desc";
}

export const SortButton = styled(Button)<SortButtonProps>`
  background: none;
  border: none;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing.small};
  min-width: auto;
  min-height: auto;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &::after {
    content: "${(props) =>
      props.direction === "asc"
        ? "▲"
        : props.direction === "desc"
        ? "▼"
        : "⇅"}";
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top: none;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const PageInfo = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PageButton = styled(Button)<{ disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  margin: 0 ${({ theme }) => theme.spacing.small};
  min-width: auto;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-family: ${({ theme }) => theme.fontFamily.sans};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    cursor: not-allowed;
  }
`;

interface StyledTableRowProps {
  isStriped?: boolean;
  isHoverable?: boolean;
  isSelected?: boolean;
}

export const StyledTableRow = styled(TableRowBase)<StyledTableRowProps>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.background.secondary : "inherit"};

  &:hover {
    background-color: ${({ theme, isSelected }) =>
      isSelected
        ? theme.colors.background.hover.secondary
        : theme.colors.background.secondary};
  }
`;

export const TableContainer = styled(TableContainerBase)``;
export const TableRoot = styled(TableRootBase)``;
export const TableHead = styled(TableHeadBase)``;
export const TableBody = styled(TableBodyBase)``;
export const TableRow = styled(TableRowBase)``;
export const TableCell = styled(TableCellBase)``;
