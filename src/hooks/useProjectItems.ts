import FirebaseSvg from "../assets/icons/firebase.svg";
import MuiSvg from "../assets/icons/mui.svg";
import TypescriptSvg from "../assets/icons/ts.svg";
import SeleniumSvg from "../assets/icons/selenium.svg";
import CsharpSvg from "../assets/icons/csharp.svg";
import PythonSvg from "../assets/icons/python.svg";
import ReactSvg from "../assets/icons/reactjs.svg";
import JavaScriptSvg from "../assets/icons/js.svg";
import SassSvg from "../assets/icons/sass.svg";
import SolidSvg from "../assets/icons/solidjs.svg";
import ReduxSvg from "../assets/icons/redux.svg";
import LeafletSvg from "../assets/icons/leaflet.svg";
import SocketIoSvg from "../assets/icons/socketio.svg";
import MobxSvg from "../assets/icons/mobx.svg";
import TailwindSvg from "../assets/icons/tailwind.svg";

import project_tb1 from "../assets/images/tb1.png";
import project_tb2 from "../assets/images/tb2.png";
import project_tb3 from "../assets/images/tb3.png";
import project_tb4 from "../assets/images/tb4.png";
import project_cs1 from "../assets/images/cambridge1.png";
import project_cs2 from "../assets/images/cambridge2.png";
import project_cs3 from "../assets/images/cambridge3.png";
import project_aidoc1 from "../assets/images/aidoc1.png";
import project_aidoc2 from "../assets/images/aidoc2.png";
import project_aidoc3 from "../assets/images/aidoc3.png";
import project_aidoc4 from "../assets/images/aidoc4.png";
import project_vknft1 from "../assets/images/vknft1.png";
import project_vknft2 from "../assets/images/vknft2.png";
import project_vknft3 from "../assets/images/vknft3.png";
import project_vknft4 from "../assets/images/vknft4.png";
import project_vknft5 from "../assets/images/vknft5.png";
import project_lct1 from "../assets/images/lct1.png";
import project_lct2 from "../assets/images/lct2.png";
import project_lct3 from "../assets/images/lct3.png";
import project_lct4 from "../assets/images/lct4.png";
import project_lct5 from "../assets/images/lct5.png";
import project_directions1 from "../assets/images/directions1.png";
import project_directions2 from "../assets/images/directions2.png";
import project_directions3 from "../assets/images/directions3.png";
import project_resume1 from "../assets/images/resume1.png";
import project_resume2 from "../assets/images/resume2.png";
import project_resume3 from "../assets/images/resume3.png";
import project_mapquiz1 from "../assets/images/map_quiz1.png";
import project_mapquiz2 from "../assets/images/map_quiz2.png";
import project_mapquiz3 from "../assets/images/map_quiz3.png";
import project_tth1 from "../assets/images/tth1.png";
import project_tth2 from "../assets/images/tth2.png";
import project_tth3 from "../assets/images/tth3.png";
import project_doctorai1 from "../assets/images/doctorai1.png";
import project_doctorai2 from "../assets/images/doctorai2.png";
import project_doctorai3 from "../assets/images/doctorai3.png";
import project_doctorai4 from "../assets/images/doctorai4.png";
import translation from "../assets/translation.json";

export interface Project {
  name?: string;
  shortDescription?: string;
  fullDescription?: string;
  backgroundColor: string;
  themeColor?: string;
  images?: string[];
  info?: {
    title: string;
    description: string;
  }[];
  stackIcons?: string[];
  links?: {
    title: string;
    url: string;
  }[];
  isDarkTheme?: boolean;
}

export const useProjectItems = ({ russian }: { russian: boolean }) => {
  const t = russian ? translation.ru : translation.en;

  const projects: Project[] = [
    {
      // doctor ai
      ...t.projects_project_items.doctor_ai,
      backgroundColor: "#6DB49B",
      themeColor: "#fff",
      images: [
        project_doctorai1,
        project_doctorai2,
        project_doctorai3,
        project_doctorai4,
      ],
      stackIcons: [TailwindSvg, TypescriptSvg, MobxSvg],
      isDarkTheme: true,
    },
    {
      // true tech hack
      ...t.projects_project_items.true_tech,
      backgroundColor: "#282828",
      themeColor: "#F90B1B",
      images: [project_tth1, project_tth2, project_tth3],
      stackIcons: [ReactSvg, TypescriptSvg, SassSvg],
      isDarkTheme: true,
    },
    {
      // map quiz
      ...t.projects_project_items.map_quiz,
      backgroundColor: "#DDEBFF",
      themeColor: "#3275F6",
      images: [project_mapquiz1, project_mapquiz2, project_mapquiz3],
      stackIcons: [ReactSvg, JavaScriptSvg, SassSvg, LeafletSvg, SocketIoSvg],
      isDarkTheme: false,
    },
    {
      // vk nft
      ...t.projects_project_items.vknft,
      backgroundColor: "#EDEEF0",
      themeColor: "#3275F6",
      images: [
        project_vknft1,
        project_vknft2,
        project_vknft3,
        project_vknft4,
        project_vknft5,
      ],
      stackIcons: [ReduxSvg, ReactSvg, TypescriptSvg, SassSvg],
    },
    {
      // aidoc
      ...t.projects_project_items.aidoc,
      backgroundColor: "#1c8dd9",
      themeColor: "#fff",
      images: [project_aidoc1, project_aidoc2, project_aidoc3, project_aidoc4],
      stackIcons: [ReactSvg, JavaScriptSvg, SassSvg],
      isDarkTheme: true,
    },
    {
      // lct
      ...t.projects_project_items.lct,
      backgroundColor: "#9b1827",
      images: [
        project_lct5,
        project_lct1,
        project_lct2,
        project_lct3,
        project_lct4,
      ],
      isDarkTheme: true,
      stackIcons: [ReactSvg, TypescriptSvg, SassSvg],
    },
    {
      // cambridge solver
      ...t.projects_project_items.cos,
      backgroundColor: "#303030",
      images: [project_cs1, project_cs2, project_cs3],
      themeColor: "#FFC107",
      stackIcons: [CsharpSvg, PythonSvg, SeleniumSvg],
      isDarkTheme: true,
    },
    {
      // task board
      ...t.projects_project_items.task_board,
      backgroundColor: "#f1f1f1",
      images: [project_tb1, project_tb2, project_tb3, project_tb4],
      stackIcons: [FirebaseSvg, MuiSvg, TypescriptSvg],
      isDarkTheme: false,
    },
    {
      // directions
      ...t.projects_project_items.directions,
      backgroundColor: "#3f51b5",
      isDarkTheme: true,
      images: [project_directions1, project_directions2, project_directions3],
      stackIcons: [CsharpSvg],
    },
    {
      // resume
      ...t.projects_project_items.resume,
      backgroundColor: "#221d41",
      images: [project_resume1, project_resume2, project_resume3],
      stackIcons: [SolidSvg, TypescriptSvg, SassSvg],
      isDarkTheme: true,
    },
  ];

  return projects;
};
