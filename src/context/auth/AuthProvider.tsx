import { useState, useEffect, useMemo } from "react";
import { WidgetAuthSDK, type TokenPayload } from "./WidgetAuthSDK";
import { type User, type AuthProviderType, AuthContext } from "./AuthContext";
import { publicApi } from "../../utils/publicApi";

interface AuthProviderProps {
  children: React.ReactNode;
  authProvider?: AuthProviderType[];
  storage?: Storage;
  projectId: string;
}

interface AuthContextType {
  user: User | null;
  loginWithEmailPassword: (email: string, password: string) => Promise<User>;
  signupWithEmailPassword: (
    email: string,
    password: string,
    data: Omit<User, "id">
  ) => Promise<User>;
  logout: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
  authProvider: AuthProviderType[];
  storageType: string;
  tokenRefresh: () => Promise<void>;
  sdk: WidgetAuthSDK;
}

const loginWithEmailPasswordAPI = async (
  email: string,
  password: string
): Promise<{ user: User; token: TokenPayload }> => {
  // 예시: publicApi를 사용한 로그인 API 호출
  const response = await publicApi.post("/auth/login", {
    email,
    password,
  });

  return response.data;

  // 현재는 구현되지 않음
  // throw new Error("API not implemented");
};

const signupWithEmailPasswordAPI = async (
  email: string,
  password: string,
  data: Omit<User, "id">
): Promise<{ user: User; token: TokenPayload }> => {
  // 예시: publicApi를 사용한 회원가입 API 호출
  const response = await publicApi.post("/auth/signup", {
    email,
    password,
    ...data,
  });

  return response.data;

  // 현재는 구현되지 않음
  // throw new Error("API not implemented");
};

const logoutAPI = async (): Promise<void> => {
  // 실제 API 호출로 대체해야 함
  console.log("Logout API called");
};

const tokenRefreshAPI = async (
  refreshToken: string
): Promise<{ token: TokenPayload }> => {
  // publicApi를 사용한 토큰 리프레시 API 호출
  const response = await publicApi.post("/auth/refresh", {
    refreshToken,
  });

  return response.data;
};

const getUserInfoAPI = async (accessToken: string): Promise<User> => {
  throw new Error("API not implemented");
};

export const AuthProvider = ({
  children,
  authProvider = ["email-password"],
  storage = localStorage,
  projectId,
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const sdk = useMemo(() => new WidgetAuthSDK(projectId), [projectId]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = sdk.getAccessToken();
        if (token) {
          try {
            const user = await getUserInfoAPI(token);
            setUser(user);
          } catch (error) {
            console.error("Failed to parse user data:", error);
            sdk.removeToken();
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [sdk]);

  const loginWithEmailPassword = async (
    email: string,
    password: string
  ): Promise<User> => {
    setLoading(true);
    try {
      const result = await loginWithEmailPasswordAPI(email, password);
      setUser(result.user);
      sdk.setToken(result.token);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const signupWithEmailPassword = async (
    email: string,
    password: string,
    data: Omit<User, "id">
  ): Promise<User> => {
    setLoading(true);
    try {
      const result = await signupWithEmailPasswordAPI(email, password, data);
      setUser(result.user);
      sdk.setToken(result.token);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await logoutAPI();
    } catch (error) {
      console.error("Server logout failed:", error);
    } finally {
      setUser(null);
      sdk.removeToken();
    }
  };

  const tokenRefresh = async (): Promise<void> => {
    try {
      const refreshToken = sdk.getRefreshToken();

      // refreshToken이 없으면 로그아웃 처리
      if (!refreshToken) {
        console.warn("No refresh token available, logging out");
        await logout();
        throw new Error("No refresh token available");
      }

      // 토큰 갱신 API 호출
      const result = await tokenRefreshAPI(refreshToken);
      sdk.setToken(result.token);

      // 토큰 갱신 성공 후 사용자 정보도 다시 가져오기
      try {
        const user = await getUserInfoAPI(result.token.accessToken);
        setUser(user);
      } catch (userError) {
        console.error(
          "Failed to fetch user info after token refresh:",
          userError
        );
      }
    } catch (error) {
      console.error("Token refresh failed:", error);

      // 토큰 갱신이 실패하면 현재 세션을 무효화하고 로그아웃
      setUser(null);
      sdk.removeToken();

      // 에러를 다시 throw하여 호출하는 곳에서 처리할 수 있도록 함
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loginWithEmailPassword,
    signupWithEmailPassword,
    tokenRefresh,
    logout,
    loading,
    isAuthenticated: !!user,
    authProvider,
    storageType: storage === localStorage ? "localStorage" : "sessionStorage",
    sdk,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
