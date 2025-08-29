import type { LanguageOption } from "./Select.types";

export const LANGUAGE_OPTIONS: LanguageOption[] = [
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
