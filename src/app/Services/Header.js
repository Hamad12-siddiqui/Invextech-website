import React from 'react';
import Image from 'next/image';
import CaseStudy from '../Services/CaseStudy'
const Header = () => {
  return (
    <>
    <div className='relative '>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <div className="inset-0 w-full h-full">
          <Image
            src="/images/work.png"
            alt="Hero Image"
            className="object-cover"
            fill
            priority
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute max-w-[93%] inset-0 flex flex-col justify-center items-center text-white text-center w-[90%] mx-auto px-4">
          <p>DISCOVER-DESIGN-DEVELOP-LAUNCH</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2">
            Unleash business growth with our Software Development Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 ">
            Get tailored software solutions with our Custom Software Development
            Services. Our team of expert developers offers comprehensive support
            from strategy to launch, helping you achieve success at scale.
          </p>
        </div>
      </div>
      {/* <div className='flex flex-wrap justify-center border absolute -bottom-28 left-32 rounded-2xl bg-white w-[83%] mx-auto'>
        {[
          { src: "/images/circle.png", alt: "Web Development", text: "Web Development" },
          { src: "/images/mob.png", alt: "Mobile Development", text: "Mobile Development" },
          { src: "/images/brain.png", alt: "AI Development Services", text: "AI Development Services" },
          { src: "/images/cart.png", alt: "Ecommerce Development", text: "Ecommerce Development" },
          { src: "/images/comp.png", alt: "Blockchain Development", text: "Blockchain Development" },
          { src: "/images/cloud.png", alt: "DevOps Services", text: "DevOps Services" }
        ].map((item, index) => (
          <div key={index} className="border border-sky-400 w-40  m-2 p-2 flex flex-col justify-center items-center">
            <Image src={item.src} alt={item.alt} width={60} height={60} className=' pb-3' />
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div> */}
      </div>
      
      <CaseStudy />
    </>
  );
};

export default Header;