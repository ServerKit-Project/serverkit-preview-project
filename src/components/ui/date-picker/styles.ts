import styled, { css } from 'styled-components';

export const DatePickerContainer = styled.div`
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  position: relative;
`;

export const TriggerInput = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  min-width: 200px;
  font-size: 14px;
  color: #000;
  text-align: left;

  &:hover {
    background: #f9fafb;
  }

  svg {
    color: #666;
    margin-left: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: white;
  border-bottom: 1px solid #eee;
`;

export const MonthSelect = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: #f3f4f6;
  }
`;

export const YearSelect = styled(MonthSelect)``;

export const NavigationButton = styled.button`
  border: none;
  background: transparent;
  padding: 8px;
  cursor: pointer;
  color: #666;
  border-radius: 6px;

  &:hover {
    background: #f3f4f6;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Calendar = styled.div`
  padding: 12px;
  background: white;
`;

export const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
`;

export const WeekdayCell = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  padding: 8px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const DayCell = styled.button<{
  $isToday?: boolean;
  $isSelected?: boolean;
  $isOutsideMonth?: boolean;
}>`
  aspect-ratio: 1;
  border: none;
  background: transparent;
  padding: 0;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  color: ${props => props.$isOutsideMonth ? '#ccc' : '#000'};

  &:hover {
    background: #f3f4f6;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  ${props => props.$isToday && css`
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #000;
    }
  `}

  ${props => props.$isSelected && css`
    background: #000;
    color: white;
    border-radius: 6px;

    &:hover {
      background: #000;
    }
  `}
`;

export const DatePickerPopover = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: max-content;
  overflow: hidden;
  z-index: 50;
`;


