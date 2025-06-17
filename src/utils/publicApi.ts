import axios from "axios";

/**
 * 인증이 필요하지 않은 공개 API 호출을 위한 axios 인스턴스
 * 사용 예시:
 * - 로그인/회원가입
 * - 공개 데이터 조회
 * - 헬스체크, 메타데이터 등
 */
export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
