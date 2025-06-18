import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomeServerkit from "./pages/welcome-serverkit";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import { ProtectedRoute } from "@/sdk/route/ProtectedRoute";
{
  /*PackageImport*/
}

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
    <Container>
      <Main>
        <Routes>
          <Route path="/" element={<WelcomeServerkit />} />
          {/*PackageRoutes*/}

          <Route path="/500" element={<ServerError />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                enabled={["role-id"]}
                authAssetId="auth-asset-id"
                fallback={<div>Access Denied</div>}
              >
                <div>Admin Dashboard</div>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;
