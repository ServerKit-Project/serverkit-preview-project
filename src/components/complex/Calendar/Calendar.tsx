import styled from "styled-components";
import React, { useState } from "react";

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthYear = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Button = styled.button`
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

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  color: #718096;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const Day = styled.button<{
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

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const Calendar: React.FC<CalendarProps> = ({
  value = new Date(),
  onChange,
  minDate,
  maxDate,
}) => {
  const [currentDate, setCurrentDate] = useState(value);
  const [selectedDate, setSelectedDate] = useState(value);

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    onChange?.(newDate);
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const renderDays = () => {
    const days = [];
    const today = new Date();

    // Previous month days
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push(
        <Day key={`prev-${prevMonthDays - i}`} $isOutsideMonth disabled>
          {prevMonthDays - i}
        </Day>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();

      days.push(
        <Day
          key={day}
          onClick={() => handleDateSelect(day)}
          $isToday={isToday}
          $isSelected={isSelected}
          disabled={isDateDisabled(date)}
        >
          {day}
        </Day>
      );
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <Day key={`next-${i}`} $isOutsideMonth disabled>
          {i}
        </Day>
      );
    }

    return days;
  };

  return (
    <CalendarContainer>
      <Header>
        <Button onClick={prevMonth}>&lt;</Button>
        <MonthYear>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </MonthYear>
        <Button onClick={nextMonth}>&gt;</Button>
      </Header>
      <WeekDays>
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </WeekDays>
      <Days>{renderDays()}</Days>
    </CalendarContainer>
  );
};
