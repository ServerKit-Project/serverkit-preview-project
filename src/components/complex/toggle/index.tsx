import styled from "styled-components";

export const ToggleRoot = styled.button<{
  $pressed?: boolean;
  $size?: "small" | "default" | "large";
  $variant?: "default" | "outline";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  /* Size variants */
  ${(props) =>
    props.$size === "small" &&
    `
    padding: 0.375rem 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
  `}

  ${(props) =>
    (!props.$size || props.$size === "default") &&
    `
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    height: 2.5rem;
  `}
  
  ${(props) =>
    props.$size === "large" &&
    `
    padding: 0.75rem 1rem;
    font-size: 1rem;
    height: 2.75rem;
  `}

  /* Style variants */
  ${(props) =>
    (!props.$variant || props.$variant === "default") &&
    `
    background-color: ${props.$pressed ? "#E5E7EB" : "transparent"};
    color: ${props.$pressed ? "#111827" : "#6B7280"};
    border: 1px solid transparent;

    &:hover {
      background-color: #F3F4F6;
      color: #111827;
    }
  `}

  ${(props) =>
    props.$variant === "outline" &&
    `
    background-color: ${props.$pressed ? "#F3F4F6" : "transparent"};
    border: 1px solid #E5E7EB;
    color: ${props.$pressed ? "#111827" : "#6B7280"};

    &:hover {
      background-color: #F9FAFB;
      color: #111827;
    }
  `}

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;
