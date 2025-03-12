  'use client'
  import React, { useState } from "react";
  import { RiArrowDropDownLine } from "react-icons/ri";
  import Main from "./Main";

  const Header = () => {
    const [showIndustries, setShowIndustries] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showTechnology, setShowTechnology] = useState(false);

    const dummyIndustries = ["Healthcare", "Finance", "Education", "Retail"];
    const dummyServices = ["Web Development", "Mobile Development", "UI/UX Design", "Cloud Services"];
    const dummyTechnology = ["React", "Node.js", "Python", "AWS"];

    return (
      <>
        <div className="bg-gradient-to-r from-[#081B2D] to-[#42A9C4] relative w-full">
       
            <div className="sm:w-[85%] w-full mx-auto md:py-36  py-20">
              <p className="text-center text-white font-sm">
                DISCOVER-DESIGN-DEVELOP-LAUNCH
              </p>
              <h1 className="text-center text-white md:text-5xl text-4xl mt-3">
                Unleash business growth with our Software Development Services
              </h1>
              <p className="text-center text-white mt-3">
                Get tailored software solutions with our Custom Software
                Development Services. Our team of expert developers offers
                comprehensive support from strategy to launch, helping you achieve
                success at scale.
              </p>
              <div className="flex justify-center items-center mt-9">
                <button className="text-white bg-sky-400 border px-8 py-2 rounded-full hover:text-sky-400 hover:bg-white">
                  Let’s Build Your Future Today
                </button>
              </div>
            </div>
            <div className="lg:w-[85%] sm:w-[75%] w-[30%] mx-auto bg-white rounded-xl absolute sm:-bottom-16 sm:left-24 left-56 -bottom-36 shadow-xl">
  <div className="flex flex-col sm:flex-row justify-between items-center sm:p-10 p-5">
    {/* Industries Dropdown */}
    <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-2">
      <input
        type="text"
        placeholder="Industries"
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none cursor-pointer ${showIndustries ? '' : 'focus:border-sky-400'}`}
        onClick={() => setShowIndustries(!showIndustries)}
        readOnly
      />
      <RiArrowDropDownLine
        className="absolute right-3 top-1 text-sky-400 text-4xl"
      />
      {showIndustries && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1">
          {dummyIndustries.map((industry, index) => (
            <div key={index} className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer">
              {industry}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Services Dropdown */}
    <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0 sm:mx-2">
      <input
        type="text"
        placeholder="Services"
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none cursor-pointer ${showServices ? '' : 'focus:border-sky-400'}`}
        onClick={() => setShowServices(!showServices)}
        readOnly
      />
      <RiArrowDropDownLine
        className="absolute right-3 top-1 text-sky-400 text-4xl"
      />
      {showServices && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1">
          {dummyServices.map((service, index) => (
            <div key={index} className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer">
              {service}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Technology Dropdown */}
    <div className="relative w-full sm:w-1/3 sm:ml-2">
      <input
        type="text"
        placeholder="Technology"
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none cursor-pointer ${showTechnology ? '' : 'focus:border-sky-400'}`}
        onClick={() => setShowTechnology(!showTechnology)}
        readOnly
      />
      <RiArrowDropDownLine
        className="absolute right-3 top-1 text-sky-400 text-4xl"
      />
      {showTechnology && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1">
          {dummyTechnology.map((tech, index) => (
            <div key={index} className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer">
              {tech}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</div>
          </div>
    <Main />
      </>
    );
  };

  export default Header;