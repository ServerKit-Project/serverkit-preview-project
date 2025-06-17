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

export const Login = () => {
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

        <CheckboxContainer>
          <input type="checkbox" id="remember" />
          <Label htmlFor="remember">로그인 상태 유지</Label>
        </CheckboxContainer>
      </FormGrid>

      <StyledCardFooter>
        <StyledButton>로그인</StyledButton>
        <FooterText>
          계정이 없으신가요? <StyledLink href="#">회원가입</StyledLink>
        </FooterText>
      </StyledCardFooter>
    </StyledCard>
  );
};
