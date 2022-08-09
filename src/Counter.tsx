import { createSignal } from "solid-js";

export default function Counter() {
  const [counter, setCounter] = createSignal(0);
  setInterval(setCounter, 1000, (c: number) => c + 1);

  return <h1>{counter()}</h1>;
}
