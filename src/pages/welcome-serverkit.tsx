import styled from "styled-components";
import logo from "@/assets/Simbol.png";

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.deepNavy};
  color: ${({ theme }) => theme.colors.text.white};
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
  display: grid;
  gap: 3rem;
`;

const Logo = styled.img`
  width: 8rem;
  aspect-ratio: 1;
  object-fit: contain;
  margin: 0 auto;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TextContent = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: bold;
  letter-spacing: -0.025em;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fontFamily.pretendard};
`;

const GreenSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
`;

function WelcomeServerkit() {
  return (
    <Container>
      <Content>
        <Inner>
          <Logo src={logo} alt="ServerKit" />
          <TextContent>
            <Title>
              Welcome to <GreenSpan>ServerKit</GreenSpan>
            </Title>
            <Subtitle>From Diagram to Full-stack App</Subtitle>
          </TextContent>
        </Inner>
      </Content>
    </Container>
  );
}

export default WelcomeServerkit;
