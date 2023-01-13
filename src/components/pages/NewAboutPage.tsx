import PagesNav from "../ui/PagesNav";

const NewAboutPage = ({ russian }: { russian?: boolean | undefined }) => {
  return (
    <>
      <PagesNav russian={russian} />
    </>
  );
};

export default NewAboutPage;
