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

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface SignupProps {
  onSignup?: (data: Omit<SignupFormData, "confirmPassword">) => Promise<void>;
  onLogin?: () => void;
  onTermsClick?: () => void;
}

export const Signup = ({ onSignup, onLogin, onTermsClick }: SignupProps) => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<SignupFormData> = {};

    if (!formData.name) newErrors.name = "이름을 입력해주세요";
    if (!formData.email) newErrors.email = "이메일을 입력해주세요";
    if (!formData.password) newErrors.password = "비밀번호를 입력해주세요";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다";
    }
    if (!formData.terms) newErrors.terms = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      if (onSignup) {
        const { ...signupData } = formData;
        await onSignup(signupData);
      } else {
        // 기본 회원가입 로직
        console.log("회원가입 시도:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("회원가입 성공");
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    field: keyof SignupFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>회원가입</StyledCardTitle>
        <CardDescription>새 계정을 만들어 서비스를 시작하세요.</CardDescription>
      </StyledCardHeader>

      <FormGrid>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            type="text"
            placeholder="이름을 입력하세요"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            disabled={isLoading}
            error={!!errors.name}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={isLoading}
            error={!!errors.email}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            disabled={isLoading}
            error={!!errors.password}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            disabled={isLoading}
            error={!!errors.confirmPassword}
          />
        </FormGroup>

        <CheckboxContainer>
          <input
            type="checkbox"
            id="terms"
            checked={formData.terms}
            onChange={(e) => handleInputChange("terms", e.target.checked)}
            disabled={isLoading}
          />
          <Label htmlFor="terms" onClick={onTermsClick}>
            <StyledLink href="#" onClick={onTermsClick}>
              이용약관
            </StyledLink>
            에 동의합니다
          </Label>
        </CheckboxContainer>
      </FormGrid>

      <StyledCardFooter>
        <StyledButton onClick={handleSignup} disabled={isLoading}>
          {isLoading ? "처리 중..." : "회원가입"}
        </StyledButton>
        <FooterText>
          이미 계정이 있으신가요?{" "}
          <StyledLink href="#" onClick={onLogin}>
            로그인
          </StyledLink>
        </FooterText>
      </StyledCardFooter>
    </StyledCard>
  );
};
