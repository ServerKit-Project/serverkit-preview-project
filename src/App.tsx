import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomeServerkit from "./pages/welcome-serverkit";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import { ProtectedRoute } from "@/sdk/route/ProtectedRoute";
/*PackageImport*/

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text.white};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

function App() {
  return (
    <Container>
      <Main>
        <Routes>
          {/*PackageRoutes*/}

          <Route path="/" element={<WelcomeServerkit />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;
