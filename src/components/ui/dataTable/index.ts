import styled from "styled-components";
import { TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

interface SortButtonProps {
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
  striped?: boolean;
  hoverable?: boolean;
  selected?: boolean;
}

export const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.background.secondary : "inherit"};

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected
        ? theme.colors.background.hover.secondary
        : theme.colors.background.secondary};
  }
`;
