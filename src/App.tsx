import "./styles/index.scss";
import { Component } from "solid-js";
import ContactsPage from "./components/pages/ContactsPage";
import ResumeBox from "./components/pages/ResumeBox";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import TestPage from "./components/pages/TestPage";
import { Navigate, Route, Router, Routes } from "@solidjs/router";

const App: Component = () => {
  const params = new URLSearchParams(window.location.search);
  return (
    <Router>
      <Routes>
        <Route path="/resume/test" element={<TestPage />} />
        <Route path="/resume/cube" element={<ResumeBox />} />
        <Route path="/resume/ru/about" element={<AboutPage russian />} />
        <Route path="/resume/ru/projects" element={<ProjectsPage russian />} />
        <Route path="/resume/ru/contacts" element={<ContactsPage russian />} />
        <Route path="/resume/en/about" element={<AboutPage />} />
        <Route path="/resume/en/projects" element={<ProjectsPage />} />
        <Route path="/resume/en/contacts" element={<ContactsPage />} />
        <Route
          path="/*"
          element={
            <Navigate
              href={
                params.get("p") ? `/resume${params.get("p")}` : "/resume/cube"
              }
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
