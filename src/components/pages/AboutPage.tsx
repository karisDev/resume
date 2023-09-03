import PagesNav from "../ui/PagesNav";
import my_photo from "../../assets/images/me.png";
import DownloadSvg from "../../assets/icons/download.svg";
import GithubSvg from "../../assets/icons/github.svg";
import EducationTitleSvg from "../../assets/icons/education_title.svg";
import LanguagesTitleSvg from "../../assets/icons/languages_title.svg";
import StackTitleSvg from "../../assets/icons/stack_title.svg";
import RussiaSvg from "../../assets/icons/russia.svg";
import UsSvg from "../../assets/icons/us.svg";
import { For } from "solid-js";
import StackHorizontalSlider from "../UI/StackHorizontalSlider";
import translation from "../../assets/translation.json";
import Mask from "../ui/Mask";
import useAboutItems from "../../hooks/useAboutItems";

const AboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  const t = russian ? translation.ru : translation.en;
  const educationItems = t.about_education_items;
  const { programmingItems, frameworksItems, librariesItems, otherItems } =
    useAboutItems();

  return (
    <>
      <PagesNav russian={russian} />
      <Mask colorClass="about_color" />
      <main class="about_page">
        <section class="greetings">
          <div class="body">
            <h1>{t.about_greetings}</h1>
            <div class="button_group">
              <div class="shadow">
                <a
                  class="link resume"
                  href="https://docs.google.com/document/d/1pKpImdxYfvlC2JvJl45pVnfhGKpyAvgh1SZSEQ52Paw/edit?usp=sharing"
                  target="_blank"
                >
                  <p>{t.about_resume}</p>
                  <DownloadSvg />
                </a>
              </div>
              <div class="shadow">
                <a
                  class="link github"
                  href="https://github.com/karisDev"
                  target="_blank"
                >
                  <GithubSvg />
                  <p>{t.about_github}</p>
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
              <h1>{t.about_header}</h1>
              <p>{t.about_body}</p>
            </div>
          </div>
        </section>
        <section class="skills">
          <div class="grid">
            <div class="category education">
              <div class="title">
                <EducationTitleSvg />
                <h2>{t.about_skills_header}</h2>
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
                <h2>{t.about_languages_header}</h2>
              </div>
              <div class="languages__group">
                <h3 class="languages_title">{t.about_languages_group1}</h3>
                <div class="language">
                  <RussiaSvg />
                  <p>{t.about_russian}</p>
                  <span class="separator"></span>
                  <p>{t.about_russian_level}</p>
                </div>
                <div class="language">
                  <UsSvg />
                  <p>{t.about_english}</p>
                  <span class="separator"></span>
                  <p>{t.about_english_level}</p>
                </div>
              </div>
              <div class="languages__group">
                <h3 class="languages_title">{t.about_languages_group2}</h3>
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
                <h2>{t.about_technologies_header}</h2>
              </div>
              <div class="stack__group">
                <StackHorizontalSlider
                  title={t.about_technologies_group1}
                  items={frameworksItems}
                />
              </div>
              <div class="stack__group">
                <StackHorizontalSlider
                  title={t.about_technologies_group2}
                  items={librariesItems}
                />
              </div>
              <div class="stack__group">
                <StackHorizontalSlider
                  title={t.about_technologies_group3}
                  items={otherItems}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
