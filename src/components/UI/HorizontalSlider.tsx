// based on https://jsfiddle.net/pGR3B/2/

import { Component, createSignal, For, createEffect } from "solid-js";
import ChevronLeftSvg from "../../assets/icons/chevron_left.svg";
import ChevronRightSvg from "../../assets/icons/chevron_right.svg";

interface HorizontalSliderProps {
  title: string;
  items: SliderItem[];
}

interface SliderItem {
  title: string;
  icon: any;
}

const HorizontalSlider: Component<HorizontalSliderProps> = (props) => {
  const incrementValue = 150;
  const speed = 10;
  const step = 10;
  const [slider, setSlider] = createSignal<HTMLDivElement>();
  const [controlsHidden, setControlsHidden] = createSignal(true);

  const sideScroll = (
    element: HTMLDivElement,
    direction: string,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  createEffect(() => {
    if (slider()) {
      const sliderElement = slider();
      sliderElement.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          sideScroll(sliderElement, "left", 10, 10, 10);
        } else if (e.deltaY > 0) {
          sideScroll(sliderElement, "right", 10, 10, 10);
        }
      });
    }
  });

  // if no overflow, hide controls, check on resize
  createEffect(() => {
    const checkWidth = () => {
      if (slider()) {
        const sliderElement = slider();
        if (sliderElement.scrollWidth > sliderElement.clientWidth) {
          setControlsHidden(false);
        } else {
          setControlsHidden(true);
        }
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
  });

  return (
    <div class="horizontal_slider">
      <div class="slider_title">
        <h3>{props.title}</h3>
        <div
          style={{ display: controlsHidden() ? "none" : "flex" }}
          class="slider_controls"
        >
          <button
            class="slider_control"
            onClick={() => {
              if (slider()) {
                sideScroll(slider(), "left", speed, incrementValue, step);
              }
            }}
          >
            <ChevronLeftSvg />
          </button>
          <button
            class="slider_control"
            onClick={() => {
              if (slider()) {
                sideScroll(slider(), "right", speed, incrementValue, step);
              }
            }}
          >
            <ChevronRightSvg />
          </button>
        </div>
      </div>
      <div ref={setSlider} class="slider_container">
        <For each={props.items}>
          {(item) => (
            <div class="slider_item">
              <div class="item_icon">{item.icon}</div>
              <div class="item_title">{item.title}</div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
export default HorizontalSlider;
