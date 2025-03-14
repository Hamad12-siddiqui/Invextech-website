import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaSkype } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import Contact from "../Industries/Contact"

const Header = () => {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">
  
      <Image
        src="/images/work.png"
        alt="Digital product development background"
        fill
        quality={100}
        className="absolute inset-0 z-0 object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-sm sm:text-base md:text-lg mb-8 max-w-[80%]">
          Want to consult with industry specialists? Take advantage of our call scheduling feature to easily book a time
          slot that accommodates your availability.
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="bg-[#42A9C4A1] rounded-full p-2 text-white hover:text-gray-300 transition-colors"
          >
            <FaWhatsapp size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </a>
          <a
            href="https://join.skype.com/invite/your-skype-id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on Skype"
            className="bg-[#42A9C4A1] rounded-full p-2 text-white hover:text-gray-300 transition-colors"
          >
            <FaSkype size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </a>
          <a
            href="tel:+92 3117253791"
            aria-label="Call us"
            className="bg-[#42A9C4A1] rounded-full p-2 text-white hover:text-gray-300 transition-colors"
          >
            <LuPhoneCall size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </a>
          <a
            href="mailto:invextech@gmail.com"
            aria-label="Email us"
            className="bg-[#42A9C4A1] rounded-full p-2 text-white hover:text-gray-300 transition-colors"
          >
            <HiOutlineMail size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </a>
        </div>
      </div>
    </section>
    <div className='bg-sky-100'>
    <Contact />
    </div>
    </>
  );
};

export default Header;