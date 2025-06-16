import React from "react";
import { useAccordionContext } from "./accordion";
import { AccordionTrigger } from "./accordion-trigger";

interface AccordionChildProps {
  itemValue?: string;
}

export interface AccordionItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  className,
}) => {
  const { isItemOpen } = useAccordionContext();

  return (
    <div data-state={isItemOpen(value) ? "open" : "closed"} className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement<AccordionChildProps>(child)
          ? React.cloneElement(child, { itemValue: value })
          : child
      )}
    </div>
  );
};
