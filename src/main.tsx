import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import { MediaProvider } from "./context/media";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")!).render(
  <>
    <AuthProvider projectId={import.meta.env.VITE_PROJECT_ID}>
      <I18nextProvider i18n={i18n}>
        <MediaProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MediaProvider>
      </I18nextProvider>
    </AuthProvider>
  </>
);
