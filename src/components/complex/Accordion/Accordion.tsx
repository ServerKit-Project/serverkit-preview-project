import styled from "styled-components";
import React, { useState } from "react";

export interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
}

export const AccordionContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const AccordionItem = styled.div`
  border: 1px solid #e2e8f0;
  margin-bottom: -1px;
`;

export const AccordionHeader = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${(props) => (props.isOpen ? "#f7fafc" : "white")};
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f7fafc;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.title}
            <span>{openIndex === index ? "▼" : "▶"}</span>
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};
