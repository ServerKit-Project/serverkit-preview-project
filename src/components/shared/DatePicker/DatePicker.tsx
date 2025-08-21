"use client";

import * as React from "react";
import { format, parse, isValid } from "date-fns";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  calendarClassName?: string;
  dateFormat?: string;
  inputFormat?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "YYYY-MM-DD",
  disabled = false,
  className,
  inputClassName,
  buttonClassName,
  calendarClassName,
  dateFormat = "PPP",
  inputFormat = "yyyy-MM-dd",
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date>(value || new Date());

  React.useEffect(() => {
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
