import { Component, createSignal } from "solid-js";
import Watermark from "../UI/Watermark";
// preload
import operator from "../../assets/images/operator.png";
import project_first_pic from "../../assets/images/tth1.png";
import my_photo from "../../assets/images/me.png";
import { useNavigate } from "@solidjs/router";

const ResumeBox: Component = () => {
  const isFirstVariant = Math.random() >= 0.5;
  const [fillBox, setFillBox] = createSignal("");
  const [navigatingColorClasses, setNavigatingColorClasses] = createSignal("");
  const navigate = useNavigate();
  const mouseOver = (target: string) => {
    setFillBox(target);
  };
  const mouseLeave = () => {
    setFillBox("");
  };
  const beforeNavigate = async (href: string) => {
    const color = href.split("/").pop() as string;
    setNavigatingColorClasses("box_open fill_" + color);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate(href, { replace: true });
  };

  return (
    <>
      <div class="box_bg" />
      <Watermark />
      <div
        class={
          "box_container box_breathe " +
          (navigatingColorClasses() == ""
            ? fillBox()
            : navigatingColorClasses())
        }
      >
        <div class="box_opened"></div>
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
              <h2>Обо мне</h2>
            </div>
            <div
              class="projects"
              onClick={() => beforeNavigate("/resume/ru/projects")}
              onMouseEnter={() => mouseOver("fill_projects")}
            >
              <h2>Проекты</h2>
            </div>
            <div
              class="contacts"
              onClick={() => beforeNavigate("/resume/ru/contacts")}
              onMouseEnter={() => mouseOver("fill_contacts")}
            >
              <h2>Контакты</h2>
            </div>
          </div>
          {/* used to offset with different origins */}
          <div class="top_holder" onMouseEnter={mouseLeave}>
            <div class="top">
              {isFirstVariant ? (
                <>
                  <h2>
                    <span>Куб</span>
                    <br />
                    Резюме
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
                    Резюме
                    <br />
                    <span>Куб</span>
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
        {/* detect mouse outside the box to change
      color. improves webkit perfomance  */}
        <div class="mouse_catcher" onMouseEnter={mouseLeave}></div>
      </div>
      {/* preload */}
      <img style="display: none;" src={operator} />
      <img style="display: none;" src={project_first_pic} />
      <img style="display: none;" src={my_photo} />
    </>
  );
};

export default ResumeBox;
