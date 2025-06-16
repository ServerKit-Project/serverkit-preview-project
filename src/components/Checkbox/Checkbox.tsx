import styled from "styled-components";
import React from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

const getSize = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return { box: "14px", font: "0.875rem" };
    case "lg":
      return { box: "20px", font: "1.125rem" };
    default:
      return { box: "16px", font: "1rem" };
  }
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label<{ $size: "sm" | "md" | "lg" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: ${(props) => getSize(props.$size).font};
  color: #2d3748;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.div<{
  $checked: boolean;
  $disabled: boolean;
  $size: "sm" | "md" | "lg";
}>`
  width: ${(props) => getSize(props.$size).box};
  height: ${(props) => getSize(props.$size).box};
  border: 2px solid ${(props) => (props.$checked ? "#3182ce" : "#cbd5e0")};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.$checked ? "#3182ce" : "white")};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  &:hover {
    border-color: ${(props) => !props.$disabled && "#3182ce"};
  }

  &::after {
    content: "";
    width: 40%;
    height: 60%;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(${(props) => (props.$checked ? 1 : 0)});
    transition: transform 0.2s ease-in-out;
    margin-bottom: 2px;
  }
`;

const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  size = "md",
  checked = false,
  disabled = false,
  onChange,
  ...props
}) => {
  return (
    <Container>
      <Label $size={size}>
        <HiddenCheckbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <StyledCheckbox $checked={checked} $disabled={disabled} $size={size} />
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
