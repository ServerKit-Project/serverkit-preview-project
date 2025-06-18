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

const StyledCard = styled(Card)`
  width: 350px;
`;

const StyledCardHeader = styled(CardHeader)`
  margin-bottom: 1rem;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 1.5rem;
`;

const StyledCardContent = styled(CardContent)`
  padding: 1rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const UserEmail = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0;
`;

const StyledCardFooter = styled(CardFooter)<{ $hasGap?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$hasGap ? "space-between" : "stretch")};
`;

const StyledButton = styled(Button)<{ $fullWidth?: boolean }>`
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
`;

export const Logout = () => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>계정 관리</StyledCardTitle>
        <CardDescription>현재 로그인된 상태입니다.</CardDescription>
      </StyledCardHeader>
      <StyledCardContent>
        <UserContainer>
          <UserAvatar>U</UserAvatar>
          <UserInfo>
            <UserName>사용자</UserName>
            <UserEmail>user@example.com</UserEmail>
          </UserInfo>
        </UserContainer>
      </StyledCardContent>
      <StyledCardFooter>
        <StyledButton variant="secondary" $fullWidth>
          로그아웃
        </StyledButton>
      </StyledCardFooter>
    </StyledCard>
  );
};
