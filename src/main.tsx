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
      <AuthProvider
        projectId={import.meta.env.VITE_PROJECT_ID}
        authProvider={import.meta.env.VITE_AUTH_PROVIDER.split(",")}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </>
);
