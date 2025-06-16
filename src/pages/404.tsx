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
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayish};
`;

const HomeLink = styled(Link)`
  margin-top: 1rem;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.primary};
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Description>
        The page you're looking for doesn't exist or has been moved.
      </Description>
      <HomeLink to="/">Back to Home</HomeLink>
    </Container>
  );
}
