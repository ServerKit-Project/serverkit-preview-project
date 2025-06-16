import React, { useRef, useEffect, useState } from "react";
import { useAccordionContext } from "./accordion";
import { ContentWrapper, ContentInner } from "./styles";

export interface AccordionContentProps {
  itemValue?: string;
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  itemValue,
}) => {
  const { isItemOpen } = useAccordionContext();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const isOpen = !!(itemValue && isItemOpen(itemValue));

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <ContentWrapper style={{ height }} isOpen={isOpen}>
      <ContentInner ref={ref}>{children}</ContentInner>
    </ContentWrapper>
  );
};
