'use client'
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import ITSkill from "./ITSkill";

const GradientBox = ({ imageSrc, altText, title, onClick }) => {
  return (
    <div
      className="w-full md:max-w-[90%] flex items-center justify-between p-4 m-auto relative min-h-[100px] overflow-hidden bg-[rgb(8,27,45)] bg-gradient-to-br from-[rgba(8,27,45,1)] to-[rgba(66,169,196,1)] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center w-full relative z-10">
        <Image
          src={imageSrc}
          alt={altText}
          width={60}
          height={60}
          className="w-12 h-12 md:w-16 md:h-16"
        />
        <div className="flex-1 flex justify-center items-center text-xl md:text-3xl text-center text-white">
          {title}
        </div>
      </div>
      <div className="bg-white p-2 rounded-full relative z-10">
        <FiArrowUpRight className="text-black" />
      </div>
    </div>
  );
};

const ImageTextSection = ({ imageSrc, altText, title, description, listItems }) => {
  return (
    <div className="w-full md:max-w-[90%] flex flex-col md:flex-row items-center justify-between gap-6 mx-auto bg-[#0D2B43] p-6">
      <div className="w-[60%] md:w-[40%]   mt-6">
        <Image src={imageSrc} alt={altText} width={500} height={500} className="w-full h-auto rounded-lg" />
      </div>

      <div className="flex-1 w-full  md:w-[50%] text-white">
        <button className="text-3xl font-bold  border-b-2">{title}</button>
        <p className="text-lg mt-3">{description}</p>
        <ul className="list-disc ml-6 mt-2">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-start w-full md:w-[10%] mt-6 md:mt-0">
        <div className="bg-white p-3 rounded-full">
          <IoIosArrowRoundForward className="text-[#0D2B43] text-3xl" />
        </div>
      </div>
    </div>
  );
};

const Health = () => {
  const [selectedIndustryIndex, setSelectedIndustryIndex] = useState(null);

  const industries = [
    {
      imageSrc: "/images/health.png",
      imageSrc1: "/images/dr.png",
      altText: "Healthcare",
      title: "Healthcare",
      description: "We revolutionize patient care and streamline medical workflows with our custom software development to build:",
      listItems: [
        "Telemedicine & Remote Patient",
        "Monitoring Electronic Health Records (EHRs)",
        "Health & Wellness Apps",
      ],
    },
    {
      imageSrc: "/images/rate.png",
      imageSrc1: "/images/educational video for online education 1.png",
      altText: "Social Networking",
      title: "Education",
      description: "Improving the learning experience with immersive edTech solutions that cater to the needs of modern learners with:",
      listItems: ["Personalized E-learning platforms", "Learning Management Systems (LMS)", "Simulations and Virtual Laboratories"],
    },
    {
      imageSrc: "/images/cap.png",
      imageSrc1: "/images/construct.png",
      altText: "Education",
      title: "Real Estate",
      description: "We simplify property management and sales procedures with smart, data-driven solutions like:",
      listItems: ["Real Estate CRM", "Online Real Estate Marketplaces", "Property Management System"],
    },
    {
      imageSrc: "/images/build.png",
      imageSrc1: "/images/J_0247-08 [Converted] 1.png",
      altText: "Real Estate",
      title: "Lifestyle",
      description: "Invextech helps create lifestyle apps that adapt to the requirements and preferences of users, improving their daily lives, such as:",
      listItems: ["Meditation & Mindfulness Apps", "Online Fashion & Shopping Magazines", "Home Automation Systems"],
    },
    {
      imageSrc: "/images/tab.png",
      imageSrc1: "/images/Layer_5.png",
      altText: "E-commerce",
      title: "E-commerce",
      description: "Increasing online sales and improving consumer experience using seamless, feature-rich eCommerce platforms that include:",
      listItems: ["Shopify Stores", "Custom Development", "WooCommerce Websites"],
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full md:w-[93%] m-auto mt-6">
        <div className="w-full md:w-[93%] m-auto mt-10 mb-6 text-center px-4 md:px-0">
          <h1 className="text-2xl md:text-4xl font-semi-bold">
            Industries We Transform with Custom Software Development Services
          </h1>
          <p className="text-lg mt-3">
            Invextech Technologies provides custom software development services to businesses across diverse sectors, helping them create their desired digital products.
          </p>
        </div>

        {industries.map((industry, index) => (
          <div key={index}>
            <GradientBox
              imageSrc={industry.imageSrc}
              altText={industry.altText}
              title={industry.title}
              onClick={() => setSelectedIndustryIndex(index)}
            />
            {selectedIndustryIndex === index && (
              <ImageTextSection
                imageSrc={industry.imageSrc1}
                altText={industry.altText}
                title={industry.title}
                description={industry.description}
                listItems={industry.listItems}
              />
            )}
          </div>
        ))}
      </div>

      <ITSkill />
    </div>
  );
};

export default Health;