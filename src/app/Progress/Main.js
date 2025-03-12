// import React from "react";
// import Image from "next/image"; // Import the Image component if using Next.js

// const Main = () => {
//   return (
//     <>
//       <div className="w-[100%] ">
//         <div className="bg-blue-950  w-[93%] m-auto rounded-3xl p-10">
//           <div className="w-full relative">
//             {/* New div for the background image */}
//             <div className="hidden md:block absolute top-10 -right-10 w-[80%] h-[80%] z-0">
//               <Image
//                 src="/images/waves.png"
//                 alt="Background Waves"
//                 layout="fill"
//                 objectFit="cover"
//                 objectPosition="right"
//               />
//             </div>
//             {/* Existing content */}
//             <div className=" lg:w-[92%] w-[100%] m-auto z-10">
//               <h1 className="text-center items-center py-4 text-white text-5xl">
//                 Backing Your Up At Every Stage Of Your Progress
//               </h1>
//               <p className="text-center items-center pb-4 text-white text-xl w-[80%] m-auto">
//                 From launching startups to expanding enterprises, or recovering
//                 from setbacks, we help businesses overcome every challenge on
//                 their journey.
//               </p>

//               {/* Bottom container with 3 divs */}
//               <div className=" left-0 w-full md:flex md:flex-row flex-col md:justify-center gap-8 md:p-4 p-4 top-96 md:top-52 lg:top-44">
//                 {/* First div - Startup */}
//                 <div
//                   className="flex-1 sm:w-[50%] w-[100%] m-auto h-[28rem] bg-cover bg-center flex flex-col p-4 rounded-lg shadow-lg z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
//                   style={{ backgroundImage: "url('/images/first1.png')" }}
//                 >
//                   <p className="text-blue-600 text-lg font-bold">I’m A</p>
//                   <h1 className="text-4xl font-bold text-blue-600">Startup.</h1>
//                   <p className="mt-8">
//                     Remarkable ideas often stall without the right team to bring
//                     them to life
//                   </p>
//                   {/* Added GET STARTED section with border */}
//                   <div className="mt-32 flex items-center gap-2">
//                     <div className="group border border-gray rounded-full p-2 bg-sky-500 flex items-center gap-2">
//                       <p className="text-white text-md">GET STARTED</p>
//                       {/* Hide the arrow by default and show it on hover */}
//                       <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Image
//                           src="/images/arrow.png"
//                           alt="Arrow"
//                           width={16}
//                           height={16}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Second div - Enterprise */}
//                 <div
//                   className="flex-1 sm:w-[50%] w-[100%] m-auto  h-[28rem] bg-cover bg-center flex flex-col p-4 rounded-lg shadow-lg md:mt-0 sm:mt-10 mt-4 z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
//                   style={{ backgroundImage: "url('/images/first3.png')" }}
//                 >
//                   <p className="text-white text-lg font-bold"> I’m An</p>
//                   <h1 className="sm:text-4xl text-3xl text-white font-bold ">
//                     Enterprise.
//                   </h1>
//                   <p className="mt-8 text-white ">
//                     Scaling requires innovation, and we’re here to help you
//                     grow.
//                   </p>
//                   {/* Added GET STARTED section with border */}
//                   <div className="mt-32 flex items-center gap-2">
//                     <div className="group border border-white rounded-full p-2 flex items-center gap-2">
//                       <p className="text-white text-md">GET STARTED</p>
//                       {/* Hide the arrow by default and show it on hover */}
//                       <div className="w-8 h-8 bg-blue-950 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Image
//                           src="/images/arrow.png"
//                           alt="Arrow"
//                           width={16}
//                           height={16}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Third div - Recovery */}
//                 <div
//                   className="flex-1 sm:w-[50%] w-[100%] m-auto h-[28rem] bg-cover bg-center flex flex-col p-4 rounded-lg shadow-lg md:mt-0 sm:mt-10 mt-4 z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
//                   style={{ backgroundImage: "url('/images/first2.png')" }}
//                 >
//                   <p className="text-blue-600 text-lg font-bold"> I’m A</p>
//                   <h1 className="sm:text-4xl text-3xl font-bold text-blue-600">
//                     Recovery.
//                   </h1>
//                   <p className="mt-8 text-black">
//                     Overcoming setbacks is part of the journey, and we’re here
//                     to support you.
//                   </p>
//                   <div className="mt-32 flex items-center gap-2">
//                     <div className="group border border-black rounded-full p-2 flex items-center gap-2">
//                       <p className="text-black text-md ">GET STARTED</p>
//                       {/* Hide the arrow by default and show it on hover */}
//                       <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Image
//                           src="/images/arrow.png"
//                           alt="Arrow"
//                           width={16}
//                           height={16}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;





import React from "react";
import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "Startup.",
    subtitle: "I’m A",
    description: "Remarkable ideas often stall without the right team to bring them to life.",
    imageUrl: "/images/first1.png",
    textColor: "text-blue-600",
    buttonBorder: "border-gray",
    buttonBg: "bg-sky-500",
    arrowBg: "bg-sky-500",
    textClass: "text-white",
  },
  {
    id: 2,
    title: "Enterprise.",
    subtitle: "I’m An",
    description: "Scaling requires innovation, and we’re here to help you grow.",
    imageUrl: "/images/first3.png",
    textColor: "text-white",
    buttonBorder: "border-white",
    buttonBg: "bg-blue-950",
    arrowBg: "bg-blue-950",
    textClass: "text-white",
  },
  {
    id: 3,
    title: "Recovery.",
    subtitle: "I’m A",
    description: "Overcoming setbacks is part of the journey, and we’re here to support you.",
    imageUrl: "/images/first2.png",
    textColor: "text-blue-600",
    buttonBorder: "border-black",
    buttonBg: "bg-blue-600",
    arrowBg: "bg-blue-600",
    textClass: "text-black",
  },
];

const Main = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#0D2B43] w-[93%] m-auto rounded-3xl p-10">
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
          <div className="lg:w-[92%] w-[100%] m-auto z-10">
            <h1 className="text-center items-center py-4 text-white text-5xl">
              Backing You Up At Every Stage Of Your Progress
            </h1>
            <p className="text-center items-center pb-4 text-white text-xl w-[80%] m-auto">
              From launching startups to expanding enterprises, or recovering from setbacks, we help businesses overcome every challenge on their journey.
            </p>

            {/* Sections - Generated using map() */}
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

                  {/* GET STARTED Button */}
                  <div className="mt-32 flex items-center gap-2">
                    <div className={`group ${section.buttonBorder} rounded-full p-2 flex items-center gap-2 ${section.buttonBg}`}>
                      <p className={`${section.textClass} text-md`}>GET STARTED</p>
                      <div className={`w-8 h-8 ${section.arrowBg} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <Image src="/images/arrow.png" alt="Arrow" width={16} height={16} />
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
