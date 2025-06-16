import styled from 'styled-components';

export const CommandWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-height: 400px;
  overflow-y: auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #e5e7eb;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0;
`;

export const GroupWrapper = styled.div`
  padding: 0.5rem 0;
`;

export const GroupHeading = styled.div`
  padding: 0 0.75rem;
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

export const ItemWrapper = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  &[data-disabled='true'] {
    color: #9ca3af;
    pointer-events: none;
  }
`;

export const EmptyState = styled.div`
  padding: 1rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
`;
