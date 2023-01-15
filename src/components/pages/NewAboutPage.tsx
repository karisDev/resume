import PagesNav from "../ui/PagesNav";
import my_photo from "../../assets/about_page/me.png";
import DownloadSvg from "../../assets/about_page/icons/download.svg";
import GithubSvg from "../../assets/about_page/icons/github.svg";
import EducationTitleSvg from "../../assets/about_page/icons/education_title.svg";
import LanguagesTitleSvg from "../../assets/about_page/icons/languages_title.svg";
import StackTitleSvg from "../../assets/about_page/icons/stack_title.svg";
import RussiaSvg from "../../assets/about_page/icons/russia.svg";
import UsSvg from "../../assets/about_page/icons/us.svg";
import LanguageCsharp from "../../assets/about_page/icons/csharp.svg";
import LanguageCSS from "../../assets/about_page/icons/css.svg";
import LanguageHTML from "../../assets/about_page/icons/html.svg";
import LanguageJS from "../../assets/about_page/icons/js.svg";
import LanguagePython from "../../assets/about_page/icons/python.svg";
import LanguageTS from "../../assets/about_page/icons/ts.svg";
import LanguageDart from "../../assets/about_page/icons/dart.svg";
import ReactJSSvg from "../../assets/about_page/icons/reactjs.svg";
import NextJSSvg from "../../assets/about_page/icons/nextjs.svg";
import SolidJSSvg from "../../assets/about_page/icons/solidjs.svg";
import FlutterSvg from "../../assets/about_page/icons/flutter.svg";
import FirebaseSvg from "../../assets/about_page/icons/firebase.svg";
import MaterialUISvg from "../../assets/about_page/icons/mui.svg";
import SassSvg from "../../assets/about_page/icons/sass.svg";
import ThreeJSSvg from "../../assets/about_page/icons/threejs.svg";
import ThinkingEmojiSvg from "../../assets/about_page/icons/thinking_emoji.svg";
import GitSvg from "../../assets/about_page/icons/git.svg";
import LinuxSvg from "../../assets/about_page/icons/linux.svg";
import SeleniumSvg from "../../assets/about_page/icons/selenium.svg";
import DockerSvg from "../../assets/about_page/icons/docker.svg";
import FigmaSvg from "../../assets/about_page/icons/figma.svg";
import { For } from "solid-js";
import HorizontalSlider from "../ui/HorizontalSlider";

const NewAboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  const educationItems = [
    {
      title: "Стажировка",
      company: "DUC Technologies",
      year: "2022\n2023",
    },
    {
      title: "Программная\nинфраструктура",
      company: "КРОК",
      year: "2022",
    },
    {
      title: "Информационные\nСистемы и Технологии",
      company: "НИТУ МИСиС",
      year: "2020\n2024",
    },
    {
      title: "Агент банка 3 разряда",
      company: "Московский колледж\nбизнес технологий",
      year: "2019",
    },
  ];
  const programmingItems = [
    {
      title: "TypeScript",
      icon: LanguageTS,
    },
    {
      title: "JavaScript",
      icon: LanguageJS,
    },
    {
      title: "Python",
      icon: LanguagePython,
    },
    {
      title: "HTML",
      icon: LanguageHTML,
    },
    {
      title: "CSS",
      icon: LanguageCSS,
    },
    {
      title: "C#",
      icon: LanguageCsharp,
    },
    {
      title: "Dart",
      icon: LanguageDart,
    },
  ];
  const frameworksItems = [
    {
      title: "ReactJS",
      icon: ReactJSSvg,
    },
    {
      title: "NextJS",
      icon: NextJSSvg,
    },
    {
      title: "SolidJS",
      icon: SolidJSSvg,
    },
    {
      title: "Flutter",
      icon: FlutterSvg,
    },
  ];
  const librariesItems = [
    {
      title: "Firebase",
      icon: FirebaseSvg,
    },
    {
      title: "MUI",
      icon: MaterialUISvg,
    },
    {
      title: "Sass",
      icon: SassSvg,
    },
    {
      title: "ThreeJS",
      icon: ThreeJSSvg,
    },
    {
      title: "Axios",
      icon: ThinkingEmojiSvg,
    },
  ];
  const otherItems = [
    {
      title: "Git",
      icon: GitSvg,
    },
    {
      title: "Linux",
      icon: LinuxSvg,
    },
    {
      title: "Selenium",
      icon: SeleniumSvg,
    },
    {
      title: "Docker",
      icon: DockerSvg,
    },
    {
      title: "WPF",
      icon: ThinkingEmojiSvg,
    },
    {
      title: "Figma",
      icon: FigmaSvg,
    },
  ];
  return (
    <>
      <PagesNav russian={russian} />
      <main class="new_about_page">
        <section class="greetings">
          <div class="body">
            <h1>
              Привет, я Кирилл
              <br />
              Приятно познакомиться!
            </h1>
            <div class="button_group">
              <div class="shadow">
                <a
                  class="link resume"
                  href="https://docs.google.com/document/d/1pKpImdxYfvlC2JvJl45pVnfhGKpyAvgh1SZSEQ52Paw/edit?usp=sharing"
                  target="_blank"
                >
                  <DownloadSvg />
                  <p>
                    Полное
                    <br />
                    Резюме
                  </p>
                </a>
              </div>
              <div class="shadow">
                <a
                  class="link github"
                  href="https://github.com/karisDev"
                  target="_blank"
                >
                  <GithubSvg />
                  <p>
                    Посетить
                    <br />
                    GitHub
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="img_container">
            <img src={my_photo} />
          </div>
        </section>
        <section class="about">
          <div class="content">
            <div class="body">
              <h1>Фронтенд разработчик, 20 лет</h1>
              <h3>
                Родился и живу в Москве. Начал заниматься программированием c 5
                класса на Quick Basic. Любовь к автоматизации и созданию
                красивых, интуитивных интерфейсов. Еще очень люблю английский
                язык.
              </h3>
            </div>
          </div>
        </section>
        <section class="skills">
          <div class="grid">
            <div class="category education">
              <div class="title">
                <EducationTitleSvg />
                <h2>Образование и опыт</h2>
              </div>
              <div class="cards">
                <For each={educationItems} fallback={<div />}>
                  {(item) => (
                    <div class="card">
                      <div class="body">
                        <p>{item.title}</p>
                        <span>{item.company}</span>
                      </div>
                      <span class="horizontal_sep"></span>
                      <div class="year">{item.year}</div>
                    </div>
                  )}
                </For>
              </div>
            </div>
            <span class="separator sep1"></span>
            <div class="category languages">
              <div class="title">
                <LanguagesTitleSvg />
                <h2>Языки</h2>
              </div>
              <div class="languages__group">
                <h3 class="languages_title">Естественные</h3>
                <div class="language">
                  <RussiaSvg />
                  <p>Русский</p>
                  <span class="separator"></span>
                  <p>Родной</p>
                </div>
                <div class="language">
                  <UsSvg />
                  <p>Английский</p>
                  <span class="separator"></span>
                  <p>C1</p>
                </div>
              </div>
              <div class="languages__group">
                <h3 class="languages_title">Программирования</h3>
                <div class="programming">
                  <For each={programmingItems} fallback={<div />}>
                    {(item) => (
                      <div class="programming__item">
                        <item.icon />
                        <p>{item.title}</p>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </div>
            <span class="separator sep2"></span>
            <div class="category stack">
              <div class="title">
                <StackTitleSvg />
                <h2>Технологии</h2>
              </div>
              <div class="stack__group">
                <HorizontalSlider title="Фреймворки" items={frameworksItems} />
              </div>
              <div class="stack__group">
                <HorizontalSlider title="Библиотеки" items={librariesItems} />
              </div>
              <div class="stack__group">
                <HorizontalSlider title="Другое" items={otherItems} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewAboutPage;
