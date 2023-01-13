import my_photo from "../../assets/me.png";
import ButtonDefault from "../ui/ButtonDefault";
import PagesNav from "../ui/PagesNav";
import translation from "../../assets/translation.json";
import Mask from "../ui/Mask";

const AboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  const resumeUrl =
    "https://docs.google.com/document/d/1pKpImdxYfvlC2JvJl45pVnfhGKpyAvgh1SZSEQ52Paw/edit?usp=sharing";
  const t = russian ? translation.ru : translation.en;

  return (
    <>
      <PagesNav russian={russian} />
      <div class="about_page">
        <Mask colorClass="about_color" />
        {/* {!maskHide() && <div class="mask"></div>} */}
        <div class="about__content">
          <div class="about__title">
            <h1>{t.about_title}</h1>
          </div>
          <div class="about__general">
            <div class="general_title">
              <h2>{t.about_name}</h2>
              <h4>{t.about_prof}</h4>
            </div>
            <div class="general_content">
              <h3>{t.about_general}</h3>
              <ButtonDefault onClick={() => window.open(resumeUrl)}>
                {t.about_full_resume}
              </ButtonDefault>
            </div>
            <img src={my_photo} />
          </div>
          <div class="about__education">
            <h2>{t.about_education}</h2>
            <div class="education_item">
              <div class="education_date">
                <h3>2022</h3>
              </div>
              <div class="education_content">
                <h2>{t.about_program_infrastructure}</h2>
                <h2>{t.about_croc}</h2>
              </div>
            </div>
            <div class="education_item">
              <div class="education_date">
                <h3>{t.about_3_course}</h3>
              </div>
              <div class="education_content">
                <h2>{t.about_speciality}</h2>
                <h2>{t.about_university}</h2>
              </div>
            </div>
            <div class="education_item">
              <div class="education_date">
                <h3>2019</h3>
              </div>
              <div class="education_content">
                <h2>{t.about_bank_agent}</h2>
                <h2>{t.about_colledge}</h2>
              </div>
            </div>
          </div>
          <div class="about__languages">
            <h2>{t.about_fav_pl}</h2>
            <div class="languages_wrapper">
              <h2>Python</h2>
              <h2>TypeScript</h2>
              <h2>JavaScript</h2>
              <h2>C#</h2>
              <h2>Rust</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
