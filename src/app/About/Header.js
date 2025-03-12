'use client'
import React from 'react';
import Image from 'next/image';
import Main from './Main'
import Highlights from '../About/Highlights'
import Policy from '../About/Policy'
import Goal from './Goal'
import Testimoniam from './Testimoniam';
import Contact from '../Industries/Contact'
const Header = () => {
  return (
<>
    <section className="relative h-screen w-full overflow-hidden">

      <Image
        src="/images/about.png"
        alt="Digital product development background"
        fill
        quality={100}
        className="absolute inset-0 z-0 object-cover"
        priority 
      />

      <div className="relative z-10 flex h-full flex-col justify-center text-white max-w-[500px] mx-4 md:mx-20">
      <p className='underline'>About Us</p>
        <h1 className='text-2xl md:text-4xl font-bold mt-2'>Revolutionizing</h1>
        <h1 className='text-2xl md:text-4xl font-bold mt-4 mb-4'>Businesses with Cutting-Edge Digital Innovations</h1>
        <p className='text-base md:text-lg'>We transform ideas into disruptive digital products and strategies to drive growth for Startups, SMBs, and Enterprises.</p>
        <button className='text-white bg-sky-600 mt-8 rounded-full py-3 max-w-[200px]'>Talk To Our Experts</button>
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