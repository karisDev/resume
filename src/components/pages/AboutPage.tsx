import { createSignal } from "solid-js";
import "../../styles/about.scss";

const AboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  const [maskHide, setMaskHide] = createSignal(false);
  setTimeout(() => {
    setMaskHide(true);
  }, 1000);
  return (
    <div class="about_page">
      {!maskHide() && <div class="mask"></div>}
      <div class=""></div>
      <h1>Обо мне</h1>
    </div>
  );
};

export default AboutPage;
