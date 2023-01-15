import PagesNav from "../ui/PagesNav";
import my_photo from "../../assets/about_page/me.png";
// import "../../assets/about_page/download.svg"; as svg component
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

const NewAboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  const educationItems = [
    {
      title: "Стажровка",
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
                {educationItems.map((item) => {
                  return (
                    <div class="card">
                      <div class="body">
                        <p>{item.title}</p>
                        <span>{item.company}</span>
                      </div>
                      <span class="horizontal_sep"></span>
                      <div class="year">{item.year}</div>
                    </div>
                  );
                })}
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
                  {programmingItems.map((item) => {
                    return (
                      <div class="programming__item">
                        <item.icon />
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <span class="separator sep2"></span>
            <div class="category stack">
              <div class="title">
                <StackTitleSvg />
                <h2>Технологии</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewAboutPage;
