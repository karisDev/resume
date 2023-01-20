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

interface Project {
  name: string;
  shortDescription: string;
  fullDescription?: string;
  backgroundColor?: string;
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
}

const NewProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
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
      images: [project_cs3, project_cs1, project_cs2],
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
    },
  ];
  const [pageBackgroundColor, setPageBackgroundColor] = createSignal(
    projects[0].backgroundColor ?? ""
  );
  const [textColor, setTextColor] = createSignal(projects[0].textColor ?? "");
  const [newActiveProject, setNewActiveProject] = createSignal(0);
  const [activeProject, setActiveProject] = createSignal(0);

  const changeActiveProject = (index: number) => {
    setNewActiveProject(index);
    setPageBackgroundColor(projects[index].backgroundColor);
  };

  return (
    <div
      style={{
        "background-color": pageBackgroundColor() ?? "",
        "text-color": textColor() ?? "",
      }}
      class="new_projects_page"
    >
      <PagesNav russian={russian} />
      <div class="projects_nav"></div>
      <div class="active_project">
        <div class="active_container">
          <div class="header">
            <h2>{projects[activeProject()].name}</h2>
          </div>
          <div class="image">
            <img src={projects[activeProject()].images[0]} alt="" />
          </div>
          <div class="body">
            <h3>Shots</h3>
            <div class="shots"></div>
            <div class="description">
              <h3>Description</h3>
              {projects[activeProject()].fullDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectsPage;
