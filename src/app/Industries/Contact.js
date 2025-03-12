'use client'
import React, { useState } from 'react';
import { FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="w-full">
      <div className="w-[93%] p-10 mx-auto">
        <div className="w-full mx-auto text-center">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <p className="text-gray-500 mt-3">Any question or remarks? Just write us a message!</p>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center mt-24">
          {/* Left Section */}
          <div className="lg:w-[50%] md:mt-0 mt-6">
            <h1 className="text-lg font-semibold">We’re just a message away!</h1>
            <p className="flex items-center mt-2">
              <FaCheckCircle className="text-sky-400 mr-2" />
              You’ll receive a response within 24 hours.
            </p>
            <p className="flex items-center mt-2">
              <FaCheckCircle className="text-sky-400 mr-2 mb-6" />
              Engage directly with our product and tech experts, ensuring efficient and personalized support.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Image
                src="/images/undraw_mobile-content_yz21 1.png"
                alt="Contact Illustration"
                width={400}
                height={300}
              />
            </div>
          </div>

          {/* Right Section Form */}
          <div className="w-full max-w-[600px] mx-auto px-5 sm:px-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-10">
                <div className="flex flex-col w-full md:w-1/2 ">
                  <label className="font-semibold text-md">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-b-[1px] border-black mt-5 bg-transparent focus:outline-none"
                    aria-label="First Name"
                    required
                    
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="font-bold text-md">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-b-[1px] border-black mt-5 bg-transparent focus:outline-none"
                    aria-label="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="font-bold text-md">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b-[1px] border-black bg-transparent mt-5 focus:outline-none"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="font-bold text-md">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border-b-[1px] border-black bg-transparent mt-5 focus:outline-none"
                    aria-label="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <label className="font-bold text-md">Message :</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-b-[1px] border-black bg-transparent focus:outline-none mt-5"
                  aria-label="Message"
                  required
                />
              </div>
              <div className="flex justify-end mt-14">
                <button
                  type="submit"
                  className="bg-white border text-black p-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100 transition duration-300"
                >
                  <span>Send Message</span>
                  <span className="p-2 rounded-full bg-sky-400">
                    <FaLongArrowAltRight className="text-white" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;