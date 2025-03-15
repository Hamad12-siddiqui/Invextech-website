'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Team from '../OwnTeam/Team';
import Portfolio from './Portfolio';

const cards = [
  {
    title: "Requirement Gathering",
    description:
      "We use effective communication to gather detailed requirements and exceed clients’ expectations. We work closely with clients to understand their unique needs and make necessary adjustments throughout the development process, enabling us to provide the best solutions possible.",
    image: "/images/Group 164683.png",
  },
  {
    title: "Product Design",
    description:
      "Our experienced team analyzes client requirements and researches trends to create a comprehensive design strategy and layout for every product. Collaborating with the client at each step ensures that the end product meets their requirements, has an effective design and architecture, and upholds industry standards.",
    image: "/images/Page-1.png",
  },
  {
    title: "Agile Development",
    description:
      "Agile methodology is efficiently used to manage and complete projects while adapting to changing client requirements. We prioritize the most important features and break down large projects into smaller, manageable chunks. This enables us to deliver software, mobile, web, and blockchain projects on schedule, efficiently, and with high quality.",
    image: "/images/Group 1686554627.png",
  },
  {
    title: "Product Testing",
    description:
      "Our development firm conducts thorough testing to ensure high-quality software delivery to clients. After development, we perform unit, integration, system, and acceptance testing to discover and fix any issues. We also conduct optimization testing for optimal performance and user experience.",
    image: "/images/Group 1686554628.png",
  },
  {
    title: "Deployment",
    description:
      "Our development agency follows a rigorous deployment process to ensure that software and websites are deployed smoothly and efficiently. This process involves several key steps, including testing and validation, staging, and finally, deployment to the production environment.",
    image: "/images/Group 1686554629.png",
  },
  {
    title: "Maintenance",
    description:
      "Invextech provides comprehensive maintenance services to ensure clients’ software runs smoothly after delivery. Our team offers ongoing support and maintenance, including bug fixing, security updates, and feature enhancements. This ensures optimal software performance, minimizing downtime, and providing peace of mind to our clients.",
    image: "/images/abcd.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    setActiveButton("next");
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setActiveButton("prev");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="bg-sky-100 p-8">
        <section className="max-w-[93%] mx-auto text-center py-10">
          <p className="text-lg font-medium text-sky-400">Our Process</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
            Gain a competitive edge with our customized approach to meeting your business objectives
          </h1>
          <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
            Taking a customized approach to every project we undertake, our rock-solid process is tailored to suit our clients’ needs. Our refined methodology delivers the best possible results, streamlining business operations and driving growth for startups and large enterprises. Trust us to help you achieve success with our tailor-made software development methodology.
          </p>
          <button className="text-white bg-[#42A9C4] p-4 rounded-md mt-8">
            View Our Process
          </button>
        </section>

        <div className="flex flex-col md:flex-row items-center justify-center w-full mt-10 gap-4">
          {/* Previous Button */}
          <button
            className={`p-2 rounded-full mb-4 md:block hidden md:mb-0 md:mr-4 ${
              activeButton === "prev"
                ? "bg-white border border-sky-400"
                : "bg-sky-300"
            }`}
            onClick={prevCard}
          >
            <IoIosArrowBack
              className={`text-3xl ${
                activeButton === "prev" ? "text-sky-300" : "text-white"
              }`}
            />
          </button>

          {/* Card Section */}
          <section className="flex flex-col items-center w-[90%] lg:w-[36%] md:w-[45%] lg:h-[370px] sm:h-[400px] h-[440px] border border-sky-400 rounded-2xl bg-white justify-center sm:p-6 p-4 text-center gap-y-4">
            <div className="bg-sky-200 rounded-full p-3">
              <Image
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                width={100}
                height={100}
                className="h-16 w-16"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">{cards[currentIndex].title}</h2>
            <p className="text-gray-600 max-w-lg text-sm md:text-base">
              {cards[currentIndex].description}
            </p>
          </section>

          {/* Next Button */}
          <button
            className={`p-2 rounded-full mt-4 md:mt-0 md:ml-4 ${
              activeButton === "next"
                ? "bg-white border border-sky-400"
                : "bg-sky-300"
            }`}
            onClick={nextCard}
          >
            <IoIosArrowForward
              className={`text-3xl ${
                activeButton === "next" ? "text-sky-300" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
      <Team />
      <Portfolio />
    </>
  );
};

export default Carousel;