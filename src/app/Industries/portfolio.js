import React from "react";
import Image from "next/image"; 
import Talk from '../TalkExpert/Talk'
import Organization from './Organization'
const Portfolio = () => {
  return (
    <>
    <div className="w-full">
        <div className="lg:w-[93%] w-full mx-auto p-4 lg:p-16">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex-1 w-full md:w-[50%] mb-8 md:mb-0">
              <p className="text-sky-400 font-bold">Collaborate With Us</p>
              <h1 className="text-2xl font-bold">Discover Our Portfolio</h1>
              <div className="md:w-full w-[80%] h-auto relative">
                
                <Image
                  src="/images/team.png"
                  alt="Team"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="relative z-0"
                />
              </div>
            </div>

            <div className="flex-1 w-full md:w-[40%] mt-8 md:mt-16 md:pl-16">
              <p className="text-sky-400 font-bold">Healthcare</p>
              <h1 className="text-2xl font-bold">DOSINGMADEEASY</h1>
              <p className="text-gray-700 text-lg ">
                DosingMadeEasy is a dosing calculator that automates medication
                dosing calculations based on factors like renal function and
                infectious diseases. The platform integrates a secure user login,
                subscription-based access, and multilingual options to support a
                global user base. This solution improves dosing safety by reducing
                manual errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    <Talk />
    <Organization />
    </>
  );
};

export default Portfolio;