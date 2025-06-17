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

export const Signup = () => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>회원가입</StyledCardTitle>
        <CardDescription>새 계정을 만들어 서비스를 시작하세요.</CardDescription>
      </StyledCardHeader>

      <FormGrid>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input id="name" type="text" placeholder="이름을 입력하세요" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" placeholder="이메일을 입력하세요" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
          />
        </FormGroup>

        <CheckboxContainer>
          <input type="checkbox" id="terms" />
          <Label htmlFor="terms">
            <StyledLink href="#">이용약관</StyledLink>에 동의합니다
          </Label>
        </CheckboxContainer>
      </FormGrid>

      <StyledCardFooter>
        <StyledButton>회원가입</StyledButton>
        <FooterText>
          이미 계정이 있으신가요? <StyledLink href="#">로그인</StyledLink>
        </FooterText>
      </StyledCardFooter>
    </StyledCard>
  );
};
