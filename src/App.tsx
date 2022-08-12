import "./styles/App.scss";
import { Component, createSignal } from "solid-js";
import { Navigate, Route, Router, Routes } from "solid-app-router";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactsPage from "./components/pages/ContactsPage";
import ResumeBox from "./components/pages/ResumeBox";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumeBox />} />
        <Route path="/resume/ru/about" element={<AboutPage russian />} />
        <Route path="/resume/ru/projects" element={<ProjectsPage russian />} />
        <Route path="/resume/ru/contacts" element={<ContactsPage russian />} />
        <Route path="/resume/en/about" element={<AboutPage />} />
        <Route path="/resume/en/projects" element={<ProjectsPage />} />
        <Route path="/resume/en/contacts" element={<ContactsPage />} />
        <Route path="/*" element={<Navigate href="/resume" />} />
      </Routes>
    </Router>
  );
};

export default App;
