import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function CalendarPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});

  return (
    <ComponentSection title="Calendar">
      <PreviewCard
        title="Basic Calendar"
        description="Simple calendar for date selection"
        code={`const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </PreviewCard>

      <PreviewCard
        title="Multiple Date Selection"
        description="Calendar that allows selecting multiple dates"
        code={`const [dates, setDates] = useState<Date[] | undefined>([]);

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-md border"
/>`}
      >
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border"
        />
      </PreviewCard>

      <PreviewCard
        title="Date Range Selection"
        description="Calendar for selecting a date range"
        code={`const [dateRange, setDateRange] = useState<{from?: Date, to?: Date}>({});

<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  className="rounded-md border"
/>`}
      >
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          className="rounded-md border"
        />
      </PreviewCard>

      <PreviewCard
        title="Disabled Dates"
        description="Calendar with disabled past dates"
        code={`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) =>
    date < new Date() || date < new Date("1900-01-01")
  }
  className="rounded-md border"
/>`}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date < new Date() || date < new Date("1900-01-01")
          }
          className="rounded-md border"
        />
      </PreviewCard>

      <PreviewCard
        title="Custom Initial Focus"
        description="Calendar with custom initial month"
        code={`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  initialFocus
  defaultMonth={new Date(2024, 0)} // January 2024
  className="rounded-md border"
/>`}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          defaultMonth={new Date(2024, 0)}
          className="rounded-md border"
        />
      </PreviewCard>
    </ComponentSection>
  );
}