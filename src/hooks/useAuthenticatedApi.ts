import { useMemo } from "react";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { useAuth } from "../context/auth/useAuth";

export const useAuthenticatedApi = (): AxiosInstance => {
  const { sdk, tokenRefresh } = useAuth();

  const authenticatedApi = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 토큰 리프레시 중인지 확인하는 플래그
    let isRefreshing = false;
    // 토큰 리프레시 대기 중인 요청들을 저장하는 배열
    let failedQueue: Array<{
      resolve: (value?: any) => void;
      reject: (error?: any) => void;
    }> = [];

    const processQueue = (error: any, token: string | null = null) => {
      failedQueue.forEach(({ resolve, reject }) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      });

      failedQueue = [];
    };

    // 요청 인터셉터 - 항상 최신 토큰 사용
    instance.interceptors.request.use(
      (config) => {
        const token = sdk.getAccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터 - 401 에러 처리
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (isRefreshing) {
            // 이미 토큰 리프레시가 진행 중이면 대기열에 추가
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then(() => {
                // 토큰 리프레시가 완료되면 원래 요청을 다시 시도
                const token = sdk.getAccessToken();
                if (token) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                return instance(originalRequest);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          }

          originalRequest._retry = true;
          isRefreshing = true;

          try {
            // 토큰 리프레시 시도
            await tokenRefresh();

            // 토큰 리프레시 성공
            const newToken = sdk.getAccessToken();
            processQueue(null, newToken);

            // 원래 요청에 새로운 토큰 설정
            if (newToken) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }

            // 원래 요청 다시 시도
            return instance(originalRequest);
          } catch (refreshError) {
            // 토큰 리프레시 실패 - 로그아웃 처리
            processQueue(refreshError, null);
            sdk.removeToken();
            window.location.href = "/login";
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }

        return Promise.reject(error);
      }
    );

    return instance;
  }, [sdk, tokenRefresh]);

  return authenticatedApi;
};
