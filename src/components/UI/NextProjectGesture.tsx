import {
  Accessor,
  Component,
  createEffect,
  createSignal,
  onCleanup,
} from "solid-js";
import { Project } from "../../hooks/useProjectItems";

interface Props {
  isDarkTheme: Accessor<boolean>;
  nextProjectIndex: Accessor<number>;
  projects: Project[];
  navigateNextProject: (index: number) => void;
}

const NextProjectGesture: Component<Props> = ({
  isDarkTheme,
  nextProjectIndex,
  projects,
  navigateNextProject,
}) => {
  const DRAG_GOAL = 250;
  const [draggedHeight, setDraggedHeight] = createSignal(0);
  const [chevronAngle, setChevronAngle] = createSignal(0);
  let dragging = false;
  let draggingHeight = 0;
  let modal = null;

  const touchStartHandler = (e: TouchEvent) => {
    if (window.scrollY + window.innerHeight + 5 < document.body.scrollHeight)
      return;
    const startY = e.touches[0].clientY;
    const touchMoveHandler = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (currentY + draggingHeight > startY + 5) {
        dragging = false;
        draggingHeight = 0;
        setDraggedHeight(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.removeEventListener("touchmove", touchMoveHandler);
        window.removeEventListener("touchend", touchEndHandler);
        modal.style.opacity = `0`;
        return;
      }

      dragging = true;
      draggingHeight = startY - currentY;
      setDraggedHeight(draggingHeight);
    };
    const touchEndHandler = () => {
      if (draggingHeight > DRAG_GOAL - 20) {
        navigateNextProject(nextProjectIndex());
        window.scrollTo({ top: 0 });
      }
      dragging = false;
      draggingHeight = 0;
      setDraggedHeight(0);
      window.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("touchend", touchEndHandler);
      modal.style.opacity = `0`;
    };
    window.addEventListener("touchmove", touchMoveHandler);
    window.addEventListener("touchend", touchEndHandler);
  };

  const drawModal = () => {
    requestAnimationFrame(drawModal);
    if (!dragging) return;
    if (draggingHeight < 0) return;

    const modalHeight = draggingHeight < DRAG_GOAL ? draggingHeight : DRAG_GOAL;
    modal.style.height = `${modalHeight}px`;
    modal.style.opacity = `1`;
    const angle = 16 - Math.min(draggedHeight() / DRAG_GOAL / 2, 0.467) * 15;
    setChevronAngle(angle);
  };

  createEffect(() => {
    modal = document.getElementById("next_project_popup");
    modal.style.height = "0px";
    modal.style.opacity = `0`;
    requestAnimationFrame(drawModal);

    window.addEventListener("touchstart", touchStartHandler);
    onCleanup(() => {
      window.removeEventListener("touchstart", touchStartHandler);
    });
  }, []);

  return (
    <div
      id="next_project_popup"
      class={isDarkTheme() ? "dark" : ""}
      style={{
        "--gradientColor": projects[nextProjectIndex()].backgroundColor ?? "",
      }}
    >
      <div
        class={`popup_chevron ${
          draggedHeight() >= DRAG_GOAL - 20 && "reached"
        }`}
      >
        <svg
          width="64"
          height="64"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M5 ${chevronAngle()}L12 9L19 ${chevronAngle()}`}
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <img class="image" src={projects[nextProjectIndex()].images[0]} alt="" />
      <p class="next_project_title">{projects[nextProjectIndex()].name}</p>
    </div>
  );
};

export default NextProjectGesture;
