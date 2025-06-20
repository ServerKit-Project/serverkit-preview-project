import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomeServerkit from "./pages/welcome-serverkit";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import { ProtectedRoute } from "@/sdk/route/ProtectedRoute";
/*PackageImport*/

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

function App() {
  return (
    <Container>
      <Routes>
        {/*PackageRoutes*/}

        <Route path="/" element={<WelcomeServerkit />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
