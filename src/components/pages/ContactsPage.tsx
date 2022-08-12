import "../../styles/contacts.scss";
import operator from "../../assets/images/operator.png";
import { createSignal } from "solid-js";

const ContactsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const [maskHide, setMaskHide] = createSignal(false);
  setTimeout(() => {
    setMaskHide(true);
  }, 1000);
  return (
    <div class="contacts_page">
      {!maskHide() && <div class="mask"></div>}
      <div class="contacts__title">
        <img src={operator} />
        <h1>Контакты</h1>
      </div>
      <div class="contacts__socials">
        <h3>Связаться через соц. сети:</h3>
        <h3>telegram: biskwiq</h3>
        <h3>email: kirill@duck.com</h3>
        <h3>страница скоро будет готова</h3>
      </div>
    </div>
  );
};

export default ContactsPage;
