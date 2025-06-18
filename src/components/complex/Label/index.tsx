import React from "react";
import styled from "styled-components";

export const LabelRoot = styled.label<{ $disabled?: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => (props.$disabled ? "#9CA3AF" : "#111827")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};

  &::before {
    content: "";
    margin-right: 0.25rem;
  }

  &:hover {
    color: ${(props) => !props.$disabled && "#000000"};
  }
`;

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, disabled, ...props }, ref) => {
    return <LabelRoot ref={ref} $disabled={disabled} {...props} />;
  }
);

Label.displayName = "Label";
