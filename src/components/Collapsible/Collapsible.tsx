import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";

interface CollapsibleProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
}

const Container = styled.div`
  width: 100%;
`;

const Trigger = styled.button<{ $disabled: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  color: #2d3748;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background: #f7fafc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3182ce;
  }
`;

const Icon = styled.span<{ $isOpen: boolean }>`
  transform: rotate(${(props) => (props.$isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease-in-out;
`;

const Content = styled.div<{ $height: number }>`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${(props) => props.$height}px;
`;

const ContentInner = styled.div`
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-top: none;
  border-radius: 0 0 0.375rem 0.375rem;
`;

export const Collapsible: React.FC<CollapsibleProps> = ({
  trigger,
  children,
  defaultOpen = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState(defaultOpen ? "auto" : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(isOpen ? height : 0);
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Container>
      <Trigger
        onClick={handleToggle}
        $disabled={disabled}
        aria-expanded={isOpen}
      >
        {trigger}
        <Icon $isOpen={isOpen}>▼</Icon>
      </Trigger>
      <Content $height={contentHeight}>
        <ContentInner ref={contentRef}>{children}</ContentInner>
      </Content>
    </Container>
  );
};
