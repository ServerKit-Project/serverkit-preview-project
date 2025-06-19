import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CalendarContainer,
  Header,
  MonthYear,
  Button,
  WeekDays,
  Days,
  Day,
} from "@/components/complex/Calendar";

export const CalendarPreview = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);

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

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };
  const renderDays = () => {
    const days = [];
    const today = new Date();

    // 이전 달의 날짜들
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    for (let i = startingDay - 1; i >= 0; i--) {
      days.push(
        <Day key={`prev-${i}`} $isOutsideMonth disabled>
          {prevMonthDays - i}
        </Day>
      );
    }

    // 현재 달의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <Day
          key={day}
          $isToday={isToday(day)}
          $isSelected={isSelected}
          onClick={() => setSelectedDate(date)}
        >
          {day}
        </Day>
      );
    }

    // 다음 달의 날짜들
    const remainingDays = 42 - days.length; // 6주 그리드를 채우기 위해
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
        <Button onClick={prevMonth}>
          <ChevronLeft size={20} />
        </Button>
        <MonthYear>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </MonthYear>
        <Button onClick={nextMonth}>
          <ChevronRight size={20} />
        </Button>
      </Header>

      <WeekDays>
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </WeekDays>

      <Days>{renderDays()}</Days>
    </CalendarContainer>
  );
};
