import React from "react";
import { StyledInput } from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional CSS class name
   */
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <StyledInput ref={ref} {...props} />;
  }
);

Input.displayName = "Input"; 