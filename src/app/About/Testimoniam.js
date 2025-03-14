import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

const testimonials = [
    {
      id: 1,
      text: "Working with InvexTech was an exceptional experience! Their highly professional team showcased expertise, clear communication, and a strong commitment to delivering a high-quality, user-friendly solution on time. They exceeded our expectations at every step. Highly recommended!",
      rating: 4.7,
      reviews: 4,
      image: "/images/testi.png",
      name: "Peter Johnson",
      role: "Product Manager, Kustomer",
    },
    {
      id: 2,
      text: "Working with InvexTech was an exceptional experience! Their highly professional team showcased expertise, clear communication, and a strong commitment to delivering a high-quality, user-friendly solution on time. They exceeded our expectations at every step. Highly recommended!",
      rating: 4.5,
      reviews: 3,
      image: "/images/testi.png",
      name: "Sarah Lee",
      role: "CEO, TechSolutions",
    },
    {
      id: 3,
      text: "Working with InvexTech was an exceptional experience! Their highly professional team showcased expertise, clear communication, and a strong commitment to delivering a high-quality, user-friendly solution on time. They exceeded our expectations at every step. Highly recommended!",
      rating: 4.9,
      reviews: 5,
      image: "/images/testi.png",
      name: "John Doe",
      role: "CTO, Innovate Inc.",
    },
  ];

const Testimoniam = () => {
  return (
    <>
      <div className="w-full bg-sky-100 p-10">
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border border-sky-400 p-6 rounded-xl bg-white flex-1 relative mb-6 md:mb-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    <FaStarHalfAlt className="text-yellow-400" />
                  </div>
                  <p className="ml-2 text-gray-600">
                    {testimonial.rating} ({testimonial.reviews} Reviews)
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h1 className="font-bold">{testimonial.name}</h1>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
             
                <div className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full">
                  <MdOutlineArrowOutward className="text-gray-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoniam;