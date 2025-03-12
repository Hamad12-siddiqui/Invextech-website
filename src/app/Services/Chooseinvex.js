import React from 'react';
import Goal from '../About/Goal'
import Testimoniam from '../About/Testimoniam';
import Faqs from './Faqs';
const ChooseInvex = () => {
  const features = [
    {
      id: 1,
      image: "/images/Group-162791 1.png",
      title: "Experience and expertise",
    },
    {
      id: 2,
      image: "/images/Group-162790 1.png",
      title: "One-stop-shop",
    },
    {
      id: 3,
      image: "/images/Group-162789 1.png",
      title: "Scalability",
    },
    {
      id: 4,
      image: "/images/Group-23-Copy.png",
      title: "Cross-functional teams",
    },
  ];

  return (
    <>
    <div className="w-full bg-sky-100">
      <div className="w-[93%] mx-auto py-6 text-center">
        <div className="w-full">
          <p className="text-lg text-sky-400">WHY CHOOSE INVEXTECH?</p>
          <h1 className="text-4xl font-semibold mt-1">
            Gain a competitive edge with our customized approach to meeting your business objectives
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center mt-10 md:mt-20 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-sky-400 bg-white p-6 w-40 md:w-64 h-56 flex flex-col items-center shadow-xl shadow-sky-300 justify-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-12 h-12 mt-2 "
              />
              <h1 className="mt-4 text-2xl font-bold">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='bg-sky-100'>
    <Goal /> 
    </div>
    <Testimoniam />
    <Faqs />
    </>

  );
};

export default ChooseInvex;