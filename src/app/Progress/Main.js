
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const sections = [
  {
    id: 1,
    title: "Startup.",
    subtitle: "I’m A",
    description: "Remarkable ideas often stall without the right team to bring them to life.",
    imageUrl: "/images/first1.png",
    textColor: "text-blue-600",
    buttonBorder: "border border-gray-300",
    buttonBg: "bg-[#2276FF]",
    arrowBg: "bg-[#2276FF]",
    textClass: "text-white",
    btntext:"Get Started"

  },
  {
    id: 2,
    title: "Enterprise.",
    subtitle: "I’m An",
    description: "Scaling requires innovation, and we’re here to help you grow.",
    imageUrl: "/images/first3.png",
    textColor: "text-white",
    buttonBorder: " border border-white",
  
    arrowBg: "bg-[#2C5E89]",
    textClass: "text-white",
      btntext:"Explore More"
  },
  {
    id: 3,
    title: "Recovery.",
    subtitle: "I’m A",
    description: "Overcoming setbacks is part of the journey, and we’re here to support you.",
    imageUrl: "/images/first2.png",
    textColor: "text-blue-600",
    buttonBorder: "border border-black",
    arrowBg: "bg-blue-600",
    textClass: "text-black",
    btntext:"Need a Fix"
  },
];

const Main = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#0D2B43] max-w-[85%] m-auto rounded-3xl p-10">
        <div className="w-full relative">
          {/* Background Image */}
          <div className="hidden md:block absolute top-10 -right-10 w-[80%] h-[80%] z-0">
            <Image
              src="/images/waves.png"
              alt="Background Waves"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-[92%] w-[100%] m-auto z-10 relative">
            <h1 className="text-center items-center py-4 text-white text-5xl relative z-20">
              Backing You Up At Every Stage Of Your Progress
            </h1>
            <p className="text-center items-center pb-4 text-white z-20 text-xl w-[80%] m-auto relative">
              From launching startups to expanding enterprises, or recovering from setbacks, we help businesses overcome every challenge on their journey.
            </p>
            <div className="left-0 w-full md:flex md:flex-row flex-col md:justify-center gap-8 md:p-4 p-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="flex-1 sm:w-[50%] w-[100%] m-auto h-[28rem] bg-cover bg-center flex flex-col p-4 rounded-lg shadow-lg z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  style={{ backgroundImage: `url(${section.imageUrl})` }}
                >
                  <p className={`${section.textColor} text-lg font-bold`}>
                    {section.subtitle}
                  </p>
                  <h1 className={`text-4xl font-bold ${section.textColor}`}>
                    {section.title}
                  </h1>
                  <p className={`mt-8 ${section.textClass}`}>{section.description}</p>

                  <div className="mt-32 flex items-center gap-2">
                    <div className={`group ${section.buttonBorder} rounded-full p-2 flex items-center gap-2 ${section.buttonBg}`}>
                      <p className={`${section.textClass} text-md`}>{section.btntext}</p>
                      <div className={`${section.arrowBg} rounded-full p-2`}>
                        <FaArrowRight className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;