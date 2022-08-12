import { NavLink } from "solid-app-router";
import { Component, For } from "solid-js";
import cube from "../../assets/images/cube_transparent.png";
import "../../styles/buttons.scss";

interface PagesNavProps {
  english: boolean;
}
const PagesNav: Component<PagesNavProps> = ({ english }) => {
  const letters = (english ? "RESUME\xa0BOX" : "КУБ\xa0РЕЗЮМЕ").split("");
  return (
    <div class="navigation">
      <NavLink href="/resume/home">
        <img src={cube} />
        <For each={letters}>
          {(char) => (char != "\xa0" ? <span>{char}</span> : "\xa0")}
        </For>
      </NavLink>
      <NavLink href={"/resume/" + (english ? "en" : "ru") + "/about"}>
        {english ? "About" : "Обо мне"}
      </NavLink>
      <NavLink href={"/resume/" + (english ? "en" : "ru") + "/projects"}>
        {english ? "Projects" : "Проекты"}
      </NavLink>
      <NavLink href={"/resume/" + (english ? "en" : "ru") + "/contacts"}>
        {english ? "Contacts" : "Конткаты"}
      </NavLink>
    </div>
  );
};

export default PagesNav;
