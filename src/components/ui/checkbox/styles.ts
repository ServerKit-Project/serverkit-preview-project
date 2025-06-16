import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const CheckboxBox = styled.div<{
  'data-state': 'checked' | 'unchecked' | 'indeterminate';
  disabled?: boolean;
  variant: 'default' | 'blue';
}>`
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid #d1d5db;
  border-radius: 0.25rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  ${({ 'data-state': state, variant }) =>
    (state === 'checked' || state === 'indeterminate') &&
    css`
      background-color: ${variant === 'blue' ? '#2563eb' : '#000'};
      border-color: ${variant === 'blue' ? '#2563eb' : '#000'};
      color: white;
    `}
`;


export const CheckboxIcon = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  stroke-width: 3;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #111827;
`;

export const Description = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const CheckboxCardWrapper = styled.div<{ 'data-state'?: string }>`
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #fff;
  transition: border-color 0.2s, background-color 0.2s;

  ${({ 'data-state': state }) =>
    state === 'checked' &&
    css`
      border-color: #2563eb;
      background-color: #f0f9ff;
    `}
`;
