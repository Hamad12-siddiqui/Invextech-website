"use client";
import { useState } from "react";
import {
  FaArrowCircleRight,
  FaLaptopCode,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import {
  IoSettings,
  IoCloudDownload,
} from "react-icons/io5";
import { SiCodeblocks } from "react-icons/si";
import { BsBuildingGear } from "react-icons/bs";
import Image from 'next/image';
import { SiReactquery } from "react-icons/si";

const tabs = [
  {
    id: 1,
    title: "Product",
    content: "Engineering",
    icon: <IoSettings />,
    description:
      "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.",
  },
  {
    id: 2,
    title: "Data &",
    content: "Artificial Intelligence",
    icon: <SiReactquery />,
    description:
"We drive your business forward by crafting tomorrow's AI solutions today, ensuring they are futuristic enough to align with your unique goals and challenges."
  },
  {
    id: 3,
    title: "Hire Dev",
    content: "",
    icon: <FaLaptopCode />,
    description:
"Invextech helps you hire, acquire, and retain top development talent. Boost your in-house team or build your own dev center."
  },
  {
    id: 4,
    title: "DevOps &",
    content: "CloudOps",
    icon: <IoCloudDownload />,
    description:
"We optimize operations with advanced DevOps and CloudOps strategies while boosting agility & scalability in technology deployments."
  },
  {
    id: 5,
    title: "Emerging",
    content: "Technologies",
    icon: <BsBuildingGear />,
    description:
      "We’re dedicated to the latest IT trends, integrating immersive experiences, augmented reality, and virtual reality to provide you with reliable and innovative solutions."
  },
  {
    id: 6,
    title: "Blockchain &",
    content: "Web 3.0",
    icon: <SiCodeblocks />,
    description:
"We provide innovative solutions in blockchain technology, developing secure and decentralized applications, enhancing digital trust, and improving operational efficiency."
  },
];

const technologyIconsMap = {
  1: [
    { imgSrc: "/images/Group.png", alt: "Diamond", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_41_7b3f5b7723 1.png", alt: "React", width: 48, height: 48 },
    { imgSrc: "/images/Mask group.png", alt: "WebGL", width: 48, height: 48 },
    { imgSrc: "/images/ghjk.png", alt: "Firebase", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_39_36b5c7d840 1.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask groupdd.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_37_7df7e0a59d 1.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_30_253585b67f 1 (1).png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Group Mask_group_30_253585b67f 1 (1).png", alt: "PostgreSQL", width: 32, height: 32 },
    { imgSrc: "/images/Mask_group_34_2881741607 1.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_34_2881741607 122.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_32_25f5737661 1.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_29_55cf7869a7 1.png", alt: "Diamond", width: 48, height: 48 },
   
  ],
  2: [
    { imgSrc: "/images/Clip path group11.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_73_36e0f4bcaa.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_61_3ebe3547d0.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_74_643008704e.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_45_60d1c401d0.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_49_90bab0403f.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_41_9c1e40cf7a.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_40_2c92b87f03.png", alt: "Nuxt.js", width: 48, height: 48 },

    { imgSrc: "/images/Mask_group_18_1_6d087bf3ec.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_34_ea54698b21.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_37_966606d3fd.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_26_3511327a4d.png", alt: "Nuxt.js", width: 48, height: 48 },
  ],
  3: [
    { imgSrc: "/images/Clip path group113.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_24_b5ebf1af69.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_31_96069822a8.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_35_9cb6678541.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_36_8d6147d209.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_38_197010c786.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Clip path group (1).png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_48_35bb95e47f.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_50_70740a5e25.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_53_db4fda4061.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_54_831082be1a.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_56_908a883815.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_63_59f239bab4.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_65_1b0daa77b7.png", alt: "Nuxt.js", width: 48, height: 48 },

    { imgSrc: "/images/Mask_group_30_253585b67f 1 (1).png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_32_25f5737661 1.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/html5.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_36_36a3ee84aa 1.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_29_55cf7869a7 1.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_4_6734c4c4ca.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_6_d046f4e688.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/c.png", alt: "Laravel", width: 48, height: 48 },
  ],
  4: [
    { imgSrc: "/images/Groupbdbs.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_28_1fe21129b6.png", alt: "Diamond", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_42_cb21bf8883.png", alt: "React", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_47_379d9f3909.png", alt: "WebGL", width: 48, height: 48 },

    { imgSrc: "/images/Mask_group_62_e1cbc23a10.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_3_4ded4b8c84.png", alt: "Diamond", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_15_aefb1c427f.png", alt: "React", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_1_fa917b826a.png", alt: "WebGL", width: 48, height: 48 },

    { imgSrc: "/images/Mask_group_7_a310d12f9b.png", alt: "Diamond", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_9_9478a75ebb.png", alt: "React", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_10_6d36418948.png", alt: "WebGL", width: 48, height: 48 },
  ],
  5: [
    { imgSrc: "/images/Mask_group_20_451dbca0d0.png", alt: "Firebase", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_21_72ea731459.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_22_073d002a13.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_23_d223ce599b.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_24_fcfc0b60e2.png", alt: "Firebase", width: 30, height: 30 },
    { imgSrc: "/images/Mask_group_25_3c40ae76e1.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_26_859cd8e18c.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_27_0eebfe82ba.png", alt: "Laravel", width: 48, height: 48 },


    { imgSrc: "/images/Mask_group_28_6938e335e4.png", alt: "Firebase", width: 30, height: 30 },
    { imgSrc: "/images/Mask grouphhr6.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_14_4a9d7b3d9eMask_group_22_073d002a13.png", alt: "MongoDB", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_15_27c9ac859c.png", alt: "Laravel", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_18_8f08ce0cb0.png", alt: "Firebase", width: 30, height: 30 },
    { imgSrc: "/images/Mask group (1)hhdd.png", alt: "Tailwind CSS", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_16_ac1243f4da.png", alt: "MongoDB", width: 48, height: 48 },
   
  ],
  6: [
    { imgSrc: "/images/Grouphury6.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_10_9d664a2142.png", alt: "PostgreSQL", width: 32, height: 32 },
    { imgSrc: "/images/Mask_group_11_42cd8ddb38.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_12_20f13ffb94.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_2_e0afb6da7b.png", alt: "Nuxt.js", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_7_9e6175cfdd (1).png", alt: "PostgreSQL", width: 32, height: 32 },
    { imgSrc: "/images/Mask_group_8_081b818e1c.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_5_85bd039db7.png", alt: "Diamond", width: 48, height: 48 },

    { imgSrc: "/images/Mask_group_6_9e2fe3a923.png", alt: "PostgreSQL", width: 32, height: 32 },
    { imgSrc: "/images/Mask_group_1_ba60e0413c.png", alt: "Diamond", width: 48, height: 48 },
    { imgSrc: "/images/Mask_group_3_aca79b2d9a.png", alt: "Diamond", width: 48, height: 48 },
  ],
};

const services = {
  1: [
    "Discovery Workshop",
    "Software Quality Assurance",
    "Custom Software Development",
    "Web App Development",
  ],
  2: [
    " AI Strategy And Consulting",
    "Natural Language Processing",
    " ML Model Deployment & Training",
    " Custom Computer Vision Solutions",
  ],
  3: [
    "Staff Augmentation",
    "Hire By Role",
    "Dedicated Teams",
    "Hire By Technology",
  ],
  4: [
    "CI/CD As a Service",
    "Security And Compliance",
    " Infrastructure As Code",
    " Cloud Migration",
  ],
  5: ["Metaverse", "Apple Vision Pro", "AR/VR", "Cyber Security"],
  6: [
    "DApp Development",
    "Blockchain Consulting",
    "Smart Contract Deployment",
    "Smart Contract Deployment",
  ],
};

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [zoomedTab, setZoomedTab] = useState(null);
  const [currentTechnologyIcons, setCurrentTechnologyIcons] = useState(technologyIconsMap[1]);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    setZoomedTab(tabId);
    setCurrentTechnologyIcons(technologyIconsMap[tabId]);
    setTimeout(() => setZoomedTab(null), 300);
  };

  const selectedTabData = tabs.find((tab) => tab.id === selectedTab);

  return (
    <div className="w-[93%] m-auto mt-20">
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">
        Software Development Services
      </h1>
      <h1 className="text-3xl md:text-5xl text-sky-400">Forward Planners</h1>
    </div>
  
    <div className="flex mt-6 flex-wrap">
      <div className="w-full md:w-[50%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`border border-gray-300 rounded-3xl h-[250px] p-6 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 
              ${
                selectedTab === tab.id ? "bg-sky-400 text-white" : "bg-white"
              } 
              ${zoomedTab === tab.id ? "scale-110" : "scale-100"}`}
            style={{
              backgroundImage: selectedTab === tab.id ? "none" : `url(/images/bg.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleTabClick(tab.id)}
          >
            <div
              className={`text-5xl ${
                selectedTab === tab.id ? "text-white" : "text-sky-400"
              }`}
            >
              {tab.icon}
            </div>
            <h1 className="text-2xl mt-4">{tab.title}</h1>
            <p className="text-xl mt-2">{tab.content}</p>
          </div>
        ))}
      </div>
  
      <div className="mt-2 w-full md:w-[60%] lg:w-[40%] m-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          {selectedTabData?.title} {selectedTabData?.content}
        </h2>
        <p className="w-[90%] text-lg mt-4 text-gray-700">
          {selectedTabData?.description}
        </p>
  
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-4">
          {services[selectedTab]?.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaArrowCircleRight className="text-sky-400" />
              <p className="">{service}</p>
            </div>
          ))}
        </div>
  
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 mt-10 text-center">
          {currentTechnologyIcons.map((tech, index) => (
            <div
              key={index}
              className="w-10 h-10 m-auto flex justify-center items-center"
            >
              <Image
                src={tech.imgSrc}
                alt={tech.alt}
                width={tech.width}
                height={tech.height}
                quality={100}
              />
            </div>
          ))}
        </div>
  
        <div>
          <button className="flex gap-6 text-center items-center pl-3 border border-black mt-16 py-0 rounded-full hover:bg-sky-400">
            View More
            <span className="bg-sky-400 p-3 rounded-full text-lg">
              <FaArrowCircleRight className="text-white" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TabComponent;