import { Component, createSignal } from "solid-js";
import "./styles/App.scss";
import KnowledgeBox from "./components/KnowledgeBox";
import { Navigate, Route, Router, Routes } from "solid-app-router";
import SkillsPage from "./components/pages/SkillsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactsPage from "./components/pages/ContactsPage";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<KnowledgeBox />} />
        <Route path="/resume/ru/skills" element={<SkillsPage russian />} />
        <Route path="/resume/ru/projects" element={<ProjectsPage russian />} />
        <Route path="/resume/ru/contacts" element={<ContactsPage russian />} />
        <Route path="/resume/en/skills" element={<SkillsPage />} />
        <Route path="/resume/en/projects" element={<ProjectsPage />} />
        <Route path="/resume/en/contacts" element={<ContactsPage />} />
        <Route path="/*" element={<Navigate href="/resume" />} />
      </Routes>
    </Router>
  );
};

export default App;
