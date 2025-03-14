import React from 'react';

const Main = ({ main }) => {
    return (
     
        <div
            className="bg-cover bg-center min-h-screen  py-10"
            style={{ backgroundImage: "url('/images/Vector 1.png')" }}
        >
               <div className='max-w-[94%] mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 mt-10 ml-6">
                {main.map((CurElem) => (
                    <section
                        key={CurElem.id}
                        className="text-center py-5 w-full p-5 rounded-lg shadow-md bg-white bg-opacity-80 hover:scale-105 transition-transform duration-300 hover:border border-sky-500"
                        style={{ backgroundImage: "url('/images/bg.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="relative w-[120px] h-[120px] mx-auto mb-5">
                            {/* Dynamic Images */}
                            {CurElem.image1 && (
                                <img
                                    src={CurElem.image1}
                                    alt="Circle"
                                    width={60}
                                    height={60}
                                    className="absolute top-12 left-0 z-10"
                                />
                            )}
                            {CurElem.image2 && (
                                <img
                                    src={CurElem.image2}
                                    alt="Vector"
                                    width={80}
                                    height={80}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            )}
                        </div>

                        <h2 className="text-2xl font-bold mb-3">{CurElem.h2}</h2>
                        <p className="max-w-[300px] mx-auto leading-relaxed">{CurElem.p}</p>
                    </section>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Main;






















// import React from "react";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <>
//       <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] z-0">
//         <div className=" inset-0 w-full h-full">
//           <Image
//             src="/images/work.png"
//             alt="Hero Image"
//             className="object-cover"
//             fill
//             priority
//           />
//         </div>
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8 xl:px-10">
//           <p className="">DISCOVER-DESIGN-DEVELOP-LAUNCH</p>
//           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 md:mt-6">
//             Unleash business growth with our Software Development Services
//           </h1>
//           <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-4 md:mt-6 max-w-5xl">
//             Get tailored software solutions with our Custom Software Development
//             Services. Our team of expert developers offers comprehensive support
//             from strategy to launch, helping you achieve success at scale.
//           </p>
//         </div>
//       </div>
//       {/* Additional Images Section */}
//       <div className="z-30 flex justify-center w-[80%] rounded-2xl py-2 mx-auto space-x-3 absolute -bottom-56 left-36 shadow-lg bg-white">
//         <div className="border border-sky-300 w-40 h-40 flex flex-col items-center justify-center p-4">
//           <div className="w-16 h-16 relative">
//             <Image
//               src="/images/circle.png"
//               alt="Hero Image"
//               className="object-contain"
//               fill
//             />
//           </div>
//           <p className="mt-2 text-center">Web Development</p>
//         </div>
//         <div className="border border-sky-300 w-40 h-40 flex flex-col items-center justify-center p-4">
//           <div className="w-16 h-16 relative">
//             <Image
//               src="/images/mob.png"
//               alt="Hero Image"
//               className="object-contain"
//               fill
//             />
//           </div>
//           <p className="mt-2 text-center">Mobile Development</p>
//         </div>
//         <div className="border border-sky-300 w-40 h-40 flex flex-col items-center justify-center p-4">
//           <div className="w-16 h-16 relative">
//             <Image
//               src="/images/brain.png"
//               alt="Hero Image"
//               className="object-contain"
//               fill
//             />
//           </div>
//           <p className="mt-2 text-center">AI Development Services</p>
//         </div>
//         <div className="border border-sky-300 w-40 h-40 flex flex-col items-center justify-center p-4">
//           <div className="w-16 h-16 relative">
//             <Image
//               src="/images/cart.png"
//               alt="Hero Image"
//               className="object-contain"
//               fill
//             />
//           </div>
//           <p className="mt-2 text-center">Ecommerce Development</p>
//         </div>
//         <div className="border border-sky-300 w-40 h-40 flex flex-col items-center justify-center p-4">
//           <div className="w-16 h-16 relative">
//             <Image
//               src="/images/comp.png"
//               alt="Hero Image"
//               className="object-contain"
//               fill
//             />
//           </div>
//           <p className="mt-2 text-center">Blockchain Development</p>
//         </div>
//         <div className="border border-sky-300 w-40 h-40 flex flex-col items-center justify-center p-4">
//           <div className="w-16 h-16 relative">
//             <Image
//               src="/images/cloud.png"
//               alt="Hero Image"
//               className="object-contain"
//               fill
//             />
//           </div>
//           <p className="mt-2 text-center">Cloud Development</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;