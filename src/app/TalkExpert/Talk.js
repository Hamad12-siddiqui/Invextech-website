
import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Talk = () => {
  return (
    <>
      <div className='w-full bg-[#0D2B43] text-white py-8 mt-10'>
        <div className='w-[93%] m-auto flex flex-col lg:flex-row justify-between items-center mt-6 mb-10 space-y-6 lg:space-y-0'>
          <div className='text-center lg:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
              Let’s Talk to an expert
            </h1>
            <p className='mt-2 w-full lg:w-[80%]'>
              Looking for expert guidance? Book a consultation with us and select a time slot that suits you best.
            </p>
          </div>

          <div className='flex items-center cursor-pointer p-2 hover:text-blue-400 bg-gray-300 rounded-full'>
            <p className='mr-4 sm:mr-6 md:mr-10 text-sm sm:text-base font-bold'>
              BOOK A CONSULTATION - IT’S FREE
            </p>
            <div className='bg-gray-200 p-2 rounded-full'>
              <FaArrowCircleRight className='text-blue-950' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talk;



