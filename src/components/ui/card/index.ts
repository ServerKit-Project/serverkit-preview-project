import styled from "styled-components";

export const CardRoot = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const CardHeaderRoot = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const CardTitleRoot = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CardDescriptionRoot = styled.p`
  margin: 0.5rem 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const CardContentRoot = styled.div`
  padding: 1.5rem;
`;

export const CardFooterRoot = styled.div<{ hasGap?: boolean }>`
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  gap: ${({ hasGap }) => (hasGap ? "0.5rem" : "0")};
`;
