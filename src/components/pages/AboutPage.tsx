import { createSignal } from "solid-js";
import my_photo from "../../assets/me.png";
import "../../styles/about.scss";

const AboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  const [maskHide, setMaskHide] = createSignal(false);
  setTimeout(() => {
    setMaskHide(true);
  }, 1000);
  return (
    <div class="about_page">
      {!maskHide() && <div class="mask"></div>}
      <div class="about__content">
        <div class="about__title">
          <h1>Обо мне</h1>
        </div>
        <div class="about__general">
          <div class="general_content">
            <h2>Киреев Кирилл</h2>
            <h4>Frontend разработчик, 20 лет</h4>
            <h3>
              Родился и живу в Москве. Начал заниматься программированием c 6
              класса. Любовь к автоматизации и созданию красивых и интуитивных
              интерфейсов.
            </h3>
          </div>
          <img src={my_photo} />
        </div>
        <div class="about__education">
          <h2>Образование</h2>
          <div class="education_item">
            <div class="education_date">
              <h3>2022</h3>
            </div>
            <div class="education_content">
              <h2>Программная инфраструктура</h2>
              <h2>КРОК</h2>
            </div>
          </div>
          <div class="education_item">
            <div class="education_date">
              <h3>3 курс</h3>
            </div>
            <div class="education_content">
              <h2>Информационные Системы и Технологии</h2>
              <h2>НИТУ МИСиС</h2>
            </div>
          </div>
          <div class="education_item">
            <div class="education_date">
              <h3>2019</h3>
            </div>
            <div class="education_content">
              <h2>Агент банка 3 разряда</h2>
              <h2>Московский колледж бизнес-технологий</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
