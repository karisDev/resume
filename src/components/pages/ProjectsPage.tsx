import "../../styles/projects.scss";
import cambridge1 from "../../assets/images/cambridge1.png";
import cambridge2 from "../../assets/images/cambridge2.png";
import cambridge3 from "../../assets/images/cambridge3.png";

const ProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
  return (
    <div class="projects_page">
      <div class="projects_page__container">
        <div class="projects__title">
          <h2>Мои любимые</h2>
          <h2>Мои лучшие</h2>
          <h1>Проекты</h1>
        </div>
        <div class="cambridge">
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
            </div>
            <img src={cambridge1} />
          </div>
          {/* <div class="block2_transition"></div> */}
          <div class="cambridge__block2">
            <img src={cambridge2} />
            <div class="cambridge__block2_content">
              <div class="cambridge__block2_holder">
                <h3>
                  <span>Фронт</span>
                  <br />
                  Selenium
                  <br />
                  Chrome
                  <br />
                  C# WPF
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
      </div>
    </div>
  );
};

export default ProjectsPage;
