"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "flex w-full min-w-0 border text-base outline-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "placeholder:text-[var(--scale-disabled-text)]",
  ],
  {
    variants: {
      purpose: {
        inputfield: "",
        searchbar: "w-[374px] h-11 pl-3 pr-2 gap-[6px] rounded-lg",
      },
      vSize: {
        m: "w-[374px] h-11 gap-2 rounded-lg py-2 pl-4 pr-[10px]",
        s: "w-[374px] h-[28px] gap-2 rounded text-sm py1 pl-2 pr-0.5",
      },
      status: {
        default:
          "border-[var(--scale-actived-clicked)] bg-[var(--scale-white)]",
        focus: "border-[var(--info-base)] bg-[var(--scale-white)]",
        error: "border-[var(--error-deep)] bg-[var(--scale-white)]",
        disabled:
          "border-[var(--scale-actived-clicked)] bg-[var(--scale-actived-clicked)]",
      },
    },
    defaultVariants: {
      status: "default",
      purpose: "inputfield",
      vSize: "m",
    },
  }
);

const messageVariants = cva("text-xs mt-1", {
  variants: {
    status: {
      default: "text-[var(--scale-tertiary-text)]",
      error: "text-[var(--error-deeper)]",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  hasClearButton?: boolean;
  label?: string;
  message?: string;
}

function Input({
  status,
  purpose,
  vSize,
  hasClearButton = false,
  defaultValue,
  disabled,
  label,
  message,
  className,
  ...props
}: InputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState<string>("");

  const currentStatus = disabled
    ? "disabled"
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

  if (purpose === "searchbar") {
    return (
      <div className="relative gap-1">
        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          aria-invalid={status === "error"}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={props.placeholder}
          className={cn(
            inputVariants({ status: currentStatus, purpose, vSize }),
            "pl-10 pr-10 w-full ",
            className
          )}
          {...props}
        />

        {/* 돋보기 아이콘 */}
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          <img
            src="/searchIcon.svg"
            width={24}
            height={24}
            alt="검색 아이콘"
            style={{
              filter: value
                ? "brightness(0) saturate(100%) invert(6%) sepia(9%) saturate(744%) hue-rotate(182deg) brightness(94%) contrast(106%)"
                : "none",
            }}
          />
        </span>

        {/* clear 버튼 */}
        {hasClearButton && !!value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="입력 내용 지우기"
            className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <img src="/xButton.svg" width={28} height={28} alt="" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-[4px]">
      {/* 라벨 */}
      {label && (
        <label className="block text-xs text-[var(--scale-secondary-text)]">
          {label}
        </label>
      )}

      {/* 입력 필드 */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          aria-invalid={status === "error"}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={props.placeholder}
          className={cn(
            inputVariants({ status: currentStatus, purpose, vSize }),
            "w-full ",
            className
          )}
          {...props}
        />
      </div>

      {/* 메시지 */}
      {message && (
        <div
          className={cn(
            messageVariants({
              status: status === "error" ? "error" : "default",
            }),
            "flex items-center gap-[2px]"
          )}
        >
          <img
            src="/inputMessageIcon.svg"
            width={16}
            height={16}
            alt="message"
            style={{
              filter:
                status === "error"
                  ? "brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(3932%) hue-rotate(352deg) brightness(91%) contrast(95%)"
                  : "none",
            }}
          />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}

export { Input };
