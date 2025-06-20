import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.pureWhite};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.pureWhite};
`;

const HomeLink = styled(Link)`
  margin-top: 1rem;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.primary};
  }
`;

export default function ServerError() {
  return (
    <Container>
      <Title>500</Title>
      <Subtitle>Server Error</Subtitle>
      <Description>
        A temporary server error has occurred. Please try again later.
      </Description>
      <HomeLink to="/">Back to Home</HomeLink>
    </Container>
  );
}
