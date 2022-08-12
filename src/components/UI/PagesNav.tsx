import { useNavigate } from "solid-app-router";
import cube from "../../assets/images/cube_transparent.png";

const PagesNav = () => {
  const navigate = useNavigate();
  return (
    <div class="navigation">
      <a onClick={() => navigate("/resume/home")}>
        <img src={cube} />
      </a>
      <a>About</a>
      <a>Projects</a>
      <a>Contacts</a>
    </div>
  );
};

export default PagesNav;
