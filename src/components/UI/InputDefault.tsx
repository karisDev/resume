import { Component, JSX } from "solid-js";

const InputDefault: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input class="input_default" {...props} />;
};

export default InputDefault;
