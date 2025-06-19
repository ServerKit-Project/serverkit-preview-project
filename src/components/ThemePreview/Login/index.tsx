import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  FormGrid,
  FormGroup,
  CheckboxContainer,
  StyledCardFooter,
  StyledButton,
  FooterText,
  StyledLink,
} from "@/components/complex/Login";
import { Input } from "@/components/primitive/Input/Input";
import { FormLabelRoot } from "@/components/primitive/Form/Form";

export const LoginPreview = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 로그인 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("로그인 시도:", formData);
    setIsLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledCard>
      <form onSubmit={handleSubmit}>
        <StyledCardHeader>
          <StyledCardTitle>로그인</StyledCardTitle>
        </StyledCardHeader>

        <FormGrid>
          <FormGroup>
            <FormLabelRoot htmlFor="email">이메일</FormLabelRoot>
            <Input
              id="email"
              type="email"
              placeholder="이메일 주소를 입력하세요"
              value={formData.email}
              onChange={handleChange("email")}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabelRoot htmlFor="password">비밀번호</FormLabelRoot>
            <div style={{ position: "relative" }}>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange("password")}
                required
                style={{ paddingRight: "2.5rem" }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "0.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  padding: "0.25rem",
                  cursor: "pointer",
                  color: "#718096",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </FormGroup>

          <CheckboxContainer>
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange("rememberMe")}
            />
            <FormLabelRoot
              htmlFor="rememberMe"
              style={{ cursor: "pointer", marginBottom: 0 }}
            >
              로그인 상태 유지
            </FormLabelRoot>
          </CheckboxContainer>
        </FormGrid>

        <StyledCardFooter>
          <StyledButton type="submit" disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </StyledButton>

          <FooterText>
            계정이 없으신가요?{" "}
            <StyledLink as="a" href="#" style={{ display: "inline" }}>
              회원가입
            </StyledLink>
          </FooterText>

          <FooterText>
            <StyledLink as="a" href="#" style={{ display: "inline" }}>
              비밀번호를 잊으셨나요?
            </StyledLink>
          </FooterText>
        </StyledCardFooter>
      </form>
    </StyledCard>
  );
};
