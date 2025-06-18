import React from "react";
import styled from "styled-components";

export const InputOTPRoot = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const InputOTPGroupRoot = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const InputOTPSlotRoot = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const InputOTPSlotInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 20px;
  text-align: center;
  border: 1px solid hsl(240 5.9% 90%);
  border-radius: 6px;
  background-color: transparent;
  color: hsl(240 10% 3.9%);
  transition: all 150ms;

  &:focus {
    outline: none;
    border-color: hsl(240 5.9% 90%);
    box-shadow: 0 0 0 1px hsl(240 5.9% 90%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[data-complete="true"] {
    border-color: hsl(142.1 76.2% 36.3%);
    box-shadow: 0 0 0 1px hsl(142.1 76.2% 36.3%);
  }

  &[data-error="true"] {
    border-color: hsl(0 84.2% 60.2%);
    box-shadow: 0 0 0 1px hsl(0 84.2% 60.2%);
  }
`;

export const InputOTPSeparatorRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  color: hsl(240 3.8% 46.1%);
  font-size: 20px;
`;

interface InputOTPContextValue {
  maxLength: number;
  value: string;
  disabled?: boolean;
  error?: boolean;
  setValue: (value: string) => void;
  onComplete?: (value: string) => void;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

const InputOTPContext = React.createContext<InputOTPContextValue | undefined>(
  undefined
);

function useInputOTPContext() {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error(
      "useInputOTPContext must be used within an InputOTP provider"
    );
  }
  return context;
}

interface InputOTPProps {
  value?: string;
  defaultValue?: string;
  maxLength: number;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  children: React.ReactNode;
}

export function InputOTP({
  value: controlledValue,
  defaultValue = "",
  maxLength,
  disabled = false,
  error = false,
  onChange,
  onComplete,
  children,
}: InputOTPProps) {
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const setValue = React.useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
      if (newValue.length === maxLength) {
        onComplete?.(newValue);
      }
    },
    [isControlled, maxLength, onChange, onComplete]
  );

  // Focus on first empty slot
  React.useEffect(() => {
    const firstEmptyIndex = value.split("").findIndex((char) => !char);
    if (firstEmptyIndex !== -1 && firstEmptyIndex < maxLength) {
      inputRefs.current[firstEmptyIndex]?.focus();
    }
  }, [value, maxLength]);

  return (
    <InputOTPContext.Provider
      value={{
        maxLength,
        value,
        disabled,
        error,
        setValue,
        onComplete,
        inputRefs,
      }}
    >
      <InputOTPRoot>{children}</InputOTPRoot>
    </InputOTPContext.Provider>
  );
}

interface InputOTPGroupProps {
  children: React.ReactNode;
}

export function InputOTPGroup({ children }: InputOTPGroupProps) {
  return <InputOTPGroupRoot>{children}</InputOTPGroupRoot>;
}

interface InputOTPSlotProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  index: number;
}

export function InputOTPSlot({ index, ...props }: InputOTPSlotProps) {
  const { maxLength, value, disabled, error, setValue, inputRefs } =
    useInputOTPContext();
  const digits = value.split("");
  const isComplete = digits.length === maxLength;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newValue = digits.slice();

      if (digits[index]) {
        // If current slot has a value, clear it
        newValue[index] = "";
        setValue(newValue.join(""));
      } else if (index > 0) {
        // If current slot is empty and not first slot, clear previous slot and move focus
        newValue[index - 1] = "";
        setValue(newValue.join(""));
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "Delete") {
      e.preventDefault();
      const newValue = digits.slice();
      newValue[index] = "";
      setValue(newValue.join(""));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChar = e.target.value.slice(-1);
    if (newChar.match(/[0-9]/)) {
      const newValue = digits.slice();
      newValue[index] = newChar;
      const nextValue = newValue.join("");
      setValue(nextValue);

      // Automatically focus next empty slot
      if (index < maxLength - 1) {
        const nextInput = inputRefs.current[index + 1];
        nextInput?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, maxLength);
    if (pastedData.match(/^[0-9]+$/)) {
      // Fill from current position
      const currentValue = value.split("");
      const pastedChars = pastedData.split("");

      for (let i = 0; i < pastedChars.length && index + i < maxLength; i++) {
        currentValue[index + i] = pastedChars[i];
      }

      const nextValue = currentValue.join("");
      setValue(nextValue);

      // Focus the next empty slot after pasted data
      const nextEmptyIndex = currentValue.findIndex(
        (char, i) => !char && i >= index
      );
      if (nextEmptyIndex !== -1 && nextEmptyIndex < maxLength) {
        inputRefs.current[nextEmptyIndex]?.focus();
      }
    }
  };

  return (
    <InputOTPSlotRoot>
      <InputOTPSlotInput
        ref={(el) => (inputRefs.current[index] = el)}
        value={digits[index] || ""}
        disabled={disabled}
        data-error={error}
        data-complete={isComplete}
        maxLength={1}
        onKeyDown={handleKeyDown}
        onChange={handleInput}
        onPaste={handlePaste}
        {...props}
      />
    </InputOTPSlotRoot>
  );
}

interface InputOTPSeparatorProps {
  children?: React.ReactNode;
}

export function InputOTPSeparator({ children = "•" }: InputOTPSeparatorProps) {
  return <InputOTPSeparatorRoot>{children}</InputOTPSeparatorRoot>;
}

InputOTP.displayName = "InputOTP";
InputOTPGroup.displayName = "InputOTPGroup";
InputOTPSlot.displayName = "InputOTPSlot";
InputOTPSeparator.displayName = "InputOTPSeparator";
