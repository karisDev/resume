import PagesNav from "../ui/PagesNav";
import ChevronRightSvg from "../../assets/icons/chevron_right.svg";
import FirebaseSvg from "../../assets/icons/firebase.svg";
import MuiSvg from "../../assets/icons/mui.svg";
import TypescriptSvg from "../../assets/icons/ts.svg";
import SeleniumSvg from "../../assets/icons/selenium.svg";
import CsharpSvg from "../../assets/icons/csharp.svg";
import PythonSvg from "../../assets/icons/python.svg";
import ReactSvg from "../../assets/icons/reactjs.svg";
import JavaScriptSvg from "../../assets/icons/js.svg";
import SassSvg from "../../assets/icons/sass.svg";
import project_tb1 from "../../assets/images/tb1.png";
import project_tb2 from "../../assets/images/tb2.png";
import project_tb3 from "../../assets/images/tb3.png";
import project_tb4 from "../../assets/images/tb4.png";
import project_cs1 from "../../assets/images/cambridge1.png";
import project_cs2 from "../../assets/images/cambridge2.png";
import project_cs3 from "../../assets/images/cambridge3.png";
import project_aidoc1 from "../../assets/images/aidoc1.png";
import project_aidoc2 from "../../assets/images/aidoc2.png";
import project_aidoc3 from "../../assets/images/aidoc3.png";
import project_aidoc4 from "../../assets/images/aidoc4.png";
import project_lct1 from "../../assets/images/lct1.png";
import project_lct2 from "../../assets/images/lct2.png";
import project_lct3 from "../../assets/images/lct3.png";
import project_lct4 from "../../assets/images/lct4.png";
import project_directions1 from "../../assets/images/directions1.png";
import project_directions2 from "../../assets/images/directions2.png";
import project_directions3 from "../../assets/images/directions3.png";
import translation from "../../assets/translation.json";

import { createSignal, For } from "solid-js";
import { Transition } from "solid-transition-group";
import { Swiper, SwiperSlide } from "swiper/solid";
import "swiper/css";

interface Project {
  name?: string;
  shortDescription?: string;
  fullDescription?: string;
  backgroundColor: string;
  themeColor?: string;
  images?: string[];
  info?: {
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
  const t = translation.ru;

  const projects: Project[] = [
    {
      ...t.projects_project_items.aidoc,
      backgroundColor: "#1c8dd9",
      themeColor: "#fff",
      images: [project_aidoc1, project_aidoc2, project_aidoc3, project_aidoc4],
      stackIcons: [ReactSvg, JavaScriptSvg, SassSvg],
      isDarkTheme: true,
    },
    {
      ...t.projects_project_items.task_board,
      backgroundColor: "#f1f1f1",
      images: [project_tb1, project_tb2, project_tb3, project_tb4],

      stackIcons: [FirebaseSvg, MuiSvg, TypescriptSvg],
      isDarkTheme: false,
    },
    {
      name: "Cambridge Solver",
      shortDescription: "Автоматизация сайта Cambridge для парсинга ответов",
      fullDescription:
        "Клиент-серверный проект, в основу которого входит автоматизация браузера с целью ввода правильных ответов на сайте Cambridge One. Знают 99% студентов мисис 2023 и 2024 года выпуска. Позже было сделано расширение. Платформа перестала работать в России",
      backgroundColor: "#303030",
      images: [project_cs1, project_cs2, project_cs3],
      info: [
        {
          title: "Клиент",
          description: "Selenium\nC# WPF\nChrome\nMaterial Design",
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
      links: [
        {
          title: "Репозиторий",
          url: "https://github.com/karisDev/CambridgeOneSolver/",
        },
        {
          title: "VK",
          url: "https://vk.com/cambridgeonesolver",
        },
        {
          title: "Telegram",
          url: "https://t.me/cambridgeonesolver",
        },
      ],
      themeColor: "#FFC107",
      stackIcons: [CsharpSvg, PythonSvg, SeleniumSvg],
      isDarkTheme: true,
    },
    {
      name: "ЛЦТ 2022",
      shortDescription: "Анализ перспективных ниш для инвестирования",
      fullDescription:
        "Кейс №4 хакатона Лидеры Цифровой Трансформации 2022. Единственная молодая команда прошедшая в финал. Целью было найти перспективные отрасли для импортозамещения. 12 API запросов были интегрированы за один день. Первый опыт создания полного дизайна приложения.\nВход для демо: user/user. Возможно уже не работает.",
      backgroundColor: "#9b1827",
      images: [project_lct1, project_lct2, project_lct3, project_lct4],
      info: [
        {
          title: "Фронт",
          description: "React\nTypescript\nSCSS\nAxios",
        },
        {
          title: "Особенности",
          description:
            "Командная работа\nСобственный дизайн\nАдаптивность\nАвторизация",
        },
      ],
      links: [
        {
          title: "Репозиторий",
          url: "https://github.com/denmalbas007/RecSys_LCT",
        },
        {
          title: "Демо (может не работать)",
          url: "http://37.230.196.148:2002/",
        },
      ],
      isDarkTheme: true,
      stackIcons: [ReactSvg, TypescriptSvg, SassSvg],
    },
    {
      name: "Directions",
      shortDescription: "Запись трафика между улицами или городами",
      fullDescription:
        "Приложение для сбора статистики в Excel о трафике между 2-10 разными точками на карте, работает с помощью Google Directions API. Понадобилось для автоматизации действий в курсовой работе. Умеет работать в фоне, чтобы собирать данные по таймерам. Красивый дизайн :)",
      backgroundColor: "#3f51b5",
      isDarkTheme: true,
      images: [project_directions1, project_directions2, project_directions3],
      info: [
        {
          title: "Стек",
          description: "C# WPF\nDirections API\nMaterial Design\nBallonTip",
        },
      ],
      links: [
        {
          title: "Репозиторий",
          url: "https://github.com/karisDev/DirectionsInformation/",
        },
      ],
    },
  ];

  const animationDuration = 300;
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
    }, animationDuration);
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
        <Swiper slidesPerView={"auto"} spaceBetween={8}>
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
            <Transition name="info-slide">
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
