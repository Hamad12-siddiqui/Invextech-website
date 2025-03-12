
"use client";
import React, { useState } from "react";
import { categories, iconData } from "./teamapi"; 

const Team = ({ categoriesData, iconsData }) => {
  const [activeIndex, setActiveIndex] = useState(null);   
  const selectedCategory = activeIndex !== null ? categoriesData[activeIndex] : null;
  const filteredIcons = selectedCategory
    ? iconsData.filter((icon) => icon.category === selectedCategory)
    : iconsData;

  return (
    <div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Build Your Own Team - <span className="text-sky-400">Hire Developer</span>
          </h2>
          <p className="text-base sm:text-lg mt-4 sm:mt-7">
            We’ve built our business by assembling a team of skilled developers, experts in the frameworks and technologies driving modern solutions.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between mt-6">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className={`border-[1px] flex-1 p-2 text-center cursor-pointer mb-2 sm:mb-0 ${
                activeIndex === index ? "bg-sky-400 text-white" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {category}
            </div>
          ))}
        </div>
        {/* Icons in responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 mt-4">
          {filteredIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center border-[1px] border-sky-400 p-2 h-28">
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
