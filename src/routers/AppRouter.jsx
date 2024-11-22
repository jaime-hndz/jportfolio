import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PortfolioScreen } from "../screens/PortfolioScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { ProjectsScreen } from "../screens/ProjectsScreen";


export const AppRouter = () => {
    return (
      <>
        <Router>
          <Routes>
              <Route element={<PortfolioScreen />} path="/" />
              <Route element={<AboutScreen />} path="/about" />
              <Route element={<ProjectsScreen />} path="/projects" />
          </Routes>
        </Router>
      </>
    );
  };