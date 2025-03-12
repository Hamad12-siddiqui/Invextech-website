// data.js
import { FaCss3Alt, FaJs, FaHtml5, FaSass, FaVuejs, FaAngular, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { SiMeteor, SiWebgl, SiPostgresql, SiExpress } from "react-icons/si";
import { TbBrandNuxt } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { GrDocker } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
export const categories = [
  "Front-End",
  "Back-End",
  "Low/No code",
  "Database",
  "Dev-ops",
  "Mobile",
  "AI & ML",
];

export const iconData = [
  { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5", category: "Front-End" },
  { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3", category: "Front-End" },
  { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript", category: "Front-End" },
  { icon: <FaSass />, color: "#CC6699", name: "Sass", category: "Front-End" },
  { icon: <GrReactjs />, color: "#61DAFB", name: "React", category: "Front-End" },
  { icon: <FaVuejs />, color: "#4FC08D", name: "Vue.js", category: "Front-End" },
  { icon: <FaAngular />, color: "#DD0031", name: "Angular", category: "Front-End" },
  { icon: <SiMeteor />, color: "#DE4F4F", name: "Meteor", category: "Front-End" },
  { icon: <TbBrandNuxt />, color: "#00C58E", name: "Nuxt.js", category: "Front-End" },
  { icon: <SiWebgl />, color: "#990000", name: "WebGL", category: "Front-End" },
  { icon: <SiPostgresql />, color: "#336791", name: "PostgreSQL", category: "Database" },
  { icon: <DiMongodb />, color: "#47A248", name: "MongoDB", category: "Database" },
  { icon: <RiTailwindCssFill />, color: "#38B2AC", name: "Tailwind CSS", category: "Front-End" },
  { icon: <IoLogoFirebase />, color: "#FFCA28", name: "Firebase", category: "Back-End" },
  { icon: <FaReact />, color: "#61DAFB", name: "React", category: "Front-End" },
  { icon: <GrMysql />, color: "#4479A1", name: "MySQL", category: "Database" },
  { icon: <FaPhp />, color: "#777BB4", name: "PHP", category: "Back-End" },
  { icon: <FaLaravel />, color: "#FF2D20", name: "Laravel", category: "Back-End" },
  { icon: <SiExpress />, color: "#000000", name: "Express.js", category: "Back-End" },
  { icon: <FaGooglePlus />, color: "#00ADD8", name: "Go (Gin, Echo, Fiber)", category: "Back-End" },
  { icon: <FaRegCircle />, color: "#FF9900", name: "Bubbles", category: "Low/No code" },
  { icon: <FaPython />, color: "#306998", name: "Python", category: "Back-End" },
  { icon: <FaBoltLightning />, color: "#FF6F00", name: "TensorFlow", category: "AI & ML" },
  { icon: <FaChartBar />, color: "#1F77B4", name: "Data Science", category: "AI & ML" },
  { icon: <AiOutlineGlobal />, color: "#3880FF", name: "Ionic", category: "Mobile" },
  { icon: <IoLogoGameControllerB />, color: "#F7DF1E", name: "Unity", category: "Mobile" },
  { icon: <FaRegCalendarAlt />, color: "#3498DB", name: "Xamarin", category: "Mobile" },
  { icon: <GrDocker  />, color: "#3498DB", name: "Docker ", category: "Dev-ops" },
  { icon: <IoSettings /> , color: "#D3D3D3", name: "Ansible ", category: "Dev-ops" },
];

