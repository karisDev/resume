import "../../styles/projects.scss";
import cambridge1 from "../../assets/images/cambridge1.png";

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
            <div class="block1_content">
              <h1>Cambridge One Solver</h1>
              <div class="block1_body">
                <h3>
                  Большой клиент-серверный проект, в основу которого входит
                  автоматизация браузера с целью ввода правильных ответов на
                  сайте{" "}
                  <a href="https://www.cambridgeone.org/">Cambridge One</a>
                </h3>
              </div>
            </div>
            <img class="image" src={cambridge1} />
          </div>
          {/* <div class="block2_transition"></div> */}
          <div class="cambridge_block2">
            <h2>
              Фронт:
              <br />
              Selenium
              <br />
              Chrome
              <br />
              C# WPF
            </h2>
            <h2>
              Бэк:
              <br />
              Python
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
