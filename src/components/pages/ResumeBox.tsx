import { NavLink, useNavigate } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import "../../styles/box.scss";

const ResumeBox: Component = () => {
  const navigate = useNavigate();
  const isFirstVariant = Math.random() >= 0.5;
  const [fillBox, setFillBox] = createSignal("");
  const [navigating, setNavigating] = createSignal(false);
  const [navigatingColor, setNavigatingColor] = createSignal("");
  const mouseOver = (target: string) => {
    setFillBox(target);
  };
  const mouseLeave = () => {
    setFillBox("");
  };
  const beforeNavigate = async (href: string) => {
    switch (href) {
      case "/resume/ru/skills":
      case "/resume/en/skills":
        setNavigatingColor("box_open fill_skills");
        break;
      case "/resume/ru/projects":
      case "/resume/en/projects":
        setNavigatingColor("box_open fill_projects");
        break;
      case "/resume/ru/contacts":
      case "/resume/en/contacts":
        setNavigatingColor("box_open fill_contacts");
        break;
    }
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    if (isFirefox) {
      await timeout(4000);
    }
    navigate(href);
  };

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <div
      class={
        "box_container " +
        (navigatingColor() == "" ? fillBox() : navigatingColor())
      }
    >
      <div class={isFirstVariant ? "box variant1" : "box variant2"}>
        <div class="left"></div>
        <div class="right">
          <div
            class="skills"
            onClick={() => beforeNavigate("/resume/ru/skills")}
            onMouseEnter={() => mouseOver("fill_skills")}
            onMouseLeave={mouseLeave}
          >
            <h2>Скилы</h2>
          </div>
          <div
            class="projects"
            onClick={() => beforeNavigate("/resume/ru/projects")}
            onMouseEnter={() => mouseOver("fill_projects")}
            onMouseLeave={mouseLeave}
          >
            <h2>Проекты</h2>
          </div>
          <div
            class="contacts"
            onClick={() => beforeNavigate("/resume/ru/contacts")}
            onMouseEnter={() => mouseOver("fill_contacts")}
            onMouseLeave={mouseLeave}
          >
            <h2>Контакты</h2>
          </div>
        </div>
        <div class="front">
          <div
            class="skills"
            onClick={() => beforeNavigate("/resume/ru/skills")}
            onMouseEnter={() => mouseOver("fill_skills")}
            onMouseLeave={mouseLeave}
          >
            <h2>Skills</h2>
          </div>
          <div
            class="projects"
            onClick={() => beforeNavigate("/resume/en/projects")}
            onMouseEnter={() => mouseOver("fill_projects")}
            onMouseLeave={mouseLeave}
          >
            <h2>Projects</h2>
          </div>
          <div
            class="contacts"
            onClick={() => beforeNavigate("/resume/en/contacts")}
            onMouseEnter={() => mouseOver("fill_contacts")}
            onMouseLeave={mouseLeave}
          >
            <h2>Contacts</h2>
          </div>
        </div>
        {/* used to offset in different origins */}
        <div class="top_holder">
          <div class="top">
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
        </div>
        <div class="back">
          <div class="skills"></div>
          <div class="projects"></div>
          <div class="contacts"></div>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="box_opened"></div>
    </div>
  );
};

export default ResumeBox;
