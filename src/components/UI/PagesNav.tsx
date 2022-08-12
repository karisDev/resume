import { NavLink } from "solid-app-router";
import { Component, For } from "solid-js";
import cube from "../../assets/images/cube_transparent.png";
import "../../styles/buttons.scss";

interface PagesNavProps {
  russian?: boolean;
}
const PagesNav: Component<PagesNavProps> = ({ russian }) => {
  const letters = (russian ? "КУБ\xa0РЕЗЮМЕ" : "RESUME\xa0BOX").split("");
  return (
    <div class="navigation">
      <NavLink href="/resume/home">
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
    </div>
  );
};

export default PagesNav;
