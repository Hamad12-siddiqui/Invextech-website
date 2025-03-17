'use client';
import React from 'react';
import Image from 'next/image';
import Main from './Main';
import Highlights from '../About/Highlights';
import Policy from '../About/Policy';
import Goal from './Goal';
import Testimoniam from './Testimoniam';
import Contact from '../Industries/Contact';

const Header = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/about.png"
          alt="Digital product development background"
          fill
          quality={100}
          className="absolute inset-0 z-0 object-cover"
          priority
        />
        <div className="relative z-10 flex h-full flex-col justify-center text-white max-w-[90%] md:max-w-[89%] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="underline text-sm sm:text-base md:text-lg">About Us</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Revolutionizing
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Businesses with Cutting-
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Edge Digital Innovations
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:max-w-[60%] md:max-w-[50%]  w-full">
            We transform ideas into disruptive digital products and strategies
            to drive growth for Startups, SMBs, and Enterprises.
          </p>
          <button className="text-white bg-sky-600 mt-8 rounded-full py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 max-w-[175px] sm:max-w-[200px] md:max-w-[225px] hover:bg-sky-500 transition-all duration-300">
            Talk To Our Experts
          </button>
        </div>
      </section>
      <Main />
      <Highlights />
      <Policy />
      <Goal />
      <Testimoniam />
      <Contact />
    </>
  );
};

export default Header;