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
