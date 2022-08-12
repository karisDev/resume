import { NavLink } from "solid-app-router";
import { Component, For } from "solid-js";
import cube from "../../assets/images/cube_transparent.png";
interface PagesNavProps {
  isEnglish?: boolean;
}
const PagesNav: Component<PagesNavProps> = (isEnglish) => {
  const letters = (isEnglish ? "RESUME\xa0BOX" : "КУБ\xa0РЕЗЮМЕ").split("");
  console.log("/resume/" + (isEnglish ? "en" : "ru") + "/about");
  return (
    <div class="navigation">
      <NavLink href="/resume/home">
        <img src={cube} />
        <For each={letters}>
          {(char) => (char != "\xa0" ? <span>{char}</span> : "\xa0")}
        </For>
      </NavLink>
      <NavLink href={"/resume/" + (isEnglish ? "en" : "ru") + "/about"}>
        About
      </NavLink>
      <NavLink href={"/resume/" + (isEnglish ? "en" : "ru") + "/projects"}>
        Projects
      </NavLink>
      <NavLink href={"/resume/" + (isEnglish ? "en" : "ru") + "/contacts"}>
        Contacts
      </NavLink>
    </div>
  );
};

export default PagesNav;
