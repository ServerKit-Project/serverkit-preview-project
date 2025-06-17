import { Navigate, useLocation, Route } from "react-router-dom";
import type { PathRouteProps } from "react-router-dom";
import { useAuth } from "@/sdk/useAuth";
import { useMemo } from "react";

interface ProtectedRouteProps extends Omit<PathRouteProps, "element"> {
  enabled: string[]; // roleId
  authAssetId: string | null;
  component: React.ComponentType<object>;
  fallback?: React.ReactNode;
}

export const ProtectedRoute = ({
  authAssetId,
  enabled,
  component: Component,
  fallback,
  ...routeProps
}: ProtectedRouteProps) => {
  const { sdk } = useAuth();
  const location = useLocation();

  const ProtectedElement = useMemo(() => {
    return () => {
      // 로그인 체크
      if (!sdk.getAccessToken()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
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
          return <Navigate to="/login" state={{ from: location }} replace />;
        }

        return <Component />;
      } catch (error) {
        console.error("권한 확인 중 오류 발생:", error);
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    };
  }, [sdk, Component, location, enabled, authAssetId, fallback]);

  return <Route {...routeProps} element={<ProtectedElement />} />;
};
