import React, { useState, Children, useRef } from "react";
import type { DropdownMenuSubProps } from "./types";
import { DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger";
import styled from "styled-components";

export const SubWrapper = styled.div`
  position: relative;
`;

export const DropdownMenuSub = ({ children }: DropdownMenuSubProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number>();

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const childArray = Children.toArray(children);

  return (
    <SubWrapper onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      {childArray.map((child) => {
        if (React.isValidElement(child)) {
          if (child.type === DropdownMenuSubTrigger) {
            return React.cloneElement(child, { setOpen } as any);
          }
          if (open) {
            return child;
          }
        }
        return null;
      })}
    </SubWrapper>
  );
};
