import { createContext } from "react";
import { WidgetAuthSDK } from "./WidgetAuthSDK";

export interface User {
  id: string;
  email: string;
  name: string;
  roles?: string[];
}

export type AuthProviderType = "email-password" | "google" | "apple" | "kakao";

export interface AuthContextType {
  user: User | null;
  loginWithEmailPassword: (email: string, password: string) => Promise<User>;
  signupWithEmailPassword: (
    email: string,
    password: string,
    name: string
  ) => Promise<User>;
  logout: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
  authProvider: AuthProviderType[];
  storageType: string;
  tokenRefresh: () => Promise<void>;
  sdk: WidgetAuthSDK;
}

export const AuthContext = createContext<AuthContextType | null>(null);
