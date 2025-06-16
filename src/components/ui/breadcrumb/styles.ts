import styled from 'styled-components';

export const BreadcrumbContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: #6b7280;
  gap: 0.25rem;
  align-items: center;
`;

export const BreadcrumbItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BreadcrumbLinkStyle = styled.a`
  color: #374151;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  margin: 0 0.5rem;
  color: #9ca3af;
  user-select: none;
`;
