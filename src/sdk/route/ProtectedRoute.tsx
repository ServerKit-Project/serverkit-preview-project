import { Navigate, useLocation } from "react-router-dom";
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

  // 로그인 체크
  if (!sdk.getAccessToken()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 권한 체크
  try {
    const hasRequiredRoles = sdk.isAuthorized(authAssetId, enabled);

    if (!hasRequiredRoles) {
      if (fallback) {
        return <>{fallback}</>;
      }
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
  } catch (error) {
    console.error("권한 확인 중 오류 발생:", error);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
