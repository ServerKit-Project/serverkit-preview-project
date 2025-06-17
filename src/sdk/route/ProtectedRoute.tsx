import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "@/sdk/useAuth";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  enabled: string[];
  authAssetId: string | null;
  fallback?: ReactNode;
  children: ReactNode;
}

export const ProtectedRoute = ({
  enabled,
  authAssetId,
  fallback,
  children,
}: ProtectedRouteProps) => {
  const { sdk } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirectToLogin = () => {
    history.replace({
      pathname: "/login",
      state: { from: location },
    });
    return null;
  };

  // 로그인 체크
  if (!sdk.getAccessToken()) {
    return redirectToLogin();
  }

  // 권한 체크
  try {
    const hasRequiredRoles = enabled.every((roleId) =>
      sdk.isAuthorized(authAssetId, roleId)
    );

    if (!hasRequiredRoles) {
      if (fallback) {
        return <>{fallback}</>;
      }
      return redirectToLogin();
    }

    return <>{children}</>;
  } catch (error) {
    console.error("권한 확인 중 오류 발생:", error);
    return redirectToLogin();
  }
};
