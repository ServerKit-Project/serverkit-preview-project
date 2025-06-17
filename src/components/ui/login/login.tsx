import { useState } from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../Card";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Label } from "../label";

const StyledCard = styled(Card)`
  width: 400px;
`;

const StyledCardHeader = styled(CardHeader)`
  margin-bottom: 1rem;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 1.5rem;
`;

const FormGrid = styled(CardContent)`
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCardFooter = styled(CardFooter)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const FooterText = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export interface LoginProps {
  onLogin?: (email: string, password: string) => Promise<void>;
  onRegister?: () => void;
}

export const Login = ({ onLogin, onRegister }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;

    setIsLoading(true);
    try {
      if (onLogin) {
        await onLogin(email, password);
      } else {
        // 기본 로그인 로직
        console.log("로그인 시도:", { email, password });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("로그인 성공");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>로그인</StyledCardTitle>
        <CardDescription>
          계정에 로그인하여 서비스를 이용하세요.
        </CardDescription>
      </StyledCardHeader>

      <FormGrid>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormGroup>

        <CheckboxContainer>
          <input type="checkbox" id="remember" disabled={isLoading} />
          <Label htmlFor="remember">로그인 상태 유지</Label>
        </CheckboxContainer>
      </FormGrid>

      <StyledCardFooter>
        <StyledButton
          onClick={handleLogin}
          disabled={isLoading || !email || !password}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </StyledButton>
        <FooterText>
          계정이 없으신가요?{" "}
          <StyledLink href="#" onClick={onRegister}>
            회원가입
          </StyledLink>
        </FooterText>
      </StyledCardFooter>
    </StyledCard>
  );
};
