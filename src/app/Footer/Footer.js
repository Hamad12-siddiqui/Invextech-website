import React from "react";
import Image from "next/image";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import  Last from './Last';


const iconComponents = {
  FaHouse: <FaHouse size={36} className="text-white mr-2 mb-10  border-2 border-dashed p-1 rounded-full" />,
  AiOutlineMail: <MdEmail size={36} className="text-white mr-2  mb-4  border-2 border-dashed p-1 rounded-full" />,
  FaPhoneAlt: <FaPhoneAlt size={36} className="text-white mr-2  border-2 mb-5 border-dashed p-1 rounded-full" />,
};

const Footer = ({ services, quickLinks, contactDetails }) => {
  return (
    <>
    <div className="w-full bg-[#0D2B43] border-t border-b border-gray-500 p-8">
      <div className="w-[95%] mx-auto flex flex-col lg:flex-row justify-between  py-12 space-y-8 lg:space-y-0">

        <div className="w-full lg:w-[40%] lg:pr-10 lg:pl-10 p-0">
          <Image
            src="/images/invex-logo.png"
            alt="Invex Logo"
            width={200}
            height={200}
          />
          <p className="text-gray-400 mt-6">
            InvexTech is a leading software development company specializing in
            MVPs, AI-powered solutions, and enterprise business systems. We
            cater to industries including Healthcare, FinTech, eCommerce,
            Education, Real Estate, and more.
          </p>
          <div className="flex items-center w-fit border-2 pl-2 rounded-full mt-6 hover:bg-sky-400 group cursor-pointer">
            <p className="text-white mr-2 group-hover:text-white">
              Get Started
            </p>
            <span className="bg-white p-4 rounded-full group-hover:bg-sky-400">
              <FaArrowRight className="text-black group-hover:text-white" />
            </span>
          </div>
        </div>

    
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h1 className="text-white text-lg font-semibold mb-4">Services</h1>
            {services.map((service, index) => (
              <p key={index} className="text-gray-400 mb-2">
                {service}
              </p>
            ))}
          </div>


          <div>
            <h1 className="text-white text-lg font-semibold mb-4">Quick Links</h1>
            {quickLinks.map((link, index) => (
              <p key={index} className="text-gray-400 mb-2">
                {link}
              </p>
            ))}
          </div>
          <div>
            <h1 className="text-white text-lg font-semibold mb-4">Contact Us</h1>
            {contactDetails.map((contact, index) => (
              <div key={index} className="flex  items-center mb-4">
                {iconComponents[contact.icon]}
                <div>
                  <p className="text-white text-xl">{contact.label}</p>
                  <p className="text-gray-400">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Last />
    </>
  );
};

export default Footer;
