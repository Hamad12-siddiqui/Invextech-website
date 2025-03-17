import React from "react";
import Health from "./Health"
import Image from "next/image";

const Industries = () => {
  return (
    <>
    <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          className="object-cover"
          fill
          priority 
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8 xl:px-10">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
          FULL-CYCLE SOFTWARE DEVELOPMENT FOR DIVERSE INDUSTRIES
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 md:mt-6">
          Innovative Tech Solutions Customized to Transform Your Industry
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-4 md:mt-6 max-w-5xl  ">
          We create custom software solutions tailored to industry-specific
          needs that optimize business processes and improve overall
          performance. Our experts collaborate with clients to understand unique
          challenges and design solutions that meet specific requirements.
        </p>

        {/* Call-to-Action Button */}
        <button className="rounded-full bg-sky-400 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-sky-500 transition-colors duration-300">
          Let’s Build Your Future Today
        </button>
      </div>
    </div>
    <Health />
    </>
  );
};

export default Industries;