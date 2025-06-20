import styled from "styled-components";

type CheckboxSize = "sm" | "md" | "lg";

const getSize = (size: CheckboxSize = "md") => {
  switch (size) {
    case "sm":
      return { box: "14px", font: "0.875rem" };
    case "lg":
      return { box: "20px", font: "1.125rem" };
    default:
      return { box: "16px", font: "1rem" };
  }
};

export const CheckboxContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CheckboxLabel = styled.label<{ $size?: CheckboxSize }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: ${(props) => getSize(props.$size).font};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxBox = styled.div<{
  $checked?: string;
  $disabled?: string;
  $size?: CheckboxSize;
}>`
  width: ${(props) => getSize(props.$size).box};
  height: ${(props) => getSize(props.$size).box};
  border: 2px solid
    ${(props) =>
      props.$checked
        ? props.theme.colors.primary
        : props.theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.$checked
      ? props.theme.colors.primary
      : props.theme.colors.background.secondary};
  opacity: ${(props) => props.$disabled || "1"};

  &:hover {
    border-color: ${(props) => !props.$disabled && props.theme.colors.primary};
  }

  &::after {
    content: "";
    width: 40%;
    height: 60%;
    border: solid ${({ theme }) => theme.colors.text.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(${(props) => (props.$checked ? "1" : "0")});
    transition: transform 0.2s ease-in-out;
    margin-bottom: 2px;
  }
`;

export const CheckboxError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
