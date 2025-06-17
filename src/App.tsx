import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomeServerkit from "./pages/welcome-serverkit";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import { ProtectedRoute } from "@/sdk/route/ProtectedRoute";

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
        <Switch>
          <Route exact path="/" component={WelcomeServerkit} />
          {/*PackageRoutes*/}
          <Route path="/500" component={ServerError} />
          <Route path="*" component={NotFound} />
          <Route
            path="/admin"
            render={() => (
              <ProtectedRoute
                enabled={["role-id"]}
                authAssetId="auth-asset-id"
                fallback={<div>Access Denied</div>}
              >
                <div>Admin Dashboard</div>
              </ProtectedRoute>
            )}
          />
        </Switch>
      </Main>
    </Container>
  );
}

export default App;
