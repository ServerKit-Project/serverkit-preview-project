export interface LanguageOption {
  value: string;
  label: string;
  localLabel: string;
  isBeta?: boolean;
}

export interface LanguageSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}