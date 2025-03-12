// data.js
import { FaArrowCircleRight, FaLaptopCode, FaReact, FaLaravel } from "react-icons/fa";
import { IoSettings, IoDiamondOutline, IoCloudDownload, IoLogoFirebase } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCodeblocks, SiWebgl, SiNuxtdotjs, SiPostgresql } from "react-icons/si";
import { BsBuildingGear } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";

export const tabs = [
  { id: 1, title: "Product", content: "Engineering", icon: <IoSettings />, description: "We provide end-to-end product engineering services, including design, development, testing, and deployment." },
  { id: 2, title: "Data &", content: "Artificial Intelligence", icon: <FaReact />, description: "Our AI solutions help businesses leverage data analytics, machine learning, and automation to drive growth." },
  { id: 3, title: "Hire Dev", content: "", icon: <FaLaptopCode />, description: "We provide skilled developers for your projects, ensuring efficiency and top-notch coding standards." },
  { id: 4, title: "DevOps &", content: "CloudOps", icon: <IoCloudDownload />, description: "We streamline software development with DevOps, CI/CD, cloud solutions, and infrastructure management." },
  { id: 5, title: "Emerging", content: "Technologies", icon: <BsBuildingGear />, description: "Stay ahead with cutting-edge technologies like IoT, AI, blockchain, and AR/VR." },
  { id: 6, title: "Blockchain &", content: "Web 3.0", icon: <SiCodeblocks />, description: "Build decentralized applications with our expertise in blockchain, NFTs, and smart contracts." },
];

export const technologyIcons = [
  { icon: <IoDiamondOutline />, color: "text-red-500" },
  { icon: <RiReactjsFill />, color: "text-sky-300" },
  { icon: <SiWebgl />, color: "text-4xl" },
  { icon: <IoLogoFirebase />, color: "text-yellow-400" },
  { icon: <RiTailwindCssFill />, color: "text-sky-300" },
  { icon: <DiMongodb />, color: "text-green-500" },
  { icon: <FaLaravel />, color: "text-red-500" },
  { icon: <SiNuxtdotjs />, color: "text-green-400" },
  { icon: <SiPostgresql />, color: "text-blue-900" },
];





       // "use client";
// import { useState } from "react";
// import { FaArrowCircleRight } from "react-icons/fa";
// import { tabs, technologyIcons } from "./Developmentapi";

// const TabComponent = () => {
//   const [selectedTab, setSelectedTab] = useState(tabs[0].id);
//   const [zoomedTab, setZoomedTab] = useState(null);

//   const handleTabClick = (tabId) => {
//     setSelectedTab(tabId);
//     setZoomedTab(tabId);
//     setTimeout(() => setZoomedTab(null), 300);
//   };

//   const selectedTabData = tabs.find((tab) => tab.id === selectedTab);

//   return (
//     <div className="w-[93%] m-auto mt-20">
//       <div>
//         <h1 className="text-5xl font-bold">Software Development Services</h1>
//         <h1 className="text-5xl text-sky-400">Forward Planners</h1>
//       </div>

//       <div className="flex mt-6 flex-wrap">
//         <div className="w-full md:w-[50%] grid grid-cols-2 md:grid-cols-3 gap-4">
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               className={`border border-gray-300 rounded-3xl h-[250px] p-6 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300
//                 ${selectedTab === tab.id ? "bg-sky-400 text-white" : "bg-white"}
//                 ${zoomedTab === tab.id ? "scale-110" : "scale-100"}`}
//               onClick={() => handleTabClick(tab.id)}
//             >
//               <div className={`text-5xl ${selectedTab === tab.id ? "text-white" : "text-sky-400"}`}>
//                 {tab.icon}
//               </div>
//               <h1 className="text-2xl mt-4">{tab.title}</h1>
//               <p className="text-xl mt-2">{tab.content}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-2 w-full md:w-[40%] m-auto">
//           <h2 className="text-4xl font-bold">{selectedTabData?.title} {selectedTabData?.content}</h2>
//           <p className="w-[90%] text-lg mt-4">{selectedTabData?.description}</p>

//           <div className="flex flex-wrap gap-4 mt-8">
//             {["Discovery Workshop", "Software Quality Assurance", "Custom Software Development", "Web App Development"].map((workshop, index) => (
//               <p key={index} className="inline-flex items-center">
//                 <FaArrowCircleRight className="mr-2 text-sky-400 font-bold" />
//                 {workshop}
//               </p>
//             ))}
//           </div>

//           <div className="grid grid-cols-7 gap-2 mt-10 text-5xl text-center">
//             {technologyIcons.map((tech, index) => (
//               <p key={index} className={tech.color}>
//                 {tech.icon}
//               </p>
//             ))}
//           </div>

//           <div>
//             <button className="flex gap-3 items-center border border-black mt-16 px-4 py-0 rounded-full hover:bg-sky-400">
//               View More
//               <span className="bg-sky-400 p-3 rounded-full text-lg">
//                 <FaArrowCircleRight className="text-white" />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabComponent;

   