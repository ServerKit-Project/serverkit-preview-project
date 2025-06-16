import styled from 'styled-components';

export const StyledContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 14rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
  &[data-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledSubContent = styled(StyledContent)`
  position: absolute;
  left: calc(100% - 0.5rem);
  top: -0.5rem;
  margin-left: 0;
  min-width: 12rem;
`;
