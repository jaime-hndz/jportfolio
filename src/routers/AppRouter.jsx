import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { ProjectsScreen } from "../screens/ProjectsScreen";


export const AppRouter = () => {
    return (
      <>
        <Router>
          <Routes>
              <Route element={<HomeScreen />} path="/" />
              <Route element={<AboutScreen />} path="/about" />
              <Route element={<ProjectsScreen />} path="/projects" />
          </Routes>
        </Router>
      </>
    );
  };