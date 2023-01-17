import PagesNav from "../ui/PagesNav";

const NewProjectsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const projects = [
    {
      name: "Task Board",
      description: "Органайзер с большим стеком. Один из первых проектов.",
    },
  ];
  return (
    <div class="new_projects_page">
      <PagesNav />
    </div>
  );
};

export default NewProjectsPage;
