import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <>
      <div className="w-full bg-sky-100">
        <div className="w-[90%] mx-auto p-4 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Image Container */}
          <div className="relative w-full md:w-[50%] h-64 md:h-96">
            <Image
              src="/images/rocket.png"
              alt="Rocket illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:max-w-[90%] mx-auto flex flex-col md:justify-end md:items-end justify-center items-center gap-6">
            {/* Vision Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg w-[90%] md:w-[70%] shadow-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold">Our Vision</h1>
                <div className="-ml-4 -mt-6">
                  <Image
                    src="/images/icons8-vision-100 1.png"
                    alt="Vision icon"
                    width={55}
                    height={55}
                    className="ml-auto"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                To become the number one choice for businesses in offering innovative digital solutions.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg w-[90%] md:w-[70%] shadow-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold">Our Mission</h1>
                <div className="ml-2 -mt-4 -mr-2">
                  <Image
                    src="/images/icons8-goal-100 1.png"
                    alt="Mission icon"
                    width={70}
                    height={70}
                    className="ml-auto"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                Our primary purpose is enabling enterprises to accelerate the adoption of new technologies, solve complex issues, and become competitive with the power of digital innovation. We are dedicated to empowering businesses with cutting-edge solutions that drive measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;