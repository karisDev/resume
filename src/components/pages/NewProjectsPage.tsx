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
import { Swiper, SwiperSlide } from "swiper/solid";
import "swiper/css";

interface Project {
  name: string;
  shortDescription: string;
  fullDescription?: string;
  backgroundColor: string;
  themeColor?: string;
  images: string[];
  info: {
    title: string;
    description: string;
  }[];
  stackIcons?: string[];
  links?: {
    title: string;
    url: string;
  }[];
  isDarkTheme?: boolean;
}

const NewProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const animationDuration = 300;
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
          description: "React\nTypeScript",
        },
        {
          title: "Библиотеки",
          description: "Firebase\nMaterial UI\nReact Router\ni18next",
        },
        {
          title: "Особенности",
          description:
            "Облачное хранилище\nАдаптивность\nСмена языка\nСмена темы",
        },
      ],
      stackIcons: [FirebaseSvg, MuiSvg, TypescriptSvg],
      isDarkTheme: false,
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
      themeColor: "#FFC107",
      stackIcons: [CsharpSvg, PythonSvg, SeleniumSvg],
      isDarkTheme: true,
    },
  ];
  const [activeProject, setActiveProject] = createSignal(projects[0]);
  const [backgroundColor, setBackgroundColor] = createSignal(
    projects[0].backgroundColor
  );
  const [isDarkTheme, setIsDarkTheme] = createSignal(projects[0].isDarkTheme);
  const [selectedImage, setSelectedImage] = createSignal(0);
  const [show, setShow] = createSignal(true); // required for transition effect
  const [showImage, setShowImage] = createSignal(true);

  const handleProjectChange = (project: Project) => {
    if (project === activeProject()) return;

    setBackgroundColor(project.backgroundColor);
    setIsDarkTheme(project.isDarkTheme);
    setShow(false);
    setShowImage(false);
    setTimeout(() => {
      setActiveProject(project);
      setSelectedImage(0);
      setShow(true);
      setShowImage(true);
    }, animationDuration);
  };

  const handleImageChange = (index: number) => {
    if (index === selectedImage()) return;

    setShowImage(false);
    setSelectedImage(index);
    setTimeout(() => {
      setShowImage(true);
    }, animationDuration / 2);
  };

  return (
    <div
      style={{
        "background-color": backgroundColor() ?? "",
        "text-color": activeProject().themeColor ?? "",
      }}
      class={`new_projects_page ${isDarkTheme() ? "dark" : ""}`}
    >
      <PagesNav russian={russian} />
      <div class="projects_nav">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <For each={projects}>
            {(project) => (
              <SwiperSlide
                class="project"
                onClick={() => handleProjectChange(project)}
              >
                <div class="image">
                  <img src={project.images[0]} alt="" />
                </div>
                <div class="info">
                  <div class="heading">
                    <h2>{project.name}</h2>
                    <ChevronRightSvg />
                  </div>
                  <p>{project.shortDescription}</p>
                  <div class="bottom">
                    <div class="stack">
                      <For each={project.stackIcons}>{(icon) => icon}</For>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </For>
        </Swiper>
      </div>
      <div class="active_project">
        <div class="active_container">
          <div class="header">
            <Transition name="slide-bottom">
              {show() ? (
                <h2 style={{ color: activeProject().themeColor }}>
                  {activeProject().name}
                </h2>
              ) : (
                <h2></h2>
              )}
            </Transition>
          </div>
          <div class="image">
            <Transition name="img-opacity">
              {showImage() && (
                <img src={activeProject().images[selectedImage()]} alt="" />
              )}
            </Transition>
          </div>
          <div class="body">
            <h3>Shots</h3>
            <div class="shots">
              <Transition name="img-opacity">
                {show() && (
                  <Swiper slidesPerView={"auto"}>
                    <For each={activeProject().images}>
                      {(image, index) => (
                        <SwiperSlide
                          style={`--index: ${index()}`}
                          class={`shot ${
                            selectedImage() == index() ? "active" : ""
                          }`}
                          onClick={() => handleImageChange(index())}
                        >
                          <img src={image} alt="" />
                        </SwiperSlide>
                      )}
                    </For>
                  </Swiper>
                )}
              </Transition>
            </div>
            <div class="description">
              <h3>Description</h3>
              <div class="description-body">
                <Transition name="description-slide">
                  {show() ? <p>{activeProject().fullDescription}</p> : <p></p>}
                </Transition>
              </div>
            </div>
          </div>
          <div class="info">
            <Transition name="img-opacity">
              {show() && (
                <div class="info-container">
                  <For each={activeProject().info}>
                    {(info, index) => (
                      <>
                        <div style={`--index: ${index()}`} class="info-item">
                          <h3>{info.title}</h3>
                          <p>{info.description}</p>
                        </div>
                        <div class="separator"></div>
                      </>
                    )}
                  </For>
                  <div
                    style={`--index: ${activeProject().info.length}`}
                    class="info-item links"
                  >
                    <h3>Links</h3>
                    <For each={activeProject().links}>
                      {(link) => (
                        <>
                          <a href={link.url} target="_blank">
                            {link.title}
                          </a>
                        </>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectsPage;
