import PagesNav from "../ui/PagesNav";
import ChevronRightSvg from "../../assets/icons/chevron_right.svg";
import project_tb1 from "../../assets/images/tb1.png";
import project_tb2 from "../../assets/images/tb2.png";
import project_tb3 from "../../assets/images/tb3.png";
import FirebaseSvg from "../../assets/icons/firebase.svg";
import MuiSvg from "../../assets/icons/mui.svg";
import TypescriptSvg from "../../assets/icons/ts.svg";
import project_tb4 from "../../assets/images/tb4.png";
import project_cs1 from "../../assets/images/cambridge1.png";
import project_cs2 from "../../assets/images/cambridge2.png";
import project_cs3 from "../../assets/images/cambridge3.png";
import SeleniumSvg from "../../assets/icons/selenium.svg";
import CsharpSvg from "../../assets/icons/csharp.svg";
import PythonSvg from "../../assets/icons/python.svg";

import { createSignal, For } from "solid-js";
import { Transition } from "solid-transition-group";

interface Project {
  name: string;
  shortDescription: string;
  fullDescription?: string;
  backgroundColor: string;
  textColor?: string;
  images: string[];
  info: {
    title: string;
    description: string;
  }[];
  stackIcons?: string[];
  links?: {
    title: string;
    link: string;
  }[];
  isDarkTheme?: boolean;
}

const NewProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const animationDuration = 500;
  const projects: Project[] = [
    {
      name: "Task board",
      shortDescription: "Органайзер с большим стеком. Один из первых проектов.",
      fullDescription:
        "Веб сайт на React для продуктивности. Один из первых проектов. Целью было изучить как можно больше практик. Был сделан собственный дизайн в Figma на основе доски Kanban",
      backgroundColor: "#f1f1f1",
      images: [project_tb1, project_tb2, project_tb3, project_tb4],
      info: [
        {
          title: "Фронт",
          description: "React, TypeScript",
        },
        {
          title: "Библиотеки",
          description: "Firebase, Material UI, React Router, i18next",
        },
        {
          title: "Особенности",
          description:
            "Облачное хранилище\nАдаптивность\nСмена языка\nСмена темы",
        },
      ],
      stackIcons: [FirebaseSvg, MuiSvg, TypescriptSvg],
    },
    {
      name: "Cambridge Solver",
      shortDescription:
        "Приложение автоматизации сайта Cambridge для парсинга ответов.",
      fullDescription:
        "Клиент-серверный проект, в основу которого входит автоматизация браузера с целью ввода правильных ответов на сайте",
      backgroundColor: "#303030",
      images: [project_cs1, project_cs2, project_cs3],
      info: [
        {
          title: "Клиент",
          description: "Selenium\nC# WPF\nChrome",
        },
        {
          title: "Сервер",
          description: "Python\nFastAPI",
        },
        {
          title: "Статистика",
          description:
            "120 000 решенных тестов\n900+ пользователей\n200+ человек в группе",
        },
      ],
      stackIcons: [CsharpSvg, PythonSvg, SeleniumSvg],
      isDarkTheme: true,
    },
  ];
  const [activeProject, setActiveProject] = createSignal(projects[0]);
  const [backgroundColor, setBackgroundColor] = createSignal(
    projects[0].backgroundColor
  );
  const [isDarkTheme, setIsDarkTheme] = createSignal(projects[0].isDarkTheme);
  const [show, setShow] = createSignal(true);

  const handleProjectClick = (project: Project) => {
    if (project === activeProject()) return;

    setBackgroundColor(project.backgroundColor);
    setIsDarkTheme(project.isDarkTheme);
    setShow(false);
    setTimeout(() => {
      setActiveProject(project);
      setShow(true);
    }, animationDuration);
  };

  return (
    <div
      style={{
        "background-color": backgroundColor() ?? "",
        "text-color": activeProject().textColor ?? "",
      }}
      class={`new_projects_page ${isDarkTheme() ? "dark" : ""}`}
    >
      <PagesNav russian={russian} />
      <div class="projects_nav">
        <For each={projects}>
          {(project) => (
            <div class="project" onClick={() => handleProjectClick(project)}>
              <img class="image" src={project.images[0]} alt="" />
              <div class="info">
                <div class="heading">
                  <h2>{project.name}</h2>
                </div>
                <p>{project.shortDescription}</p>
                <div class="bottom">
                  <div class="stack">
                    <For each={project.stackIcons}>{(icon) => icon}</For>
                  </div>
                  <ChevronRightSvg />
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="active_project">
        <div class="active_container">
          <div class="header">
            <Transition name="rotate-up-3d">
              {show() ? <h2>{activeProject().name}</h2> : <h2></h2>}
            </Transition>
          </div>
          <div class="image">
            <img src={activeProject().images[0]} alt="" />
          </div>
          <div class="body">
            <h3>Shots</h3>
            <div class="shots"></div>
            <div class="description">
              <h3>Description</h3>
              {activeProject().fullDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectsPage;
