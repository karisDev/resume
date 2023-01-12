import { Component, JSX } from "solid-js";

interface TextareaDeafultProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onInput?: JSX.EventHandler<HTMLTextAreaElement, Event>;
}

const TextareaDeafult: Component<TextareaDeafultProps> = ({
  onInput,
  ...props
}) => {
  let textareaRef: HTMLTextAreaElement | null = null;
  const updateHeight = () => {
    if (textareaRef) {
      textareaRef.style.height = "auto";
      textareaRef.style.height = textareaRef.scrollHeight + "px";
    }
  };
  window.addEventListener("resize", updateHeight);

  return (
    <textarea
      class="textarea_default"
      ref={textareaRef}
      onInput={(e) => {
        updateHeight();
        onInput && onInput(e);
      }}
      {...props}
    />
  );
};

export default TextareaDeafult;
