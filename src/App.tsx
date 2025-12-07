import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/Navbar.component";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "./components/custome.linear.progress/CustomLinearProgress.component";
//import Home from "./pages/home/home.page";

const Home = lazy(() => import("./pages/home/home.page"));
const Companies = lazy(() => import("./pages/companies/companies.page"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies">
              <Route index element={<Companies />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
