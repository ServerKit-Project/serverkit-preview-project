import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #4a5568;

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
  $isToday?: boolean;
  $isSelected?: boolean;
  $isOutsideMonth?: boolean;
}>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => (props.$isSelected ? "#3182ce" : "transparent")};
  color: ${(props) => {
    if (props.$isSelected) return "#ffffff";
    if (props.$isOutsideMonth) return "#cbd5e0";
    return "#2d3748";
  }};
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$isToday &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${props.$isSelected ? "#ffffff" : "#3182ce"};
    }
  `}

  &:hover:not(:disabled) {
    background: ${(props) => (props.$isSelected ? "#2c5282" : "#e2e8f0")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
