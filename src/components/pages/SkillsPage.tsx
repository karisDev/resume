import { createSignal } from "solid-js";
import "../../styles/skills.scss";

const SkillsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const [maskHide, setMaskHide] = createSignal(false);
  setTimeout(() => {
    setMaskHide(true);
  }, 1000);
  return (
    <div class="skills_page">
      {!maskHide() && <div class="mask"></div>}
      <h1>about</h1>
    </div>
  );
};

export default SkillsPage;
