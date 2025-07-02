import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  z-index: 50;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1rem;
  color: #2d3748;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const ItemsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const Item = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#f7fafc" : "transparent"};

  &:hover {
    background-color: #f7fafc;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
  color: #4a5568;
`;

export const Label = styled.div`
  flex: 1;
  font-size: 0.875rem;
  color: #2d3748;
`;

export const Shortcut = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const ShortcutKey = styled.kbd`
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  font-family: monospace;
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  color: #4a5568;
`;
