import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { tabs } from "../Development/Developmentapi";
import Image from "next/image";

const Card = ({ selectedTab, handleTabClick, zoomedTab, currentTechnologyIcons }) => {
  const selectedTabData = tabs.find((tab) => tab.id === selectedTab);

  return (
    <div className="max-w-[85%] m-auto mt-20">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Software Development Services
        </h1>
        <h1 className="text-3xl md:text-5xl text-sky-400">Forward Planners</h1>
      </div>

      <div className="flex mt-6 flex-wrap">
        <div className="w-full md:w-[55%] lg:-ml-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`border border-sky-300 rounded-3xl h-[250px] p-6 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 
                  ${selectedTab === tab.id ? "bg-sky-400 text-white" : "bg-white"} 
                  ${zoomedTab === tab.id ? "scale-110" : "scale-100"}`}
              style={{
                backgroundImage: selectedTab === tab.id ? "none" : `url(/images/bg.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className={`text-5xl ${selectedTab === tab.id ? "text-white" : "text-sky-400"}`}>
                {tab.icon}
              </div>
              <h1 className="text-2xl mt-4">{tab.title}</h1>
              <p className="text-2xl mt-2">{tab.content}</p>
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

        
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 mt-10 text-center">
            {currentTechnologyIcons?.map((tech, index) => (
              <div key={index} className="w-10 h-10 m-auto flex justify-center items-center">
                <Image src={tech.imgSrc} alt={tech.alt} width={tech.width} height={tech.height} quality={100} />
              </div>
            ))}
          </div>

          <div>
            <button className="flex gap-6 text-center items-center pl-3 border border-black mt-16 py-0 rounded-full hover:bg-sky-400 hover:text-white transition duration-300 ease-in-out">
              View More
              <span className="bg-sky-400 p-3 rounded-full text-lg transition duration-300 ease-in-out">
                <FaArrowCircleRight className="text-white" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
