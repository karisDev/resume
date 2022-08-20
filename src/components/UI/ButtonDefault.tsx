import "../../styles/buttons.scss";
import { Component, JSX } from "solid-js";

const ButtonDefault: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button class={"button_default " + props.class} {...props}>
      {props.children}
    </button>
  );
};

export default ButtonDefault;
