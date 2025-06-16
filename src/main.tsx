import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import "./theme/index.css";
// 페이지 컴포넌트들 임포트
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import WelcomeServerkit from "./pages/welcome-serverkit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <WelcomeServerkit />,
      },
      {
        path: "500",
        element: <ServerError />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);
