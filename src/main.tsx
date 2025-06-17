import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./theme/index.css";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider projectId="1234567890" authProvider={["email-password"]}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </>
);
