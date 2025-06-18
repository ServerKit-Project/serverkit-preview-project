import React from "react";
import styled from "styled-components";

export const StyledTextarea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  min-height: 80px;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border: 1px solid ${(props) => (props.$error ? "#ef4444" : "#e5e7eb")};
  border-radius: 0.375rem;
  color: #1f2937;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$error ? "#ef4444" : "#3b82f6")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$error ? "rgba(239, 68, 68, 0.2)" : "rgba(59, 130, 246, 0.2)"};
  }

  &:disabled {
    background-color: #f3f4f6;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
  }

  &:read-only {
    background-color: #f9fafb;
    border-color: #e5e7eb;
  }

  &::-webkit-resizer {
    border-width: 8px;
    border-style: solid;
    border-color: transparent #e5e7eb #e5e7eb transparent;
  }
`;
