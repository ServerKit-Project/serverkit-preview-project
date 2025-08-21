"use client";

import * as React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isSameMonth,
  isToday,
  addMonths,
  subMonths,
} from "date-fns";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/base/button";

export interface CalendarEvent {
  date: Date;
  title: string;
  type?: string;
  color?: string;
}

export interface CalendarProps {
  value?: Date;
  events?: CalendarEvent[];
  onDateClick?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
  className?: string;
  showWeekNumbers?: boolean;
}

export function Calendar({
  value = new Date(),
  events = [],
  onDateClick,
  onEventClick,
  className,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(value);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startingDayOfWeek = getDay(monthStart);

  const previousMonthDays = React.useMemo(() => {
    const prevMonth = subMonths(monthStart, 1);
    const prevMonthEnd = endOfMonth(prevMonth);
    const days = [];
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(
        new Date(
          prevMonthEnd.getFullYear(),
          prevMonthEnd.getMonth(),
          prevMonthEnd.getDate() - i
        )
      );
    }
    return days;
  }, [monthStart, startingDayOfWeek]);

  const nextMonthDays = React.useMemo(() => {
    const totalCells = 42;
    const currentCells = previousMonthDays.length + monthDays.length;
    const remainingCells = totalCells - currentCells;
    const nextMonth = addMonths(monthStart, 1);
    const days = [];
    for (let i = 1; i <= remainingCells; i++) {
      days.push(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i));
    }
    return days;
  }, [previousMonthDays.length, monthDays.length, monthStart]);

  const allDays = [...previousMonthDays, ...monthDays, ...nextMonthDays];

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div
      className={cn(
        "flex flex-col gap-2 bg-background rounded-lg p-4",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-subtitle-regular">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <div className="flex items-center gap-1"></div>
        </div>
        <div className="flex items-center">
          <Button
            variant="clear"
            size="icon"
            onClick={goToPreviousMonth}
            className="h-8 w-8"
          >
            <IconChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="clear" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button
            variant="clear"
            size="icon"
            onClick={goToNextMonth}
            className="h-8 w-8"
          >
            <IconChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-0">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-caption-regular py-2">
            {day}
          </div>
        ))}

        {allDays.map((day, index) => {
          const dayEvents = getEventsForDate(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isDayToday = isToday(day);
          const isFirstRow = index < 7;
          const isTopLeft = index === 0;
          const isTopRight = index === 6;
          const isBottomLeft = index === allDays.length - 7;
          const isBottomRight = index === allDays.length - 1;

          return (
            <div
              key={index}
              className={cn(
                "text-caption-regular min-h-[100px] border-r border-b p-2 cursor-pointer hover:bg-accent/50 transition-colors",
                isTopLeft && "rounded-tl-lg",
                isTopRight && "rounded-tr-lg",
                isBottomLeft && "rounded-bl-lg",
                isBottomRight && "rounded-br-lg",
                isDayToday && "bg-primary/10",
                index % 7 === 0 && "border-l",
                isFirstRow && "border-t"
              )}
              style={{
                color: isCurrentMonth
                  ? "var(--scale-primary-text)"
                  : "var(--scale-disabled-text)",
              }}
              onClick={() => onDateClick?.(day)}
            >
              <div className={cn("mb-1 text-right")}>{format(day, "d")}</div>
              <div className="space-y-1">
                {dayEvents.slice(0, 3).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={cn(
                      "text-xs px-1.5 py-0.5 rounded border cursor-pointer hover:opacity-80 truncate",
                      event.color || "border-gray-200 bg-gray-50 text-gray-700"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                    title={event.title}
                  >
                    {event.type && (
                      <span className="text-gray-500">[{event.type}] </span>
                    )}
                    <span className="text-gray-700">{event.title}</span>
                  </div>
                ))}
                {dayEvents.length > 3 && (
                  <div className="text-xs text-muted-foreground pl-1">
                    +{dayEvents.length - 3} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
