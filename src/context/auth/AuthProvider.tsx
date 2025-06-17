import { useState, useMemo } from "react";
import { WidgetAuthSDK } from "./WidgetAuthSDK";
import {
  type User,
  type AuthProviderType,
  AuthContext,
  type AuthContextType,
} from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
  authProvider?: AuthProviderType[];
  projectId: string;
}

export const AuthProvider = ({
  children,
  authProvider = ["email-password"],
  projectId,
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const sdk = useMemo(() => new WidgetAuthSDK(projectId), [projectId]);

  const value: AuthContextType = {
    user,
    setUser,
    authProvider,
    sdk,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
