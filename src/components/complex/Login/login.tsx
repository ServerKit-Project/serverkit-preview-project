import styled from "styled-components";
import {
  CardRoot,
  CardContentRoot,
  CardDescriptionRoot,
  CardFooterRoot,
  CardHeaderRoot,
  CardTitleRoot,
} from "../../primitive/Card/Card";
import { Button } from "../../primitive/Button/Button";
import { Input } from "../../primitive/Input/Input";
import { Text } from "../../primitive/Text/Text";
import { FormItemRoot, FormLabelRoot } from "../../primitive/Form/Form";
import {
  CheckboxInput,
  CheckboxBox,
  CheckboxLabel,
} from "../../primitive/Checkbox/Checkbox";

const StyledCard = styled(CardRoot)`
  width: 400px;
`;

const StyledCardHeader = styled(CardHeaderRoot)`
  margin-bottom: 1rem;
`;

const StyledCardTitle = styled(CardTitleRoot)`
  font-size: 1.5rem;
`;

const FormGrid = styled(CardContentRoot)`
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled(FormItemRoot)`
  display: grid;
  gap: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

const StyledCardFooter = styled(CardFooterRoot)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const FooterText = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const StyledLink = styled(Text)`
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
        <CardDescriptionRoot>
          계정에 로그인하여 서비스를 이용하세요.
        </CardDescriptionRoot>
      </StyledCardHeader>

      <FormGrid>
        <FormGroup>
          <FormLabelRoot htmlFor="email">이메일</FormLabelRoot>
          <Input id="email" type="email" placeholder="이메일을 입력하세요" />
        </FormGroup>

        <FormGroup>
          <FormLabelRoot htmlFor="password">비밀번호</FormLabelRoot>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </FormGroup>

        <CheckboxContainer>
          <CheckboxLabel htmlFor="remember">
            <CheckboxInput id="remember" />
            <CheckboxBox />
            로그인 상태 유지
          </CheckboxLabel>
        </CheckboxContainer>
      </FormGrid>

      <StyledCardFooter>
        <StyledButton>로그인</StyledButton>
        <FooterText>
          계정이 없으신가요?{" "}
          <StyledLink as="a" href="#">
            회원가입
          </StyledLink>
        </FooterText>
      </StyledCardFooter>
    </StyledCard>
  );
};
