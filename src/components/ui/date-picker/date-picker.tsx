import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import {
  DatePickerContainer,
  TriggerInput,
  Header,
  MonthSelect,
  YearSelect,
  NavigationButton,
  Calendar,
  WeekdayHeader,
  WeekdayCell,
  DaysGrid,
  DayCell,
  DatePickerPopover,
} from './styles';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  min?: Date;
  max?: Date;
  placeholder?: string;
  /**
   * Optional CSS class name
   */
  className?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  min,
  max,
  placeholder = 'Select date...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const lastDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
    onChange?.(newDate);
    setIsOpen(false);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      viewDate.getMonth() === today.getMonth() &&
      viewDate.getFullYear() === today.getFullYear()
    );
  };

  const renderDays = () => {
    const days = [];
    const previousMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 0);
    const daysInPreviousMonth = previousMonth.getDate();

    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = daysInPreviousMonth - i;
      days.push(
        <DayCell
          key={`prev-${day}`}
          onClick={() => handleDateSelect(day)}
          $isOutsideMonth
        >
          {day}
        </DayCell>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate?.getDate() === day &&
        selectedDate?.getMonth() === viewDate.getMonth() &&
        selectedDate?.getFullYear() === viewDate.getFullYear();

      days.push(
        <DayCell
          key={day}
          onClick={() => handleDateSelect(day)}
          $isSelected={isSelected}
          $isToday={isToday(day)}
        >
          {day}
        </DayCell>
      );
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let day = 1; day <= remainingDays; day++) {
      days.push(
        <DayCell
          key={`next-${day}`}
          onClick={() => handleDateSelect(day)}
          $isOutsideMonth
        >
          {day}
        </DayCell>
      );
    }

    return days;
  };

  return (
    <DatePickerContainer ref={containerRef}>
      <TriggerInput onClick={() => setIsOpen(!isOpen)}>
        {selectedDate ? formatDate(selectedDate) : placeholder}
        <CalendarIcon size={16} />
      </TriggerInput>

      <DatePickerPopover $isOpen={isOpen}>
        <Header>
          <NavigationButton onClick={handlePrevMonth}>
            <ChevronLeft size={16} />
          </NavigationButton>
          <div style={{ display: 'flex', gap: '8px' }}>
            <MonthSelect>
              {MONTHS[viewDate.getMonth()]}
              <ChevronDown size={16} />
            </MonthSelect>
            <YearSelect>
              {viewDate.getFullYear()}
              <ChevronDown size={16} />
            </YearSelect>
          </div>
          <NavigationButton onClick={handleNextMonth}>
            <ChevronRight size={16} />
          </NavigationButton>
        </Header>
        <Calendar>
          <WeekdayHeader>
            {WEEKDAYS.map(day => (
              <WeekdayCell key={day}>{day}</WeekdayCell>
            ))}
          </WeekdayHeader>
          <DaysGrid>
            {renderDays()}
          </DaysGrid>
        </Calendar>
      </DatePickerPopover>
    </DatePickerContainer>
  );
};
