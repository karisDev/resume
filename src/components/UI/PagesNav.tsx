import { NavLink } from "solid-app-router";
import { Component, createEffect, createSignal, For } from "solid-js";
import cube from "../../assets/images/cube_transparent.png";

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
      <NavLink href="/resume/cube">
        <img src={cube} />
        <For each={letters}>
          {(char) => (char != "\xa0" ? <span>{char}</span> : "\xa0")}
        </For>
      </NavLink>
      <NavLink href={"/resume/" + (russian ? "ru" : "en") + "/about"}>
        {russian ? "Обо мне" : "About"}
      </NavLink>
      <NavLink href={"/resume/" + (russian ? "ru" : "en") + "/projects"}>
        {russian ? "Проекты" : "Projects"}
      </NavLink>
      <NavLink href={"/resume/" + (russian ? "ru" : "en") + "/contacts"}>
        {russian ? "Конткаты" : "Contacts"}
      </NavLink>
      <NavLink href={translatedPage()}>
        {russian ? "English" : "Русский"}
      </NavLink>
    </div>
  );
};

export default PagesNav;
