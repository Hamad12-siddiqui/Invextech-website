"use client";
import React, { useState } from "react";
import { categories, iconData } from "./teamapi"; 

const Team = ({ categoriesData, iconsData }) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const selectedCategory = categoriesData[activeIndex];
  const filteredIcons = iconsData.filter((icon) => icon.category === selectedCategory);

  return (
    <div className="max-w-[93%] mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl w-[96%] mx-auto sm:text-4xl font-bold">
            Build Your Own Team - <span className="text-sky-400">Hire Developer</span>
          </h2>
          <p className="text-base w-[95%] mx-auto sm:text-lg mt-4 sm:mt-7">
            We’ve built our business by assembling a team of skilled developers, experts in the frameworks and technologies driving modern solutions.
          </p>
        </div>
        <div className="w-[97%] mx-auto flex flex-col sm:flex-row justify-between mt-6">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className={`border-[1px] border-sky-300 flex-1 p-2 text-center cursor-pointer mb-2 sm:mb-0 ${
                activeIndex === index ? "bg-sky-400 text-white" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {category}
            </div>
          ))}
        </div>
        {/* Icons */}  
        <div className=" w-[97%] mx-auto grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 lg:grid-cols-6  gap-8 mt-4">
          {filteredIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center border-[1px] border-sky-400 p-2 w-32 h-28">
              <div style={{ color: item.color }}>
                {React.cloneElement(item.icon, { size: 40 })}
              </div>
              <span className="mt-2 text-sm text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamWrapper = () => {
  return <Team categoriesData={categories} iconsData={iconData} />;
};

export default TeamWrapper;
