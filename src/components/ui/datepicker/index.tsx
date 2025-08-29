"use client";

import { format, parse, isValid } from "date-fns";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/base/input";
import { Calendar } from "@/components/base/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base/popover";
import { DatePickerProps } from "./DatePicker.types";

export function DatePicker({
  value,
  onChange,
  placeholder = "YYYY-MM-DD",
  disabled = false,
  className,
  inputClassName,
  calendarClassName,
  dateFormat = "PPP",
  inputFormat = "yyyy-MM-dd",
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(value);
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState<Date>(value || new Date());

  useEffect(() => {
    setDate(value);
    if (value && isValid(value)) {
      setInputValue(format(value, inputFormat));
    } else {
      setInputValue("");
    }
  }, [value, inputFormat]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      setDate(undefined);
      onChange?.(undefined);
      return;
    }

    try {
      const parsedDate = parse(value, inputFormat, new Date());
      if (isValid(parsedDate)) {
        setDate(parsedDate);
        setMonth(parsedDate);
        onChange?.(parsedDate);
      }
    } catch {
      // TODO: 날짜가 올바르지 않으면 아무 작업도 하지 않음, 필요 시 적절한 처리 추가
    }
  };

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    onChange?.(newDate);
    if (newDate && isValid(newDate)) {
      setInputValue(format(newDate, inputFormat));
    } else {
      setInputValue("");
    }
    setIsOpen(false);
  };

  return (
    <div className={cn("w-full", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Input
            type="text"
            value={date ? format(date, dateFormat) : ""}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
            className={cn("cursor-pointer", inputClassName)}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3">
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={disabled}
              className="mb-3"
            />
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleSelect}
              month={month}
              onMonthChange={setMonth}
              disabled={disabled}
              className={calendarClassName}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
