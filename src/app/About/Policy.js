import React from 'react';
import Image from 'next/image';

const Policy = () => {
  const policyItems = [
    {
      id: 1,
      imageSrc: "/images/quality_1-1 1.png",
      title: "Quality IT Solutions with Compliance",
      description: "Invextech strives to provide the highest level of quality turnkey IT Business Solutions to its existing and potential customers while remaining compliant with national and international regulatory requirements."
    },
    {
      id: 2,
      imageSrc: "/images/lpwoemn.png",
      title: "Quality IT Solutions with Compliance",
      description: "Invextech strives to provide the highest level of quality turnkey IT Business Solutions to its existing and potential customers while remaining compliant with national and international regulatory requirements."
    },
    {
      id: 3,
      imageSrc: "/images/Clip path group.png",
      title: "Quality IT Solutions with Compliance",
      description: "Invextech strives to provide the highest level of quality turnkey IT Business Solutions to its existing and potential customers while remaining compliant with national and international regulatory requirements."
    },
    {
      id: 4,
      imageSrc: "/images/shakehand.png",
      title: "Quality IT Solutions with Compliance",
      description: "Invextech strives to provide the highest level of quality turnkey IT Business Solutions to its existing and potential customers while remaining compliant with national and international regulatory requirements."
    }
  ];

  return (
    <>
      <div className="w-full bg-sky-100 pt-10 pb-20">
        <div className="w-[90%] md:w-[86%] mx-auto">
          <div className="text-center">
            <p className="text-sky-400 text-base md:text-xl font-semibold">
              Your Expert Partner in Tailored Software Solutions
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mt-3">
              Invextech Quality Policy Ensures Excellence Throughout Development
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {policyItems.map((item) => (
              <div
                key={item.id}
                className="border text-center p-5 bg-white flex-1 min-w-[250px] max-w-[300px] m-2 rounded-lg shadow-lg"
              >
                <div className="flex justify-center">
                  <Image
                    src={item.imageSrc}
                    alt="Quality it"
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="font-bold mt-3 text-lg">{item.title}</h2>
                <p className="mt-2 px-4 text-sm md:text-base text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;