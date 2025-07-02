import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const MonthYear = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.border.default};
    cursor: not-allowed;
  }
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
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
}>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) =>
    props.isSelected ? props.theme.colors.primary : "transparent"};
  color: ${(props) => {
    if (props.isSelected) return props.theme.colors.pureWhite;
    if (props.isOutsideMonth) return props.theme.colors.border.default;
    return props.theme.colors.text.primary;
  }};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.small};
  cursor: pointer;
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
      background: ${
        props.isSelected
          ? props.theme.colors.pureWhite
          : props.theme.colors.primary
      };
    }
  `}

  &:hover:not(:disabled) {
    background: ${(props) =>
      props.isSelected
        ? props.theme.colors.background.hover.primary
        : props.theme.colors.background.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
