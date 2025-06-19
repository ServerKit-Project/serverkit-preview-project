import { useState, useRef, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Container,
  Input,
  CalendarIcon as CalendarButton,
  Calendar,
  Header,
  MonthYear,
  Button,
  WeekDays,
  Days,
  Day,
  ErrorText,
} from "@/components/complex/DatePicker";

export const DatePickerPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

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

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    return { daysInMonth, startingDay };
  };

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

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    setHasError(false);
    setIsOpen(false);
  };

  const renderDays = () => {
    const days = [];
    const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    // 이전 달의 날짜들
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push(
        <Day key={`prev-${i}`} $isOutsideMonth $isDisabled>
          {prevMonthDays - i}
        </Day>
      );
    }

    // 현재 달의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <Day
          key={day}
          onClick={() => handleDateSelect(day)}
          $isToday={isToday(day)}
          $isSelected={isSelected(day)}
        >
          {day}
        </Day>
      );
    }

    // 다음 달의 날짜들
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <Day key={`next-${i}`} $isOutsideMonth $isDisabled>
          {i}
        </Day>
      );
    }

    return days;
  };

  return (
    <Container ref={containerRef}>
      <Input
        value={selectedDate ? formatDate(selectedDate) : ""}
        placeholder="날짜 선택"
        readOnly
        onClick={() => setIsOpen(true)}
        $hasError={hasError}
      />
      <CalendarButton onClick={() => setIsOpen(true)}>
        <CalendarIcon size={20} />
      </CalendarButton>

      <Calendar $isOpen={isOpen}>
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
      </Calendar>

      {hasError && <ErrorText>날짜를 선택해주세요</ErrorText>}
    </Container>
  );
};
