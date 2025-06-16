import WelcomeServerkit from "./pages/welcome-serverkit";
import { AuthProvider } from "./context/auth/AuthProvider";

function App() {
  return (
    <AuthProvider projectId="1234567890" authProvider={["email-password"]}>
      <WelcomeServerkit />
    </AuthProvider>
  );
}

export default App;
