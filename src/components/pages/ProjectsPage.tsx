import PagesNav from "../ui/PagesNav";
import ChevronRightSvg from "../../assets/icons/chevron_right.svg";
import BackSvg from "../../assets/icons/back.svg";
import translation from "../../assets/translation.json";
import { createMemo, createSignal, For } from "solid-js";
import { Transition } from "solid-transition-group";
import { Swiper, SwiperSlide } from "swiper/solid";
import "swiper/css";
import Mask from "../ui/Mask";
import NextProjectGesture from "../UI/NextProjectGesture";
import { useProjectItems } from "../../hooks/useProjectItems";

const ANIMATION_DURATION = 250;

const ProjectsPage = ({ russian }: { russian?: boolean }) => {
  const t = russian ? translation.ru : translation.en;
  const projects = useProjectItems({ russian });

  const [activeProject, setActiveProject] = createSignal(projects[0]);

  const nextProjectIndex = createMemo(() => {
    const currentIndex = projects.indexOf(activeProject());

    return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  }, [activeProject]);

  const prevProjectIndex = createMemo(() => {
    const currentIndex = projects.indexOf(activeProject());

    return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  }, [activeProject]);

  const [backgroundColor, setBackgroundColor] = createSignal(
    projects[0].backgroundColor
  );
  const [isDarkTheme, setIsDarkTheme] = createSignal(projects[0].isDarkTheme);
  const [selectedImage, setSelectedImage] = createSignal(0);
  // required for transition effect
  const [show, setShow] = createSignal(true);
  const [showImage, setShowImage] = createSignal(true);

  const handleProjectChange = (index: number) => {
    const project = projects[index];
    if (project === activeProject()) return;

    setBackgroundColor(project.backgroundColor);
    setIsDarkTheme(project.isDarkTheme);
    setShow(false);
    setShowImage(false);
    setTimeout(() => {
      setActiveProject(project);
      setSelectedImage(0);
      setShow(true);
      setShowImage(true);
    }, ANIMATION_DURATION);
  };

  const handleImageChange = (index: number) => {
    if (index === selectedImage()) return;

    setShowImage(false);
    setSelectedImage(index);
    setTimeout(() => {
      setShowImage(true);
    }, ANIMATION_DURATION);
  };

  return (
    <div
      style={{
        background: backgroundColor() ?? "",
      }}
      class={`new_projects_page ${isDarkTheme() ? "dark" : ""}`}
    >
      <Mask colorClass="projects_color" />
      <PagesNav russian={russian} />
      <NextProjectGesture
        navigateNextProject={handleProjectChange}
        isDarkTheme={isDarkTheme}
        nextProjectIndex={nextProjectIndex}
        projects={projects}
      />
      {projects[0] !== activeProject() && (
        <div
          class="previous_project"
          onClick={() => handleProjectChange(prevProjectIndex())}
        >
          <BackSvg />
          <Transition name="img-opacity">
            {show() && <p>{projects[prevProjectIndex()].name}</p>}
          </Transition>
        </div>
      )}
      <div class="projects_nav">
        <Swiper slidesPerView={"auto"} spaceBetween={8}>
          <For each={projects}>
            {(project, index) => (
              <SwiperSlide
                class="project"
                onClick={() => handleProjectChange(index())}
              >
                <div class="image">
                  <img src={project.images[0]} alt="" />
                </div>
                <div class="info">
                  <div class="heading">
                    <h2>{project.name}</h2>
                    <ChevronRightSvg />
                  </div>
                  <p>{project.shortDescription}</p>
                  <div class="bottom">
                    <div class="stack">
                      <For each={project.stackIcons}>{(icon) => icon}</For>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </For>
        </Swiper>
      </div>
      <div class="active_project">
        <div class="active_container">
          <div class="header">
            <Transition name="slide-bottom">
              {show() ? (
                <h2 style={{ color: activeProject().themeColor }}>
                  {activeProject().name}
                </h2>
              ) : (
                <h2></h2>
              )}
            </Transition>
          </div>
          <div class="image">
            <Transition name="img-opacity">
              {showImage() && (
                <img src={activeProject().images[selectedImage()]} alt="" />
              )}
            </Transition>
          </div>
          <div class="body">
            <h3>{t.projects_shots_header}</h3>
            <div class="shots">
              <Transition name="img-opacity">
                {show() && (
                  <Swiper slidesPerView={"auto"}>
                    <For each={activeProject().images}>
                      {(image, index) => (
                        <SwiperSlide
                          style={`--index: ${index()}`}
                          class={`shot ${
                            selectedImage() == index() ? "active" : ""
                          }`}
                          onClick={() => handleImageChange(index())}
                        >
                          <img src={image} alt="" />
                        </SwiperSlide>
                      )}
                    </For>
                  </Swiper>
                )}
              </Transition>
            </div>
            <div class="description">
              <h3>{t.projects_description_header}</h3>
              <div class="description-body">
                <Transition name="description-slide">
                  {show() ? <p>{activeProject().fullDescription}</p> : <p></p>}
                </Transition>
              </div>
            </div>
          </div>
          <div class="info">
            <Transition name="info-slide">
              {show() && (
                <div class="info-container">
                  <For each={activeProject().info}>
                    {(info, index) => (
                      <>
                        <div style={`--index: ${index()}`} class="info-item">
                          <h3>{info.title}</h3>
                          <p>{info.description}</p>
                        </div>
                        <div class="separator"></div>
                      </>
                    )}
                  </For>
                  <div
                    style={`--index: ${activeProject().info.length}`}
                    class="info-item links"
                  >
                    <h3>{t.projects_links_header}</h3>
                    <For each={activeProject().links}>
                      {(link) => (
                        <>
                          <a href={link.url} target="_blank">
                            {link.title}
                          </a>
                        </>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
