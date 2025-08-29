import React from "react";
import { cn } from "@/lib/utils";
import { IconSearch, IconX, IconInfoCircle } from "@tabler/icons-react";
import { inputVariants, messageVariants } from "./Input.variants";
import type { InputProps } from "./Input.types";

export const Input = ({
  status,
  variant,
  size,
  hasClearButton = false,
  defaultValue,
  disabled,
  label,
  message,
  className,
  ...props
}: InputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState<string>("");

  const currentStatus = disabled
    ? "disabled"
    : status === "error"
    ? "error"
    : focus
    ? "focus"
    : status || "default";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    if (!disabled) {
      setValue("");
      inputRef.current?.focus();
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    props.onBlur?.(e);
  };

  if (variant === "searchbar") {
    return (
      <div className="relative gap-1">
        <input
          ref={inputRef}
          type={props.type ?? "text"}
          disabled={disabled}
          aria-invalid={status === "error"}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={props.placeholder}
          className={cn(
            inputVariants({ status: currentStatus, variant, size }),
            "px-10 w-full ",
            className
          )}
          {...props}
        />

        <span
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2",
            value
              ? "text-[var(--scale-primary-text)]"
              : "text-[var(--scale-tertiary-text)]"
          )}
        >
          <IconSearch className="size-6" aria-hidden />
        </span>

        {hasClearButton && !!value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="입력 내용 지우기"
            className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer pr-2 "
          >
            <IconX
              className="size-4 text-[var(--scale-tertiary-text)]"
              aria-hidden
            />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="block text-xs text-[var(--scale-secondary-text)]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          type={props.type ?? "text"}
          disabled={disabled}
          aria-invalid={status === "error"}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={props.placeholder}
          className={cn(
            inputVariants({ status: currentStatus, variant, size }),
            "w-full ",
            className
          )}
          {...props}
        />
      </div>

      {message && (
        <div
          className={cn(
            messageVariants({
              status: status === "error" ? "error" : "default",
            }),
            "flex items-center gap-[2px]"
          )}
        >
          <IconInfoCircle
            className={cn(
              "w-4 h-4",
              status === "error"
                ? "text-[var(--error-deeper)]"
                : "text-[var(--scale-tertiary-text)]"
            )}
            aria-hidden
          />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};
