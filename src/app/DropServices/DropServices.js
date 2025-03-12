  import React from 'react';
  import Image from 'next/image';

  const services = [
    {
      title: "Web Development",
      description: "Let’s build scalable and secure web applications to elevate your online presence.",
      image: "/images/circle.png",
    },
    {
      title: "Mobile App Development",
      description: "Transforming innovative ideas into user-friendly and high-performing mobile apps.",
      image: "/images/mob.png",
    },
    {
      title: "Ecommerce Development",
      description: "Create customized online stores that stand out in today’s competitive market.",
      image: "/images/cart.png",
    },
    {
      title: "Blockchain Development",
      description: "Transform your business ideas into reality with our tailored software development services.",
      image: "/images/comp.png",
    },
    {
      title: "DevOps Services",
      description: "Maximizing the potential of DevOps technology to streamline your business operations.",
      image: "/images/cloud.png",
    },
    {
      title: "AI Development Services",
      description: "Harness the power of AI to develop smart solutions that drive business efficiency & innovation.",
      image: "/images/brain.png",
    }
  ];

  const DropServices = () => {
    return (
      <div className="w-full">
        <div className="w-[93%] mx-auto flex flex-col lg:flex-row lg:justify-between  text-center items-center pt-24">
          {/* Heading Section */}
          <div className="w-full lg:w-[20%] ml-7  lg:mb-80 -mt-10">
            <h1 className="text-2xl font-bold text-start">Our Services</h1>
            <p className="text-gray-600 text-start font-medium">
              Transform your business ideas into reality with our tailored software development services.
            </p>
          </div>

          <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 lg:-mt-28 mt-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-6 p-3 ">
                {/* Image Container */}
                <div className="relative ">
                  <Image
                    src="/images/Vector.png"
                    alt="Vector"
                    width={100}
                    height={100}
                    className="w-16 h-16 drop-shadow-[8px_8px_10px_rgba(0,6,0,0.3)]"
                  />
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="absolute top-8 left-4 transform -translate-x-1/2 w-8 h-9"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-xl text-start  font-semibold">{service.title}</h1>
                  <p className="text-gray-600 mt-2 leading-6 font-thin text-start">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default DropServices;