import "../../styles/projects.scss";

const ProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
  return (
    <div class="projects_page">
      <h1>
        Мои любимые
        <br />
        проджекты
      </h1>
    </div>
  );
};

export default ProjectsPage;
