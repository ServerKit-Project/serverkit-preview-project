import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  box-sizing: border-box;

  height: 2.5rem; /* h-10 */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */

  font-size: 0.875rem; /* text-sm */
  line-height: 1.25rem;
  color: #111827; /* text-foreground */

  background-color: #ffffff; /* bg-background */
  border: 1px solid #e5e7eb; /* border-input */
  border-radius: 0.5rem; /* rounded-md or larger */

  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #6b7280; /* placeholder:text-muted-foreground */
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: #a1a1aa;
    box-shadow: 0 0 0 2px #a1a1aa;
  }

  &[aria-invalid='true'] {
    border-color: #ef4444; /* red border */
    box-shadow: 0 0 0 2px #fecaca; /* soft red ring */
  }


  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f9fafb;
  }
`;
