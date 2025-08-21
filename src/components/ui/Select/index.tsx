"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/base/select";

export interface LanguageOption {
  value: string;
  label: string;
  localLabel: string;
  isBeta?: boolean;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    value: "ko",
    label: "한국어",
    localLabel: "한국어",
    isBeta: false,
  },
  {
    value: "en",
    label: "English",
    localLabel: "영어",
    isBeta: true,
  },
  {
    value: "ja",
    label: "日本語",
    localLabel: "일본어",
    isBeta: true,
  },
];

export interface LanguageSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function LanguageSelect({
  value,
  onValueChange,
  className,
}: LanguageSelectProps) {
  const selectedOption = LANGUAGE_OPTIONS.find(
    (option) => option.value === value
  );

  return (
    <div className={className}>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue>
            {selectedOption ? selectedOption.label : "언어를 선택하세요"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {LANGUAGE_OPTIONS.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="relative"
            >
              <div className="flex-1">
                <div className="text-body-regular">{option.label}</div>
                <div className="text-subbody-regular">{option.localLabel}</div>
              </div>
              {option.isBeta && value !== option.value && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-subbody-regular">
                  Beta
                </span>
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
