import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 0.75rem;
  border: 1px solid ${(props) => (props.$hasError ? "#e53e3e" : "#e2e8f0")};
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #2d3748;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#e53e3e" : "#cbd5e0")};
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

const CalendarIcon = styled.button`
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

const Calendar = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthYear = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #2d3748;
`;

const Button = styled.button`
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
  $isDisabled?: boolean;
}>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => (props.$isSelected ? "#3182ce" : "transparent")};
  color: ${(props) => {
    if (props.$isDisabled) return "#cbd5e0";
    if (props.$isSelected) return "#ffffff";
    if (props.$isOutsideMonth) return "#a0aec0";
    return "#2d3748";
  }};
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
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
    background: ${(props) => (props.$isSelected ? "#2c5282" : "#f7fafc")};
  }
`;

const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  placeholder = "날짜 선택",
  disabled = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    if (!isDateDisabled(selectedDate)) {
      onChange?.(selectedDate);
      setIsOpen(false);
    }
  };

  const renderCalendar = () => {
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
    const today = new Date();

    const days = [];

    // Previous month days
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        prevMonthDays - i
      );
      days.push(
        <Day
          key={`prev-${prevMonthDays - i}`}
          $isOutsideMonth
          $isDisabled
          disabled
        >
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
      const isSelected = value && date.toDateString() === value.toDateString();
      const isDisabled = isDateDisabled(date);

      days.push(
        <Day
          key={day}
          onClick={() => !isDisabled && handleDateSelect(day)}
          $isToday={isToday}
          $isSelected={isSelected}
          $isDisabled={isDisabled}
          disabled={isDisabled}
        >
          {day}
        </Day>
      );
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      );
      days.push(
        <Day key={`next-${i}`} $isOutsideMonth $isDisabled disabled>
          {i}
        </Day>
      );
    }

    return days;
  };

  return (
    <Container ref={containerRef}>
      <Input
        type="text"
        value={value ? formatDate(value) : ""}
        placeholder={placeholder}
        readOnly
        onClick={() => !disabled && setIsOpen(true)}
        disabled={disabled}
        $hasError={!!error}
      />
      <CalendarIcon
        onClick={() => !disabled && setIsOpen(true)}
        disabled={disabled}
      >
        📅
      </CalendarIcon>
      <Calendar $isOpen={isOpen}>
        <Header>
          <Button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
              )
            }
          >
            ‹
          </Button>
          <MonthYear>
            {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
          </MonthYear>
          <Button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
              )
            }
          >
            ›
          </Button>
        </Header>
        <WeekDays>
          {WEEKDAYS.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </WeekDays>
        <Days>{renderCalendar()}</Days>
      </Calendar>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
