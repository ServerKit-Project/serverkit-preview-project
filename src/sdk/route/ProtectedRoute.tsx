import { Navigate, useLocation, Route } from "react-router-dom";
import type { PathRouteProps } from "react-router-dom";
import { useAuth } from "@/context/auth/useAuth";

interface ProtectedRouteProps extends Omit<PathRouteProps, "element"> {
  enabled: string[];
  component: React.ComponentType<object>;
}

export const ProtectedRoute = ({
  enabled,
  component: Component,
  ...routeProps
}: ProtectedRouteProps) => {
  const { sdk } = useAuth();
  const location = useLocation();

  const ProtectedElement = () => {
    const hasRequiredRoles = enabled.every((role) => sdk.hasRole(role));

    if (!hasRequiredRoles) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Component />;
  };

  return <Route {...routeProps} element={<ProtectedElement />} />;
};
