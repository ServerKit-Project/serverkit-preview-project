import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 0.75rem;
  border: 1px solid ${(props) => (props.hasError ? "#e53e3e" : "#e2e8f0")};
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #2d3748;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => (props.hasError ? "#e53e3e" : "#cbd5e0")};
  }

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }

  &:disabled {
    background-color: #f7fafc;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const CalendarIcon = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.25rem;
  color: #4a5568;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Calendar = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  max-width: 320px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const MonthYear = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #2d3748;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0.25rem;
  color: #4a5568;
  cursor: pointer;

  &:hover {
    color: #2d3748;
  }

  &:disabled {
    color: #cbd5e0;
    cursor: not-allowed;
  }
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  color: #718096;
`;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

export const Day = styled.button<{
  isToday?: boolean;
  isSelected?: boolean;
  isOutsideMonth?: boolean;
  isDisabled?: boolean;
}>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => (props.isSelected ? "#3182ce" : "transparent")};
  color: ${(props) => {
    if (props.isDisabled) return "#cbd5e0";
    if (props.isSelected) return "#ffffff";
    if (props.isOutsideMonth) return "#a0aec0";
    return "#2d3748";
  }};
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  position: relative;

  ${(props) =>
    props.isToday &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${props.isSelected ? "#ffffff" : "#3182ce"};
    }
  `}

  &:hover:not(:disabled) {
    background: ${(props) => (props.isSelected ? "#2c5282" : "#f7fafc")};
  }
`;

export const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;
