import vkLogo from "../../assets/images/vk.png";
import telegramLogo from "../../assets/images/telegram.png";
import githubLogo from "../../assets/images/github.png";
import cambridge1 from "../../assets/images/cambridge1.png";
import cambridge2 from "../../assets/images/cambridge2.png";
import cambridge3 from "../../assets/images/cambridge3.png";
import tb1 from "../../assets/images/tb1.png";
import tb2 from "../../assets/images/tb2.png";
import tb3 from "../../assets/images/tb3.png";
import cube_with_logo from "../../assets/images/cube_with_logo.png";
import { createSignal } from "solid-js";
import { NavLink } from "solid-app-router";
import PagesNav from "../ui/PagesNav";
import translation from "../../assets/translation.json";

const ProjectsPage = ({ russian }: { russian?: boolean }) => {
  const t = russian ? translation.ru : translation.en;
  const [maskHide, setMaskHide] = createSignal(false);
  setTimeout(() => {
    setMaskHide(true);
  }, 1000);
  return (
    <>
      <PagesNav russian={russian} />
      <div class="projects_page">
        {!maskHide() && <div class="mask"></div>}
        <div class="projects_page__container">
          <div class="projects__title">
            <h1>{t.projects_title}</h1>
          </div>
          <div id="cambridge" class="cambridge">
            <div class="split_grid cambridge__block1">
              <div class="cambridge__block1_content">
                <h1>Cambridge One Solver</h1>
                <div class="cambridge__block1_body">
                  <h3>
                    {t.projects_cos_description}{" "}
                    <a href="https://www.cambridgeone.org/">Cambridge One</a>
                  </h3>
                </div>
                <div class="cambridge__block1_socials">
                  <a href="https://vk.com/cambridgeonesolver/">
                    <img src={vkLogo} />
                  </a>
                  <a href="https://github.com/karisDev/CambridgeOneSolver/">
                    <img src={githubLogo} />
                  </a>
                  <a href="https://t.me/cambridgeonesolver/">
                    <img src={telegramLogo} />
                  </a>
                </div>
              </div>
              <img src={cambridge1} />
            </div>
            <div class="split_grid cambridge__block2">
              <img src={cambridge2} />
              <div class="cambridge__block2_content">
                <div class="cambridge__block2_holder">
                  <h3>
                    <span>{t.projects_cos_front}</span>
                    <br />
                    Selenium
                    <br />
                    C# WPF
                    <br />
                    Chrome
                  </h3>
                  <div class="cambridge__block2_sep"></div>
                  <h3>
                    <span>{t.projects_cos_back}</span>
                    <br />
                    Python
                  </h3>
                </div>
              </div>
            </div>
            <div class="split_grid cambridge__block3">
              <div class="cambridge__block3_content">
                <h3>
                  {t.projects_cos_count_tests}: <span>120 000+</span>
                  <br />
                  {t.projects_cos_count_users}: <span>900+</span>
                  <br />
                  {t.projects_cos_count_group_members}: <span>200+</span>
                  <br />
                  {t.projects_cos_thanks}
                  <br />
                  <a href="https://www.vk.com/cambridgeonesolver">
                    {t.projects_cos_vk_group}
                  </a>
                </h3>
              </div>
              <img src={cambridge3} />
            </div>
          </div>
          <div id="tb" class="tb">
            <div class="tb__logo">
              <h2>Task</h2>
              <h2>Board</h2>
              {/* <img src={tb1} /> */}
            </div>
            <div class="split_grid tb__block1">
              <div class="tb__block1_content">
                <h3>
                  {t.projects_tb_description}{" "}
                  <a href="https://karisdev.github.io/react-task-board/">
                    Github Pages
                  </a>
                </h3>
                <div class="tb__block1_socials">
                  <a href="https://github.com/karisDev/react-task-board">
                    <img src={githubLogo} />
                  </a>
                </div>
              </div>
              <img src={tb1} />
            </div>
            <div class="split_grid tb__block2">
              <img src={tb2} />
              <div class="tb__block2_content">
                <div>
                  <ul>
                    <li>TypeScript</li>
                    <li>i18n</li>
                    <li>Firebase</li>
                    <li>Router Dom</li>
                    <li>Material UI</li>
                  </ul>
                  <ul>
                    <li>React Hooks</li>
                    <li>Env</li>
                    <li>Cookies</li>
                    <li>Prettier</li>
                    <li>Github Pages</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="split_grid tb__block3">
              <img src={tb3} />
              <div class="tb__block3_content">
                <h3>
                  {t.projects_tb_statement_1}
                  <br />
                  {t.projects_tb_statement_2}
                  <br />
                  {t.projects_tb_statement_3}
                  <br />
                  {t.projects_tb_statement_4}
                </h3>
              </div>
            </div>
          </div>
          <div id="cube" class="cube">
            <div class="cube__title">{t.projects_box_intro}</div>
            <NavLink href="/resume/home">
              <img src={cube_with_logo} />
            </NavLink>
            <h3>
              SCSS&nbsp;&nbsp;SolidJS&nbsp;&nbsp;TypeScript&nbsp;&nbsp;3D
              transform&nbsp;&nbsp;Formspree
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
