import { Component, JSX } from "solid-js";
import "../../styles/inputs.scss";

const InputDefault: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input class="input_default" {...props} />;
};

export default InputDefault;
