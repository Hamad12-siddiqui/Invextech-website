import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='w-full bg-[#0D2B43] mt-8 pb-8'>
      <div className='w-[93%] mx-auto'>
        {/* Header Section */}
        <div className='w-full text-center py-10'>
          <h1 className='font-bold text-2xl md:text-4xl text-white'>
            Let’s talk about your project
          </h1>
          <p className='text-white mt-3 text-sm md:text-base px-4'>
            Have a project in mind? Talk to us directly and get personalized guidance every step of the way.
          </p>
        </div>

        {/* Button Section */}
        <div className='flex justify-center mt-6'>
          <button className='bg-gray-400 text-white py-2 px-4 md:px-6 rounded-lg flex items-center space-x-2 hover:bg-sky-400 transition-colors text-sm md:text-base'>
            <span>BOOK A CONSULTATION - IT’S FREE</span>
            <FaArrowCircleRight />
          </button>
        </div>

        {/* Address Section */}
        <div className='flex flex-col md:flex-row gap-8 justify-center mt-12 md:mt-24 px-4 md:px-0'>
          {[
            { src: "/images/aus.png", alt: "AUS", title: "AUS" },
            { src: "/images/dub.png", alt: "Dubai", title: "Dubai" },
            { src: "/images/pak.png", alt: "Pakistan", title: "Pakistan" }
          ].map((item, index) => (
            <div key={index} className='flex gap-4 items-center'>
              <div>
                <Image src={item.src} alt={item.alt} width={60} height={60} className='mt-4 w-12 h-12 md:w-16 md:h-16' />
              </div>
              <div>
                <h1 className='text-white font-bold text-lg md:text-xl'>{item.title}</h1>
                <p className='text-xs md:text-sm text-gray-400'>
                  <span className='font-semibold text-gray-400'>Address: </span>
                  W11133 Shady Trail PMB 205 Dallas, TX
                </p>
                <p className='text-gray-400 text-xs md:text-sm'>
                  <span className='font-semibold text-gray-400'>Phone No: </span>
                  +1 (480) 920-1123
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;