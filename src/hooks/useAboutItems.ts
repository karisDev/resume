import LanguagesTitleSvg from "../assets/icons/languages_title.svg";
import LanguageCsharp from "../assets/icons/csharp.svg";
import LanguageCSS from "../assets/icons/css.svg";
import LanguageHTML from "../assets/icons/html.svg";
import LanguageJS from "../assets/icons/js.svg";
import LanguagePython from "../assets/icons/python.svg";
import LanguageTS from "../assets/icons/ts.svg";
import LanguageDart from "../assets/icons/dart.svg";
import ReactJSSvg from "../assets/icons/reactjs.svg";
import NextJSSvg from "../assets/icons/nextjs.svg";
import SolidJSSvg from "../assets/icons/solidjs.svg";
import FlutterSvg from "../assets/icons/flutter.svg";
import FirebaseSvg from "../assets/icons/firebase.svg";
import MaterialUISvg from "../assets/icons/mui.svg";
import SassSvg from "../assets/icons/sass.svg";
import ThreeJSSvg from "../assets/icons/threejs.svg";
import ReduxSvg from "../assets/icons/redux.svg";
import VkUiSvg from "../assets/icons/vkui.svg";
import ThinkingEmojiSvg from "../assets/icons/thinking_emoji.svg";
import GitSvg from "../assets/icons/git.svg";
import LinuxSvg from "../assets/icons/linux.svg";
import SeleniumSvg from "../assets/icons/selenium.svg";
import DockerSvg from "../assets/icons/docker.svg";
import FigmaSvg from "../assets/icons/figma.svg";
import LeafletSvg from "../assets/icons/leaflet.svg";
import SocketIoSvg from "../assets/icons/socketio.svg";

const useAboutItems = () => {
  const programmingItems = [
    {
      title: "TypeScript",
      icon: LanguageTS,
    },
    {
      title: "JavaScript",
      icon: LanguageJS,
    },
    {
      title: "Python",
      icon: LanguagePython,
    },
    {
      title: "HTML",
      icon: LanguageHTML,
    },
    {
      title: "CSS",
      icon: LanguageCSS,
    },
    {
      title: "C#",
      icon: LanguageCsharp,
    },
    {
      title: "Dart",
      icon: LanguageDart,
    },
  ];
  const frameworksItems = [
    {
      title: "ReactJS",
      icon: ReactJSSvg,
    },
    {
      title: "NextJS",
      icon: NextJSSvg,
    },
    {
      title: "SolidJS",
      icon: SolidJSSvg,
    },
    {
      title: "Flutter",
      icon: FlutterSvg,
    },
  ];
  const librariesItems = [
    {
      title: "Redux",
      icon: ReduxSvg,
    },
    {
      title: "Leaflet",
      icon: LeafletSvg,
    },
    {
      title: "Socket.io",
      icon: SocketIoSvg,
    },
    {
      title: "Firebase",
      icon: FirebaseSvg,
    },
    {
      title: "VKUI",
      icon: VkUiSvg,
    },
    {
      title: "MUI",
      icon: MaterialUISvg,
    },
    {
      title: "Sass",
      icon: SassSvg,
    },
    {
      title: "ThreeJS",
      icon: ThreeJSSvg,
    },
    {
      title: "i18next",
      icon: LanguagesTitleSvg,
    },
    {
      title: "Axios",
      icon: ThinkingEmojiSvg,
    },
  ];

  const otherItems = [
    {
      title: "Git",
      icon: GitSvg,
    },
    {
      title: "Linux",
      icon: LinuxSvg,
    },
    {
      title: "Selenium",
      icon: SeleniumSvg,
    },
    {
      title: "Docker",
      icon: DockerSvg,
    },
    {
      title: "Figma",
      icon: FigmaSvg,
    },
    {
      title: "WPF",
      icon: ThinkingEmojiSvg,
    },
  ];

  return { programmingItems, frameworksItems, librariesItems, otherItems };
};

export default useAboutItems;
