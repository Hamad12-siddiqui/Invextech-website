'use client';

import React from 'react';
import { SlCalender } from "react-icons/sl";
import { GrUserWorker } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import CountUp from 'react-countup';

const HIGHLIGHTS = [
  { icon: <SlCalender />, count: 8, label: 'Years' },
  { icon: <GrUserWorker />, count: 120, label: 'Engineers' },
  { icon: <IoBriefcaseOutline />, count: 250, label: 'Projects' },
  { icon: <BsStars />, count: 130, label: 'Satisfied Clients' }
];

const HighlightCard = ({ icon, count, label }) => (
  <div className='border border-sky-400 px-6 py-8 text-center  mx-auto sm:mx-auto shadow-lg shadow-sky-200 w-full sm:w-48 md:w-56 lg:w-60 h-48 sm:h-56 md:h-60 flex flex-col justify-center items-center'>
    <div className='rounded-full bg-sky-100 p-3 sm:p-4 text-4xl sm:text-5xl text-sky-400'>
      {icon}
    </div>
    <h1 className='text-3xl sm:text-4xl mt-2 font-bold'>
      <CountUp start={0} end={count} duration={2.5} />+
    </h1>
    <p className='text-sm sm:text-base'>{label}</p>
  </div>
);

const Highlights = () => {
  return (
    <>
      <div className='max-w-[93%] mx-auto'>
        <div className='text-center p-6 sm:p-8'>
          <p className='text-sky-400 text-sm font-semibold'>Our Work in Numbers</p>
          <h1 className='text-3xl sm:text-4xl font-bold mt-2'>Key Highlights</h1>
        </div>
        <div className='grid grid-cols-1 sm:w-full w-[80%] mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 sm:p-10'>
          {HIGHLIGHTS.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Highlights;