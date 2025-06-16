import React, { createContext, useContext, useState } from "react";

type AccordionType = "single" | "multiple";

interface AccordionContextProps {
  type: AccordionType;
  value: string[]; // opened items
  toggleItem: (val: string) => void;
  isItemOpen: (val: string) => boolean;
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export interface AccordionProps {
  children: React.ReactNode;
  type?: AccordionType;
  defaultValue?: string | string[];
  collapsible?: boolean;
  className?: string;
}
    
export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = "single",
  defaultValue,
  collapsible = false,
  className,
}) => {
  const [value, setValue] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );

  const toggleItem = (val: string) => {
    setValue((prev) => {
      const isOpen = prev.includes(val);
      if (type === "single") {
        if (isOpen && collapsible) return [];
        return [val];
      }
      // multiple
      return isOpen ? prev.filter((v) => v !== val) : [...prev, val];
    });
  };

  const isItemOpen = (val: string) => value.includes(val);

  return (
    <AccordionContext.Provider
      value={{ type, value, toggleItem, isItemOpen, collapsible }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion components must be inside <Accordion>");
  return ctx;
};
