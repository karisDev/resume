import "../../styles/buttons.scss";
import { Component, JSX } from "solid-js";

const ButtonDefault = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button class={"button_default " + props.class}>{props.children}</button>
  );
};

export default ButtonDefault;
