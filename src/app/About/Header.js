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
        <div className="relative z-10 flex h-full flex-col justify-center text-white max-w-[90%] md:max-w-[85%] mx-auto px-4">
          <p className="underline text-sm md:text-base">About Us</p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">Revolutionizing</h1>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">Businesses with Cutting-</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Edge Digital Innovations</h2>
          <p className="text-sm md:text-base lg:text-lg">
            We transform ideas into disruptive digital products and strategies to drive growth for Startups, SMBs, and Enterprises.
          </p>
          <button className="text-white bg-sky-600 mt-8 rounded-full py-2 px-4 md:py-3 md:px-6 max-w-[175px] md:max-w-[200px] hover:bg-sky-500">
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