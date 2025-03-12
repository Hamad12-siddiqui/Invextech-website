'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Contact from "../Industries/Contact";
const projects = [
  {
    id: 1,
    title: "Tow Truck Management Platform",
    description:
      "Platform to manage tow services in a seamless way. Able to create bookings, assign to tow truck drivers, track tow truck live location using GPS, pay online, and generate invoices. The platform also offers business KPIs such as driver performance and tow truck utilization.",
    imageUrl: "/images/scren1.png",
    iconUrl: "/images/truck.png",
    color: "#5EB5DC", 
  },
  {
    id: 2,
    title: "Shipment Tracking IoT Platform",
    description:
      "Flyde offers immutable, transparent and live data for logistics and supply chain delivery management. IoT sensors associated with shipments will measure and transmit data such as temperature, humidity and vibration to Hyper ledger fabric blockchain from where data will be accessed by respective stake holders",
    imageUrl: "/images/scren2.png",
    iconUrl: "/images/flyde.png",
    color: "#4371EC",
  },
  {
    id: 3,
    title: "Healthcare Equipments Management App",
    description:
      "Forte Healthcare app is to manage the performance of every single equipment mattress performance by running test cases in app against all forte equipment. App is designed to use by forte partners and team members.",
    imageUrl: "/images/scren3.png",
    iconUrl: "/images/Forte 1.png",
    color: "#5EB5DC",
  },
  {
    id: 4,
    title: "Clinic Management Software Development",
    description:
      "Comprehensive software product offers clinic patient management, online prescription, patient appointments, inventory management, online consultation all in one product. Desktop based User panel, mobile app for clinic and patients.",
    imageUrl: "/images/scren4.png",
    iconUrl: "/images/SkyClinic 1.png",
    color: "#F32E95",
  },
  {
    id: 5,
    title: "Healthcare Equipments Management App",
    description:
      "Forte Healthcare app is to manage the performance of every single equipment mattress performance by running test cases in app against all forte equipment. App is designed to use by forte partners and team members.",
    imageUrl: "/images/scren5.png",
    iconUrl: "/images/Victorian 1.png",
    color: "#B90112",
  },
  {
    id: 6,
    title: "Cloud Based Project Management Platform",
    description:
      "Cloud based mobile app platform to perform Job Safety Analysis (JSA) and other safe work best practice documents such as Take-2 and SWMS. Project management features like create project, assign team members to project, report daily progress using mobile app, review and approve daily reports.",
    imageUrl: "/images/scren6.png",
    iconUrl: "/images/OhsBuddy Logo1 1.png",
    color: "#FC6227",
  },
];

const Main = () => {
  return (
    <>
      <div className="w-full mt-28 px-4 md:px-0">
        <div className="w-full md:w-[82%] mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row justify-between items-center gap-8 md:gap-28 mt-14 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={project.iconUrl}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                  <h1
                    className="text-2xl md:text-4xl font-bold ml-4"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h1>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-700 text-sm md:text-base">
                    {project.description}
                  </p>
                  <button
                    className="py-2 px-3 rounded-full mt-6 border text-sm md:text-base"
                    style={{
                      color: project.color,
                      borderColor: project.color,
                      backgroundColor: project.color + "20",
                    }}
                  >
                    Read Case Study
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={1000}
                  height={500}
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center flex justify-center items-center p-10">
          <button className="text-sky-500 border border-sky-500 px-8 md:px-12 py-2 md:py-3 rounded-lg hover:bg-sky-400 hover:text-white text-sm md:text-base">
            Load More
          </button>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Main;
