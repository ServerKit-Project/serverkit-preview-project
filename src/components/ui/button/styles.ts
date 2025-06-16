import styled, { css } from "styled-components";

export type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
export type Size = "default" | "sm" | "lg" | "icon";

export const ButtonBase = styled.button<{
  $variant?: Variant;
  $size?: Size;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
  font-size: 0.875rem;
  line-height: 1rem;
  height: 2.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
  border: none;

  ${({ $variant }) => {
    switch ($variant) {
      case "destructive":
        return css`
          background-color: #ef4444;
          color: white;
          &:hover {
            background-color: #dc2626;
          }
        `;
      case "outline":
        return css`
          background-color: transparent;
          border: 1px solid #d1d5db;
          color: #1f2937;
        `;
      case "secondary":
        return css`
          background-color: #f3f4f6;
          color: #1f2937;
          &:hover {
            background-color: #e5e7eb;
          }
        `;
      case "ghost":
        return css`
          background-color: transparent;
          color: #1f2937;
          &:hover {
            background-color: #f9fafb;
          }
        `;
      case "link":
        return css`
          background-color: transparent;
          color: #000000;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        `;

      default:
        return css`
          background-color: #1f2937;
          color: white;
          &:hover {
            background-color: #111827;
          }
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 2rem;
          padding: 0rem 0.75rem;
          font-size: 0.75rem;
        `;
      case "lg":
        return css`
          height: 3rem;
          padding: 0rem 1.5rem;
          font-size: 1rem;
        `;
      case "icon":
        return css`
          padding: 0;
          width: 2.5rem;
          height: 2.5rem;
        `;
      default:
        return "";
    }
  }}

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }


  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;

  }
`;
