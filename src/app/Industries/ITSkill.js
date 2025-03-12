"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Portfolio from "./portfolio";

const ITSkill = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [activeCard, setActiveCard] = useState(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); 
      }
    }
  }, [emblaApi]);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <>
    <div className="w-full bg-sky-100 py-10">
      <div className="w-[93%] mx-auto p-4 sm:p-6 md:p-10 lg:p-14">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl">INDUSTRIES</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            We Combine IT Skills with Industry Expertise for Maximum Impact
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 sm:mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[
                {
                  src: "/images/glass.png",
                  title: "Comprehensive Business Analysis",
                  text: "The industry expertise of our IT specialists allows us to comprehend in detail the distinctive challenges and requirements of your particular industry, enabling the development of targeted solutions.",
                },
                {
                  src: "/images/light.png",
                  title: "Streamlined Development Processes",
                  text: "Team Invextech foresees probable hurdles, prioritizes activities and optimizes development workflows with our extensive industry knowledge, resulting in efficient project execution across the board.",
                },
                {
                  src: "/images/secure.png",
                  title: "Streamlined Development Processes",
                  text: "Team Invextech foresees probable hurdles, prioritizes activities and optimizes development workflows with our extensive industry knowledge, resulting in efficient project execution across the board.",
                },
                {
                  src: "/images/thumbs.png",
                  title: "Improved Customer Experience",
                  text: "A thorough grasp of industry-specific customer expectations and preferences enables our IT teams to provide customized user experiences that meet the demands of your target audience.",
                },
                {
                  src: "/images/upratio.png",
                  title: "Getting A Competitive Advantage",
                  text: "Leveraging their industry expertise, our specialists are able to create new software solutions that stand out in the market, giving your firm a competitive edge in the industry.",
                },
                {
                  src: "/images/big.png",
                  title: "Scalable & Future-proof Solutions",
                  text: "Our industry-experienced IT teams create software solutions that not only meet current requirements but also adapt to future industry trends and technological advancements.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_40%] p-4 sm:p-6"
                >
                  <div
                    className={`shadow-lg rounded-xl p-6 sm:p-8 text-center text-lg sm:text-xl flex flex-col items-center cursor-pointer ${
                      activeCard === index ? "bg-sky-600" : "bg-white"
                    }`}
                    onClick={() => handleCardClick(index)}
                    style={{ height: "400px" }} 
                  >
                    <div
                      className={`p-4 rounded-full flex justify-center items-center ${
                        activeCard === index ? "bg-white" : "bg-blue-200"
                      }`}
                    >
                      <Image
                        src={item.src}
                        width={80}
                        height={80}
                        alt="Industry Image"
                      />
                    </div>
                    <h2
                      className={`text-xl sm:text-2xl font-bold mt-4 ${
                        activeCard === index ? "text-white" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`mt-4 text-sm sm:text-base ${
                        activeCard === index ? "text-white" : "text-gray-600"
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute bottom-[-40px] sm:bottom-[-50px] right-4 flex space-x-4">
            <button
              className="bg-sky-600 text-white p-2 sm:p-3 rounded-md"
              onClick={scrollPrev}
            >
              <IoIosArrowBack size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              className="bg-sky-600 text-white p-2 sm:p-3 rounded-md"
              onClick={scrollNext}
            >
              <IoIosArrowForward size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Portfolio />
    </>
  );
};

export default ITSkill;
