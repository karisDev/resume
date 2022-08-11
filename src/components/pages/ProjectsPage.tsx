import "../../styles/projects.scss";
import vkLogo from "../../assets/images/vk.png";
import telegramLogo from "../../assets/images/telegram.png";
import githubLogo from "../../assets/images/github.png";
import cambridge1 from "../../assets/images/cambridge1.png";
import cambridge2 from "../../assets/images/cambridge2.png";
import cambridge3 from "../../assets/images/cambridge3.png";
import tb1 from "../../assets/images/tb1.png";
import tb2 from "../../assets/images/tb2.png";
import tb3 from "../../assets/images/tb3.png";

const ProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
  return (
    <div class="projects_page">
      <div class="projects_page__container">
        <div class="projects__title">
          <div class="projects__title_col">
            <h2>Мои любимые</h2>
            <h2>Мои лучшие</h2>
          </div>
          <h1>Проекты</h1>
        </div>
        <div id="cambridge" class="cambridge">
          <div class="cambridge__block1">
            <div class="cambridge__block1_content">
              <h1>Cambridge One Solver</h1>
              <div class="cambridge__block1_body">
                <h3>
                  Клиент-серверный проект, в основу которого входит
                  автоматизация браузера с целью ввода правильных ответов на
                  сайте{" "}
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
          <div class="cambridge__block2">
            <img src={cambridge2} />
            <div class="cambridge__block2_content">
              <div class="cambridge__block2_holder">
                <h3>
                  <span>Фронт</span>
                  <br />
                  Selenium
                  <br />
                  C# WPF
                  <br />
                  Chrome
                </h3>
                <div class="cambridge__block2_sep"></div>
                <h3>
                  <span>Бэк</span>
                  <br />
                  Python
                </h3>
              </div>
            </div>
          </div>
          <div class="cambridge__block3">
            <div class="cambridge__block3_content">
              <h3>
                Решенных тестов: <span>120 000+</span>
                <br />
                Пользователей: <span>900+</span>
                <br />
                Человек в группе: <span>200+</span>
                <br />
                Огромное спасибо всем, кто пожертвовал деньги
                <br />
                <a href="https://www.vk.com/cambridgeonesolver">Группа ВК</a>
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
          <div class="tb__block1">
            <div class="tb__block1_content">
              <h3>
                Веб сайт на React для продуктивности. Целью было изучить как
                можно больше практик. Самый сложный технически проект.
                Приложение доступно на{" "}
                <a href="https://karisdev.github.io/react-task-board/">
                  Github Pages
                </a>
              </h3>
              <div class="tb__block1_socials">
                <a href="https://github.com/karisDev/CambridgeOneSolver">
                  <img src={githubLogo} />
                </a>
              </div>
            </div>
            <img src={tb1} />
          </div>
          <div class="tb__block2">
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
          <div class="tb__block3">
            <img src={tb3} />
            <div class="tb__block3_content">
              <h3>
                Адаптивный дизайн
                <br />
                Облачное хранилище
                <br />
                Динамическая тема
                <br />
                Поддержка нескольких языков
              </h3>
            </div>
          </div>
        </div>
        <div id="box" class="box_project"></div>
      </div>
    </div>
  );
};

export default ProjectsPage;
