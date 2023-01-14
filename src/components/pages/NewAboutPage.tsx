import PagesNav from "../ui/PagesNav";
import my_photo from "../../assets/about_page/me.png";
// import "../../assets/about_page/download.svg"; as svg component
import DownloadSvg from "../../assets/about_page/icons/download.svg";
import GithubSvg from "../../assets/about_page/icons/github.svg";

const NewAboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  return (
    <>
      <PagesNav russian={russian} />
      <main class="new_about_page">
        <section class="greetings">
          <div class="body">
            <h1>
              Привет, я Кирилл
              <br />
              Приятно познакомиться!
            </h1>
            <div class="button_group">
              <div class="shadow">
                <a
                  class="link resume"
                  href="https://docs.google.com/document/d/1pKpImdxYfvlC2JvJl45pVnfhGKpyAvgh1SZSEQ52Paw/edit?usp=sharing"
                  target="_blank"
                >
                  <DownloadSvg />
                  <p>
                    Полное
                    <br />
                    Резюме
                  </p>
                </a>
              </div>
              <div class="shadow">
                <a
                  class="link github"
                  href="https://github.com/karisDev"
                  target="_blank"
                >
                  <GithubSvg />
                  <p>
                    Посетить
                    <br />
                    GitHub
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="img_container">
            <img src={my_photo} />
          </div>
        </section>
        <section class="about">
          <div class="content">
            <div class="body">
              <h1>Фронтенд разработчик, 20 лет</h1>
              <p>
                Родился и живу в Москве. Начал заниматься программированием c 5
                класса на Quick Basic. Любовь к автоматизации и созданию
                красивых, интуитивных интерфейсов. Еще очень люблю английский
                язык.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewAboutPage;
