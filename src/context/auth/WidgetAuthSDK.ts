import { jwtDecode } from "jwt-decode";

export type TokenPayload = {
  accessToken: string;
  refreshToken: string | null;
};

// Context로 만들어
export class WidgetAuthSDK {
  private storageKey: string;

  constructor(projectId: string) {
    this.storageKey = `svk-${projectId}-session`;
  }

  private getToken(): TokenPayload | null {
    const token = localStorage.getItem(this.storageKey);
    if (!token) {
      return null;
    }

    const { accessToken, refreshToken } = JSON.parse(token) as TokenPayload;

    return { accessToken, refreshToken };
  }

  public getAccessToken(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return token.accessToken;
  }

  public getRefreshToken(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return token.refreshToken;
  }

  public setToken(token: TokenPayload) {
    localStorage.setItem(this.storageKey, JSON.stringify(token));
  }

  public removeToken() {
    localStorage.removeItem(this.storageKey);
  }

  public hasRole(role: string): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const decoded = jwtDecode<{ roles: string[] }>(token.accessToken);

    if (decoded.roles && Array.isArray(decoded.roles)) {
      return decoded.roles.includes(role);
    }

    return false;
  }
}
