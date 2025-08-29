import { formatDistanceToNow, isValid } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * 미래 날짜를 한국어 형식으로 포맷팅합니다.
 *
 * @param date - 포맷팅할 미래 Date 객체
 * @returns 한국어 날짜 문자열 (예: "2025.01.15")
 */
function formatFutureDate(date: Date): string {
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .replace(/\./g, ".")
    .replace(/\s/g, "");
}

/**
 * 7일 미만의 최근 날짜를 상대 시간으로 포맷팅합니다.
 *
 * @param date - 포맷팅할 Date 객체
 * @returns date-fns를 사용한 한국어 상대 시간 (예: "5분 전", "3일 전")
 */
function formatRecentDate(date: Date): string {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ko,
  });
}

/**
 * 같은 해의 날짜를 간단한 형식으로 포맷팅합니다.
 *
 * @param date - 포맷팅할 Date 객체
 * @returns "n월 n일" 형식 문자열 (예: "3월 15일")
 */
function formatSameYearDate(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
}

/**
 * 다른 해의 날짜를 전체 형식으로 포맷팅합니다.
 *
 * @param date - 포맷팅할 Date 객체
 * @returns "yyyy.mm.dd" 형식 문자열 (예: "2023.03.15")
 */
function formatDifferentYearDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

/**
 * 주어진 날짜를 상대적 시간 형식으로 포맷팅합니다.
 *
 * @param date - Date 객체 또는 날짜 문자열
 * @returns 포맷팅된 상대 시간 문자열
 *
 * @example
 * formatRelativeDate(new Date()) // "방금"
 * formatRelativeDate(subMinutes(new Date(), 5)) // "5분 전"
 * formatRelativeDate(subHours(new Date(), 2)) // "2시간 전"
 */
export function formatRelativeDate(date: Date | string): string {
  const targetDate = typeof date === "string" ? new Date(date) : date;

  if (!isValid(targetDate)) {
    return "날짜 오류";
  }

  const now = new Date();
  const diffInMs = now.getTime() - targetDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMs < 0) {
    return formatFutureDate(targetDate);
  }

  if (diffInDays < 7) {
    return formatRecentDate(targetDate);
  }

  const currentYear = now.getFullYear();
  const targetYear = targetDate.getFullYear();

  if (currentYear === targetYear) {
    return formatSameYearDate(targetDate);
  }

  return formatDifferentYearDate(targetDate);
}

/**
 * 초를 동적으로 mm:ss 또는 hh:mm:ss 형식으로 변환합니다.
 * duration이 1시간(3600초) 이상이면 hh:mm:ss, 미만이면 mm:ss 형식을 사용합니다.
 *
 * @param seconds - 변환할 초
 * @param duration - 전체 재생 시간 (초), 형식 결정에 사용
 * @returns 동적 시간 형식 문자열
 *
 * @example
 * formatPlaybackTime(90, 300) // "01:30" (5분 영상)
 * formatPlaybackTime(90, 3661) // "00:01:30" (1시간+ 영상)
 * formatPlaybackTime(3661, 7200) // "01:01:01" (2시간 영상)
 */
export function formatPlaybackTime(
  seconds: number,
  duration: number = seconds
): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  // duration이 1시간 이상이면 hh:mm:ss 형식 사용
  if (duration >= 3600) {
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  // 1시간 미만이면 mm:ss 형식 사용
  const totalMins = Math.floor(seconds / 60);
  return `${totalMins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

/**
 * 주어진 시간 문자열에 따라 적절한 너비 클래스를 반환합니다.
 * @param timeString - 시간 문자열 (mm:ss 또는 hh:mm:ss 형식)
 * @returns 적절한 너비 클래스
 *
 * @example
 * getTimeDisplayWidth("05:30")
 * getTimeDisplayWidth("01:05:30")
 */
export function getTimeDisplayWidth(timeString: string): string {
  const parts = timeString.split(":");
  return parts.length === 3 ? "w-16" : "w-12";
}
