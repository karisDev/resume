import { NavLink } from "solid-app-router";
import { Component, For } from "solid-js";
import cube from "../../assets/images/cube_transparent.png";
interface PagesNavProps {
  isEnglish?: boolean;
}
const PagesNav: Component<PagesNavProps> = (isEnglish) => {
  const letters = (isEnglish ? "RESUME\xa0BOX" : "КУБ\xa0РЕЗЮМЕ").split("");
  return (
    <div class="navigation">
      <NavLink href="/resume/home">
        <>
          <img src={cube} />
          <For each={letters}>{(char) => <span>{char}</span>}</For>
        </>
      </NavLink>
      <NavLink href={"/resume/" + isEnglish ? "en" : "rus" + "/about"}>
        About
      </NavLink>
      <NavLink href={"/resume/" + isEnglish ? "en" : "rus" + "/projects"}>
        Projects
      </NavLink>
      <NavLink href={"/resume/" + isEnglish ? "en" : "rus" + "/contacts"}>
        Contacts
      </NavLink>
    </div>
  );
};

export default PagesNav;
