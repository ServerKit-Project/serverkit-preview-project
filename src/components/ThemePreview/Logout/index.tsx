import { useState } from "react";
import { LogOut } from "lucide-react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardContent,
  UserContainer,
  UserAvatar,
  UserInfo,
  UserName,
  UserEmail,
  StyledCardFooter,
  StyledButton,
} from "@/components/complex/Logout";

export const LogoutPreview = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    // 로그아웃 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("로그아웃되었습니다.");
  };

  const handleCancel = () => {
    alert("로그아웃이 취소되었습니다.");
  };

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>로그아웃</StyledCardTitle>
      </StyledCardHeader>

      <StyledCardContent>
        <UserContainer>
          <UserAvatar>KD</UserAvatar>
          <UserInfo>
            <UserName>김도현</UserName>
            <UserEmail>dohyun.kim@example.com</UserEmail>
          </UserInfo>
        </UserContainer>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p style={{ margin: "0 0 0.5rem 0", color: "#4A5568" }}>
            정말 로그아웃 하시겠습니까?
          </p>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#718096" }}>
            로그아웃하면 다시 로그인해야 합니다.
          </p>
        </div>
      </StyledCardContent>

      <StyledCardFooter $hasGap>
        <StyledButton
          variant="secondary"
          onClick={handleCancel}
          disabled={isLoading}
        >
          취소
        </StyledButton>
        <StyledButton onClick={handleLogout} disabled={isLoading}>
          {isLoading ? (
            "로그아웃 중..."
          ) : (
            <>
              <LogOut size={18} style={{ marginRight: "0.5rem" }} />
              로그아웃
            </>
          )}
        </StyledButton>
      </StyledCardFooter>
    </StyledCard>
  );
};
