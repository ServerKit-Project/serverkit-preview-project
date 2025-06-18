import styled from "styled-components";
import { TableRow } from "@/components/primitive/Table/Table";
import { Button } from "@/components/primitive/Button/Button";
import { Text } from "@/components/primitive/Text/Text";

interface SortButtonProps {
  $direction?: "asc" | "desc";
}

export const SortButton = styled(Button)<SortButtonProps>`
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

export const PageInfo = styled(Text)`
  font-size: 0.875rem;
`;

export const PageButton = styled(Button)<{ $disabled?: boolean }>`
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

export const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.background.primary : "inherit"};
`;
