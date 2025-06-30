import styled from "styled-components";
import {
  CardContentRoot,
  CardFooterRoot,
  CardHeaderRoot,
  CardTitleRoot,
  CardRoot,
} from "@/components/primitive/Card/Card";
import { Button } from "@/components/primitive/Button/Button";

export const StyledCard = styled(CardRoot)`
  width: 350px;
`;

export const StyledCardHeader = styled(CardHeaderRoot)`
  margin-bottom: 1rem;
`;

export const StyledCardTitle = styled(CardTitleRoot)`
  font-size: 1.5rem;
`;

export const StyledCardContent = styled(CardContentRoot)`
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

export const StyledCardFooter = styled(CardFooterRoot)<{ $hasGap?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$hasGap ? "space-between" : "stretch")};
`;

export const StyledButton = styled(Button)<{ $fullWidth?: boolean }>`
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
`;
