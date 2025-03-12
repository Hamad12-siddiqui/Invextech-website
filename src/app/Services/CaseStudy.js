"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Highlights from '../About/Highlights'
import Carsoule from './Carsoule'
import Chooseinvex from'./Chooseinvex'
import Talk from '../TalkExpert/Talk'
const CaseStudy = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      image: "/images/website-6692147_1280.png",
      title: "Web Development",
      content:
        "At Invextech, we provide tailored web development services using various technologies including, but not limited to, PHP, Laravel, Ruby on Rails, React, and JavaScript. Our collective team of developers has expertise in multiple languages, allowing us to handle any project, big or small, with ease. Whether you need a website, web application, or custom software, we will bring your ideas to life with our expertise in web development. Trust us to help you achieve your business goals with our wide range of skills and knowledge.",
    },
    {
      image: "/images/digital-marketing-6614263_1280.png",
      title: "Mobile App Development",
      content:
        "We specialize in creating high-quality mobile applications for both iOS and Android platforms. Our team uses the latest technologies like Swift, Kotlin, and React Native to build apps that are not only visually appealing but also highly functional and user-friendly. Whether you need a native app for a specific platform or a cross-platform solution, we deliver seamless performance and exceptional user experiences. From concept to deployment, we ensure your app meets the highest standards of quality and innovation.",
    },
    {
      image: "/images/programming-8450423_1280.png",
      title: "Ai Development Services",
      content:
        "We offer cutting-edge AI development services to help businesses harness the power of artificial intelligence. Our expertise includes **machine learning**, **natural language processing (NLP)**, **computer vision**, and **predictive analytics**. Whether you need AI-powered chatbots, recommendation systems, or automation solutions, we build intelligent systems that drive efficiency, innovation, and growth. Partner with us to transform your business with AI.",
    },
    {
      image: "/images/e-commerce-6898102_1280.png",
      title: "E-commerce Development",
      content:
        "We build robust and scalable e-commerce platforms that empower businesses to sell online effortlessly. Our solutions include custom storefronts, payment gateway integrations, inventory management, and personalized shopping experiences. Using platforms like **Shopify**, **Magento**, and **WooCommerce**, we create seamless online stores that drive sales and enhance customer satisfaction. Let us help you grow your online business with our e-commerce expertise.",
    },
    {
      image: "/images/blockchain-6999641_1280.jpg",
      title: "Blockchain Development",
      content:
        "We provide end-to-end blockchain development services, including **smart contracts**, **decentralized applications (dApps)**, and **cryptocurrency solutions**. Our team leverages technologies like **Ethereum**, **Hyperledger**, and **Binance Smart Chain** to build secure, transparent, and efficient blockchain systems. Whether you need a blockchain-based supply chain solution or a decentralized finance (DeFi) platform, we deliver innovative solutions tailored to your needs.",
    },
    {
      image: "/images/courier-service-6739523_1280.png",
      title: "DevOps Services",
      content:
        "Our DevOps services streamline software development and deployment processes, enabling faster and more reliable delivery of applications. We implement **CI/CD pipelines**, **infrastructure as code (IaC)**, and **automated testing** to optimize your development lifecycle. Using tools like **Docker**, **Kubernetes**, **Jenkins**, and **Terraform**, we ensure seamless collaboration between development and operations teams. Partner with us to achieve agility and scalability in your software delivery.",
    },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  if (pages.length === 0) {
    return <div>No case studies available.</div>;
  }

  return (
    <>
      <div className="max-w-[1440px] mx-auto pt-14 pb-14 bg-sky-100">
        <div className="w-full lg:w-[60%] mx-auto flex flex-col lg:flex-row gap-10 border p-6 items-center rounded-3xl bg-white border-sky-400 relative min-h-[400px]">
          {/* Left Side Content */}
          <div className="w-full lg:w-[40%] flex items-center justify-center">
            <Image
              src={pages[currentPage].image}
              alt={pages[currentPage].title}
              width={300}
              height={300}
              className="object-contain rounded-xl"
              priority={currentPage === 0}
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center carousel-transition">
            <h1 className="text-2xl font-bold mb-2">
              {pages[currentPage].title}
            </h1>
            <p className="text-gray-700">{pages[currentPage].content}</p>
            <p className="flex gap-2 items-center text-sky-400 mt-3">
              View Case Study{" "}
              <span className="bg-sky-500 p-2 rounded-full">
                <FaArrowRight className="text-white" />
              </span>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%] mx-auto flex justify-end gap-3 mt-4">
          <button
            className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition-all"
            onClick={handlePrevious}
            aria-label="Previous Page"
          >
            <IoIosArrowBack />
          </button>
          <button
            className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition-all"
            onClick={handleNext}
            aria-label="Next Page"
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {pages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? "bg-sky-500" : "bg-sky-300"
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <Highlights />
      <Carsoule />
      <Talk />
      <Chooseinvex />
    </>
  );
};

export default CaseStudy;