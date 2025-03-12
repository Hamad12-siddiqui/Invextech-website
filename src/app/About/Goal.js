import React from 'react';
import Image from 'next/image'; 
// import Organization from '../Industries/Organization'

const Goal = () => {
  return (
    <>
      <div className='w-full pt-10 pb-28'>
        <div className='w-[85%] lg:w-[80%] xl:w-[90%] m-auto'>
          <p className='text-sky-400 font-semibold text-center'>
            Our Clients
          </p>
          <h1 className='text-4xl text-center font-semibold mt-6'>
            From across the globe, organizations entrust our exceptional services to achieve their goals.
          </h1>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-8 mt-8'>
          <Image src="/images/Mask-Group-250.png" alt="Client 1" width={200} height={40} className="object-contain mt-10" />
          <Image src="/images/iddZ7i6Q_H_1738922546115 1.png" alt="Client 2" width={150} height={100} className="object-contain" />
          <Image src="/images/logo_02 1.png" alt="Client 3" width={150} height={100} className="object-contain mt-10" />
          <Image src="/images/Group 1597883423.png" alt="Client 4" width={150} height={100} className="object-contain mt-10" />
        </div>
      </div>
      {/* <Organization /> */}
 
    </>
  );
};

export default Goal;