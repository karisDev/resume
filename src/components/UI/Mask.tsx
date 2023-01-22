import { createSignal } from "solid-js";

const Mask = ({ colorClass }: { colorClass: string }) => {
  const [maskHide, setMaskHide] = createSignal(false);

  setTimeout(() => {
    setMaskHide(true);
  }, 1000);

  return <>{!maskHide() && <div class={"page-mask " + colorClass}></div>}</>;
};

export default Mask;
