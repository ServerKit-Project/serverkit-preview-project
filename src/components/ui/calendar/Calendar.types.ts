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
}
