export interface StepperProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  status?: "default" | "error" | "focus";
  onChange?: (v: number) => void;
  className?: string;
}
