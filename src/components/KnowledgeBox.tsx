import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import "../styles/box.scss";

const KnowledgeBox: Component = () => {
  const isFirstVariant = Math.random() >= 0.5;

  return (
    <div class="box_container">
      <div class={isFirstVariant ? "box variant1" : "box variant2"}>
        <div class="left"></div>
        <div class="right">
          <NavLink class="skills" href="/resume/ru/skills">
            <h2>Скилы</h2>
          </NavLink>
          <NavLink class="projects" href="/resume/ru/projects">
            <h2>Проекты</h2>
          </NavLink>
          <NavLink class="contacts" href="/resume/ru/contacts">
            <h2>Контакты</h2>
          </NavLink>
        </div>
        <div class="front">
          <div class="skills">
            <h2>Skills</h2>
          </div>
          <div class="projects">
            <h2>Projects</h2>
          </div>
          <div class="contacts">
            <h2>Contacts</h2>
          </div>
        </div>
        <div class="top">
          {/* // <h2>
            //   <span>Resume</span>
            //   <br />
            //   cube куб
            //   <br />
            //   <span>резюме</span>
            // </h2> */}
          <h2>
            <span>Куб</span>
            <br />
            Резюме
          </h2>
          <h2>
            Resume
            <br />
            <span>Cube</span>
          </h2>
        </div>
        <div class="back">
          <div class="skills"></div>
          <div class="projects"></div>
          <div class="contacts"></div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBox;
