import { Routes, Route } from "react-router-dom";
import WelcomeServerkit from "./pages/welcome-serverkit";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import "./components/globals.css";

/*PackageImport*/
/*PackageImport start*/
/*PackageImport end*/

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Routes>
        {/*PackageRoutes*/}

        {/*PackageRoutes start*/}

        {/*PackageRoutes end*/}

        <Route path="/" element={<WelcomeServerkit />} />

        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
