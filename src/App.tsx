import "./styles/index.scss";
import { Component } from "solid-js";
import { Navigate, Route, Router, Routes } from "solid-app-router";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactsPage from "./components/pages/ContactsPage";
import ResumeBox from "./components/pages/ResumeBox";
import AboutPage from "./components/pages/AboutPage";
import NewProjectsPage from "./components/pages/NewProjectsPage";

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/resume/cube" element={<ResumeBox />} />
          <Route path="/resume/ru/about" element={<AboutPage russian />} />
          <Route
            path="/resume/ru/projects"
            element={<NewProjectsPage russian />}
          />
          <Route
            path="/resume/ru/contacts"
            element={<ContactsPage russian />}
          />
          <Route path="/resume/en/about" element={<AboutPage />} />
          <Route path="/resume/en/projects" element={<ProjectsPage />} />
          <Route path="/resume/en/contacts" element={<ContactsPage />} />
          <Route path="/*" element={<Navigate href="/resume/cube" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
