import { useNavigate } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import Watermark from "../ui/Watermark";

const ResumeBox: Component = () => {
  const navigate = useNavigate();
  const isFirstVariant = Math.random() >= 0.5;
  const [fillBox, setFillBox] = createSignal("");
  const [navigating, setNavigating] = createSignal(false);
  const [navigatingColor, setNavigatingColor] = createSignal("");
  const mouseOver = (target: string) => {
    setFillBox(target);
  };
  const mouseLeave = () => {
    setFillBox("");
  };
  const beforeNavigate = async (href: string) => {
    switch (href) {
      case "/resume/ru/about":
      case "/resume/en/about":
        setNavigatingColor("box_open fill_about");
        break;
      case "/resume/ru/projects":
      case "/resume/en/projects":
        setNavigatingColor("box_open fill_projects");
        break;
      case "/resume/ru/contacts":
      case "/resume/en/contacts":
        setNavigatingColor("box_open fill_contacts");
        break;
    }
    await timeout(3000);
    navigate(href);
  };

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <div
      class={
        "box_container " +
        (navigatingColor() == "" ? fillBox() : navigatingColor())
      }
    >
      <div class="box_breathe">
        <div class={isFirstVariant ? "box variant1" : "box variant2"}>
          <div class="left"></div>
          <div class="right">
            <div
              class="about"
              onClick={() => beforeNavigate("/resume/en/about")}
              onMouseEnter={() => mouseOver("fill_about")}
            >
              <h2>About me</h2>
            </div>
            <div
              class="projects"
              onClick={() => beforeNavigate("/resume/en/projects")}
              onMouseEnter={() => mouseOver("fill_projects")}
            >
              <h2>Projects</h2>
            </div>
            <div
              class="contacts"
              onClick={() => beforeNavigate("/resume/en/contacts")}
              onMouseEnter={() => mouseOver("fill_contacts")}
            >
              <h2>Contacts</h2>
            </div>
          </div>
          <div class="front">
            <div
              class="about"
              onClick={() => beforeNavigate("/resume/ru/about")}
              onMouseEnter={() => mouseOver("fill_about")}
            >
              <h2>?????? ??????</h2>
            </div>
            <div
              class="projects"
              onClick={() => beforeNavigate("/resume/ru/projects")}
              onMouseEnter={() => mouseOver("fill_projects")}
            >
              <h2>??????????????</h2>
            </div>
            <div
              class="contacts"
              onClick={() => beforeNavigate("/resume/ru/contacts")}
              onMouseEnter={() => mouseOver("fill_contacts")}
            >
              <h2>????????????????</h2>
            </div>
          </div>
          {/* used to offset with different origins */}
          <div class="top_holder" onMouseEnter={mouseLeave}>
            <div class="top">
              {isFirstVariant ? (
                <>
                  <h2>
                    <span>??????</span>
                    <br />
                    ????????????
                  </h2>
                  <h2>
                    Resume
                    <br />
                    <span>Cube</span>
                  </h2>
                </>
              ) : (
                <>
                  <h2>
                    <span>Cube</span>
                    <br />
                    Resume
                  </h2>
                  <h2>
                    ????????????
                    <br />
                    <span>??????</span>
                  </h2>
                </>
              )}
            </div>
          </div>
          <div class="back">
            <div class="about"></div>
            <div class="projects"></div>
            <div class="contacts"></div>
          </div>
          <div class="bottom"></div>
        </div>
      </div>
      <div class="box_opened"></div>
      {/* detect mouse outside the box to change
      color. improves webkit perfomance  */}
      <div class="mouse_catcher" onMouseEnter={mouseLeave}></div>
      <Watermark />
    </div>
  );
};

export default ResumeBox;
