import { describe, it, expect, beforeEach, vi } from "vitest";
import { WidgetAuthSDK } from "../src/context/auth/WidgetAuthSDK";

// JWT 토큰을 생성하는 헬퍼 함수 (테스트용)
function createMockJWT(payload: any): string {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payloadStr = btoa(JSON.stringify(payload));
  const signature = "mock-signature";
  return `${header}.${payloadStr}.${signature}`;
}

describe("WidgetAuthSDK", () => {
  let authSDK: WidgetAuthSDK;
  const projectId = "test-project";
  const storageKey = `svk-${projectId}-session`;

  beforeEach(() => {
    // localStorage 초기화
    localStorage.clear();
    authSDK = new WidgetAuthSDK(projectId);
  });

  describe("isAuthorized", () => {
    it("authAssetId가 null일 때는 항상 true를 반환해야 함", () => {
      // Arrange
      const authAssetId = null;
      const roles = ["admin", "user"];

      // Act
      const result = authSDK.isAuthorized(authAssetId, roles);

      // Assert
      expect(result).toBe(true);
    });

    it("토큰이 없을 때는 false를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const roles = ["admin"];

      // Act
      const result = authSDK.isAuthorized(authAssetId, roles);

      // Assert
      expect(result).toBe(false);
    });

    it("토큰의 authAsset이 다를 때는 false를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const roles = ["admin"];

      const tokenPayload = {
        authAsset: "different-asset",
        roles: ["admin"],
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, roles);

      // Assert
      expect(result).toBe(false);
    });

    it("사용자 역할이 요구되는 역할과 일치할 때 true를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin"];

      const tokenPayload = {
        authAsset: "asset-123",
        roles: ["admin", "user"],
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(true);
    });

    it("사용자 역할이 요구되는 역할과 일치하지 않을 때 false를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin"];

      const tokenPayload = {
        authAsset: "asset-123",
        roles: ["user"],
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(false);
    });

    it("사용자가 여러 역할 중 하나라도 가지고 있으면 true를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin", "moderator"];

      const tokenPayload = {
        authAsset: "asset-123",
        roles: ["user", "moderator"],
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(true);
    });

    it("토큰의 roles가 배열이 아닐 때 false를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin"];

      const tokenPayload = {
        authAsset: "asset-123",
        roles: "not-an-array", // 배열이 아닌 값
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(false);
    });

    it("토큰의 roles가 undefined일 때 false를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin"];

      const tokenPayload = {
        authAsset: "asset-123",
        // roles 필드가 없음
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(false);
    });

    it("빈 roles 배열일 때 false를 반환해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin"];

      const tokenPayload = {
        authAsset: "asset-123",
        roles: [], // 빈 배열
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(false);
    });

    it("잘못된 JWT 토큰일 때 오류가 발생해야 함", () => {
      // Arrange
      const authAssetId = "asset-123";
      const requiredRoles = ["admin"];

      authSDK.setToken({
        accessToken: "invalid-jwt-token",
        refreshToken: null,
      });

      // Act & Assert
      expect(() => {
        authSDK.isAuthorized(authAssetId, requiredRoles);
      }).toThrow();
    });

    it("복잡한 시나리오: 다중 역할과 정확한 authAsset 매칭", () => {
      // Arrange
      const authAssetId = "complex-asset-456";
      const requiredRoles = ["editor", "viewer", "contributor"];

      const tokenPayload = {
        authAsset: "complex-asset-456",
        roles: ["contributor", "guest"],
      };
      const accessToken = createMockJWT(tokenPayload);

      authSDK.setToken({
        accessToken,
        refreshToken: null,
      });

      // Act
      const result = authSDK.isAuthorized(authAssetId, requiredRoles);

      // Assert
      expect(result).toBe(true);
    });
  });
});
