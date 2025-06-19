import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
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
} from "@/components/complex/Signup";

export const SignupPreview: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      <StyledCard>
        <form onSubmit={handleSubmit}>
          <StyledCardHeader>
            <StyledCardTitle>회원가입</StyledCardTitle>
          </StyledCardHeader>

          <FormGrid>
            <FormGroup>
              <label htmlFor="username">사용자 이름</label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="사용자 이름을 입력하세요"
                  style={{
                    width: "100%",
                    padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.375rem",
                  }}
                />
                <User
                  size={18}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                  }}
                />
              </div>
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">이메일</label>
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  style={{
                    width: "100%",
                    padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.375rem",
                  }}
                />
                <Mail
                  size={18}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                  }}
                />
              </div>
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">비밀번호</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호를 입력하세요"
                  style={{
                    width: "100%",
                    padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.375rem",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "#9ca3af",
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </FormGroup>

            <CheckboxContainer>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />
              <label htmlFor="agreeToTerms">이용약관에 동의합니다</label>
            </CheckboxContainer>
          </FormGrid>

          <StyledCardFooter>
            <StyledButton type="submit" disabled={!formData.agreeToTerms}>
              가입하기
            </StyledButton>
            <FooterText>
              이미 계정이 있으신가요?{" "}
              <StyledLink as="a" href="#">
                로그인
              </StyledLink>
            </FooterText>
          </StyledCardFooter>
        </form>
      </StyledCard>
    </div>
  );
};
