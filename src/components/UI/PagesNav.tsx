import { Component, createSignal, For } from "solid-js";
import cube from "../../assets/images/cube_transparent.png";
import { A } from "@solidjs/router";

interface PagesNavProps {
  russian?: boolean;
}

const PagesNav: Component<PagesNavProps> = ({ russian }) => {
  const isNavigatedFromCube = window.location.pathname.includes("cube");
  const [translatedPage, setTranslatedPage] = createSignal("");
  const letters = (russian ? "КУБ\xa0РЕЗЮМЕ" : "RESUME\xa0CUBE").split("");

  setTimeout(() => {
    const currentPage = window.location.pathname;
    if (russian) {
      setTranslatedPage(currentPage.replace("/ru/", "/en/"));
    } else {
      setTranslatedPage(currentPage.replace("/en/", "/ru/"));
    }
  }, 500);
  return (
    <div class={`navigation ${isNavigatedFromCube && "animated"}`}>
      <A href="/resume/cube">
        <img src={cube} />
        <For each={letters}>
          {(char) => (char == "\xa0" ? "\xa0" : <span>{char}</span>)}
        </For>
      </A>
      <A href={`/resume/${russian ? "ru" : "en"}/about`}>
        {russian ? "Обо мне" : "About"}
      </A>
      <A href={`/resume/${russian ? "ru" : "en"}/projects`}>
        {russian ? "Проекты" : "Projects"}
      </A>
      <A href={`/resume/${russian ? "ru" : "en"}/contacts`}>
        {russian ? "Контакты" : "Contacts"}
      </A>
      <A href={translatedPage()}>{russian ? "English" : "Русский"}</A>
    </div>
  );
};

export default PagesNav;
