import styled from "styled-components";
import React from "react";

export interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
}

export const AccordionContainer = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const AccordionItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  margin-bottom: -1px;
`;

export const AccordionHeader = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${(props) =>
    props.isOpen
      ? props.theme.colors.background.secondary
      : props.theme.colors.pureWhite};
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? props.theme.spacing.medium : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;
