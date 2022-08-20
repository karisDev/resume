import "../../styles/contacts.scss";
import operator from "../../assets/images/operator.png";
import { createSignal, JSX, Match, Switch } from "solid-js";
import PagesNav from "../UI/PagesNav";
import translation from "../../assets/translation.json";
import InputDefault from "../UI/InputDefault";
import TextareaDeafult from "../UI/TextareaDeault";

enum emailStatus {
  filling,
  sending,
  sent,
  error,
}

const ContactsPage = ({ russian }: { russian?: boolean | undefined }) => {
  const t = russian ? translation.ru : translation.en;
  const [maskHide, setMaskHide] = createSignal(false);
  const [emailState, setEmailState] = createSignal(emailStatus.filling);

  const formSubmit: JSX.EventHandler<HTMLFormElement, Event> = (e) => {
    e.preventDefault();
    const email = e.target[0];
    const title = e.target[1];
    const message = e.target[2];

    const isEmptyOrWhitespace = (str: string) => {
      return !str || str.trim().length === 0;
    };

    // validation
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
      email.focus();
      return;
    }

    if (title.value.length < 3 || isEmptyOrWhitespace(title.value)) {
      title.focus();
      return;
    }

    if (message.value.length < 10 || isEmptyOrWhitespace(message.value)) {
      message.focus();
      return;
    }

    // send email
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mqkjkrll", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setEmailState(emailStatus.sent);
          email.value = "";
          title.value = "";
          message.value = "";
        } else {
          setEmailState(emailStatus.error);
        }
      }
    };
    xhr.send(
      JSON.stringify({
        email: email.value,
        title: title.value,
        message: message.value,
      })
    );
    setEmailState(emailStatus.sending);
  };

  setTimeout(() => {
    setMaskHide(true);
  }, 1000);

  return (
    <>
      <PagesNav russian={russian} />
      <div class="contacts_page">
        <div class="contacts_content">
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
            {/* <h3>{t.contacts_under_development}</h3> */}
          </div>
          <div class="contacts__form">
            <h3>{t.contacts_suggest_form}</h3>
            <form onSubmit={formSubmit}>
              <Switch>
                <Match when={emailState() == emailStatus.filling}>
                  <InputDefault name="email" placeholder={t.contacts_email} />
                  <InputDefault
                    name="title"
                    placeholder={t.contacts_email_title}
                  />
                  <TextareaDeafult placeholder={t.contacts_message} />
                  <button>{t.contacts_send_form}</button>
                </Match>
                <Match when={emailState() == emailStatus.error}>
                  <h3>{t.contacts_email_send_error}</h3>
                </Match>
                <Match when={emailState() == emailStatus.sent}>
                  <h3>{t.contacts_email_send_success}</h3>
                </Match>
                <Match when={emailState() == emailStatus.sending}>
                  <h3>{t.contacts_email_send_sending}</h3>
                </Match>
              </Switch>
            </form>
          </div>
        </div>
        {!maskHide() && <div class="mask"></div>}
      </div>
    </>
  );
};

export default ContactsPage;
