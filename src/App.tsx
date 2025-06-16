import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AuthProvider } from "./context/auth/AuthProvider";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.deepNavy};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

function App() {
  return (
    <AuthProvider projectId="1234567890" authProvider={["email-password"]}>
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </AuthProvider>
  );
}

export default App;
