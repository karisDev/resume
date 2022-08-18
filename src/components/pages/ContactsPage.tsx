import "../../styles/contacts.scss";
import operator from "../../assets/images/operator.png";
import { createSignal } from "solid-js";
import PagesNav from "../UI/PagesNav";
import translation from "../../assets/translation.json";

const ContactsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const t = russian ? translation.ru : translation.en;
  const [maskHide, setMaskHide] = createSignal(false);

  setTimeout(() => {
    setMaskHide(true);
  }, 1000);

  return (
    <>
      <PagesNav russian={russian} />
      <div class="contacts_page">
        {!maskHide() && <div class="mask"></div>}
        <div class="contacts__title">
          <img src={operator} />
          <h1>{t.contacts_title}</h1>
        </div>
        <div class="contacts__socials">
          <h3>{t.contacts_via}</h3>
          <br />
          <h3>telegram: @biskwiq</h3>
          <h3>email: kirill@duck.com</h3>
          <br />
          <h3>{t.contacts_under_development}</h3>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
