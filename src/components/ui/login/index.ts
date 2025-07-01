import styled from "styled-components";
import {
  CardRoot,
  CardContentRoot,
  CardFooterRoot,
  CardHeaderRoot,
  CardTitleRoot,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { FormItemRoot } from "@/components/ui/form";

export const StyledCard = styled(CardRoot)`
  width: 400px;
`;

export const StyledCardHeader = styled(CardHeaderRoot)`
  margin-bottom: 1rem;
`;

export const StyledCardTitle = styled(CardTitleRoot)`
  font-size: 1.5rem;
`;

export const FormGrid = styled(CardContentRoot)`
  display: grid;
  gap: 1rem;
`;

export const FormGroup = styled(FormItemRoot)`
  display: grid;
  gap: 0.5rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

export const StyledCardFooter = styled(CardFooterRoot)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const FooterText = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledLink = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
