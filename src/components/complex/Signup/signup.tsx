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

export const CheckboxContainer = styled.div`
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

export const Signup = () => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>회원가입</StyledCardTitle>
        <CardDescriptionRoot>
          새 계정을 만들어 서비스를 시작하세요.
        </CardDescriptionRoot>
      </StyledCardHeader>

      <FormGrid>
        <FormGroup>
          <FormLabelRoot htmlFor="name">이름</FormLabelRoot>
          <Input id="name" type="text" placeholder="이름을 입력하세요" />
        </FormGroup>

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

        <FormGroup>
          <FormLabelRoot htmlFor="confirmPassword">비밀번호 확인</FormLabelRoot>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
          />
        </FormGroup>

        <CheckboxContainer>
          <CheckboxLabel htmlFor="terms">
            <CheckboxInput id="terms" />
            <CheckboxBox />
            <StyledLink as="a" href="#">
              이용약관
            </StyledLink>
            에 동의합니다
          </CheckboxLabel>
        </CheckboxContainer>
      </FormGrid>

      <StyledCardFooter>
        <StyledButton>회원가입</StyledButton>
        <FooterText>
          이미 계정이 있으신가요?{" "}
          <StyledLink as="a" href="#">
            로그인
          </StyledLink>
        </FooterText>
      </StyledCardFooter>
    </StyledCard>
  );
};
