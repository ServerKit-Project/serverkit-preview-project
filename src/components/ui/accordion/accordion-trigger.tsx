import React from "react";
import { ChevronDown } from "lucide-react";
import { useAccordionContext } from "./accordion";
import { Trigger } from "./styles";

export interface AccordionTriggerProps {
    itemValue?: string;
    children: React.ReactNode;
}
  
export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  itemValue
}) => {
  const { toggleItem, isItemOpen } = useAccordionContext();

  if (!itemValue) return null;

  const open = isItemOpen(itemValue);

  return (
    <Trigger onClick={() => toggleItem(itemValue)} data-state={open ? "open" : "closed"}>
      <span>{children}</span>
      <ChevronDown size={16} className="accordion-chevron" />
    </Trigger>
  );
};
