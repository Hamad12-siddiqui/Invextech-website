import React from 'react';
import Image from 'next/image';
// import Goal from './Goal';

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
      <div className='w-full bg-sky-100 pt-10 pb-20'>
        <div className='w-[93%] m-auto'>
          <div className='text-center'> 
            <p className='text-sky-400 text-xl font-semibold'>Your Expert Partner in Tailored Software Solutions</p>
            <h1 className='text-3xl font-bold mt-3'>Invextech Quality Policy Ensures Excellence Throughout Development</h1>
          </div>
          <div className='flex flex-wrap justify-center gap-3 mt-5'>
            {policyItems.map((item) => (
              <div key={item.id} className='border text-center pt-5 pb-5  bg-white flex-1 min-w-[250px] max-w-[300px] m-2'>
                <div className='flex justify-center'>
                  <Image src={item.imageSrc} alt="Quality it" width={100} height={100} />
                </div>
                <h2 className='font-bold mt-3'>{item.title}</h2>
                <p className='mt-2 px-4'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Goal /> */}
    </>
  );
};

export default Policy;