import styled from "styled-components";

export const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

export const BreadcrumbLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border.default};
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0.25rem;
`;

export const BreadcrumbCurrentPage = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => theme.spacing.small};
`;
