import { Component, createSignal } from "solid-js";
import "./styles/App.scss";
import KnowledgeBox from "./components/KnowledgeBox";
import { Navigate, Route, Router, Routes } from "solid-app-router";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<KnowledgeBox />} />
        <Route path="/resume/ru/skills" element={<KnowledgeBox />} />
        <Route path="/resume/ru/projects" element={<KnowledgeBox />} />
        <Route path="/resume/ru/contacts" element={<KnowledgeBox />} />
        <Route path="/resume/en/skills" element={<KnowledgeBox />} />
        <Route path="/resume/en/projects" element={<KnowledgeBox />} />
        <Route path="/resume/en/contacts" element={<KnowledgeBox />} />
        <Route path="/*" element={<Navigate href="/resume" />} />
      </Routes>
    </Router>
  );
};

export default App;
