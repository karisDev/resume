import { createEffect, createSignal, JSX, onCleanup } from "solid-js";

interface PullToRefreshProps {
  onRefresh: () => void;
  children: JSX.Element;
}

const DRAG_GOAL = 300;

export default function PullToRefresh(props: PullToRefreshProps) {
  const [refreshing, setRefreshing] = createSignal(false);
  const [dragging, setDragging] = createSignal(false);
  const [dragGoalReached, setDragGoalReached] = createSignal(false);
  const [currentDrag, setCurrentDrag] = createSignal(0);
  const [logs, setLogs] = createSignal(0);

  function easeFunc(x: number): number {
    return 1 - Math.cos((x * Math.PI) / 2);
  }

  const updateModalHeight = (height: number) => {
    const newHeight = Math.min(
      easeFunc(height / DRAG_GOAL) * DRAG_GOAL,
      DRAG_GOAL
    );
    setCurrentDrag(newHeight);
    setLogs(currentDrag() / DRAG_GOAL);
    document
      .querySelector("#refresh_modal")!
      .setAttribute("style", `height: ${newHeight}px;`);
    document
      .querySelector("#inner_content")!
      .setAttribute("style", `transform: translateY(-${newHeight}px);`);
  };

  const touchStartHandler = (e: TouchEvent) => {
    // check if client scrolled to bottom of the page
    if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
      return;
    }
    setDragging(true);

    const startY = e.touches[0].clientY;
    let endY = 0;
    const touchMoveHandler = (e: TouchEvent) => {
      console.log(e);
      // setLogs((prev) => prev + JSON.stringify(e));
      endY = e.touches[0].clientY;
      updateModalHeight(startY - endY);

      setDragGoalReached(startY - endY > DRAG_GOAL);
      console.log(endY, startY);
    };

    const touchEndHandler = () => {
      if (startY - endY > DRAG_GOAL && !refreshing()) {
        setRefreshing(true);
        props.onRefresh();
      }
      setDragging(false);
      setDragGoalReached(false);
      updateModalHeight(0);
      window.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("touchend", touchEndHandler);
    };

    window.addEventListener("touchmove", touchMoveHandler);
    window.addEventListener("touchend", touchEndHandler);
  };

  onCleanup(() => {
    window.removeEventListener("touchstart", touchStartHandler);
  });

  createEffect(() => {
    if (refreshing()) {
      setTimeout(() => setRefreshing(false), 1000);
    }
  }, [refreshing()]);

  return (
    <div
      class="pull_to_refresh"
      style={`position: relative;`}
      onTouchStart={touchStartHandler}
    >
      {currentDrag()}
      <br />
      {logs()}
      <div id="inner_content">{props.children}</div>
      <div id="refresh_modal" class="refresh_modal" style="height: 0">
        <div class={`refresh_chevron ${dragGoalReached() && "reached"}`}>
          <svg
            width="64"
            height="64"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`M5 ${
                16 - Math.min(currentDrag() / DRAG_GOAL / 2, 0.467) * 15
              }L12 9L19 ${
                16 - Math.min(currentDrag() / DRAG_GOAL / 2, 0.467) * 15
              }`}
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        {refreshing() && <div class="refreshing">Refreshing...</div>}
        {dragging() && !refreshing() && (
          <div class="dragging">
            {dragGoalReached() ? "Release to refresh" : "Pull to refresh"}
          </div>
        )}
      </div>
    </div>
  );
}
