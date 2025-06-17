import { createContext } from "react";
import { WidgetAuthSDK } from "./WidgetAuthSDK";

export interface User {
  id: string;
  name: string;
}

export type AuthProviderType = "email-password" | "google" | "apple" | "kakao";
export type StorageType = "localStorage" | "sessionStorage" | "cookie";

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  authProvider: AuthProviderType[];
  sdk: WidgetAuthSDK;
}

export const AuthContext = createContext<AuthContextType | null>(null);
