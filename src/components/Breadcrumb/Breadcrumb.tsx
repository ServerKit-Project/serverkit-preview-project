import styled from "styled-components";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

const BreadcrumbLink = styled.a`
  color: #4a5568;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #f7fafc;
    color: #2d3748;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e2e8f0;
  }
`;

const Separator = styled.span`
  color: #a0aec0;
  margin: 0 0.25rem;
`;

const CurrentPage = styled.span`
  color: #718096;
  padding: 0.25rem 0.5rem;
`;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
}) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={item.href}>
            {index === items.length - 1 ? (
              <CurrentPage>{item.label}</CurrentPage>
            ) : (
              <>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                <Separator>{separator}</Separator>
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};
