// import React from 'react'
// import Image from 'next/image'

// const Portfolio = () => {
//   return (
//    <>
//     <div className="w-full">
//       <div className="lg:w-[93%] w-full mx-auto p-4 lg:p-16"> 
//         <div className="flex flex-col md:flex-row  w-full"> 
       
//           <div className="flex-1 w-full md:w-[50%] mb-8 md:mb-0"> 
//             <p className="text-sky-400 font-bold">Work With Us</p>
//             <h1 className="text-3xl font-bold"> Our Portfolio</h1>
//             <div className="md:w-full w-[80%]  h-auto">
//               <Image 
//                 src="/images/Group 1597883421.png" 
//                 alt="Team" 
//                 width={500} 
//                 height={300} 
//                 layout="responsive"
//               />
           
//             </div>
           
//           </div>

//           <div className="flex-1 w-full md:w-[40%] mt-8 md:mt-16 md:pl-16"> 
//             <p className="text-sky-400 font-bold">Healthcare</p>
//             <h1 className="text-2xl font-bold">DOSINGMADEEASY</h1>
//             <p className="text-sm md:text-base "> 
//               DosingMadeEasy is a dosing calculator that automates medication
//               dosing calculations based on factors like renal function and
//               infectious diseases. The platform integrates a secure user login,
//               subscription-based access, and multilingual options to support a
//               global user base. This solution improves dosing safety by reducing
//               manual errors.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//    </>
//   )
// }

// export default Portfolio






import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <>
      <div className='w-full bg-sky-100 mt-3'>
        <div className='max-w-[85%] mx-auto pt-12'>
          <p className='text-sky-500'>Work With Us</p>
          <h1 className='text-3xl font-bold mt-1'>Our Portfolio</h1>
          <div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-5'>
            <div className='w-full md:w-[50%]'>
              <Image 
                src="/images/Group 1597883421.png" 
                alt="Team" 
                width={500} 
                height={300} 
                layout="responsive"
              />
            </div>
            <div className='w-full md:w-[40%] mx-auto'>
              <p className="text-sky-400 font-bold">Healthcare</p>
              <h1 className="text-2xl font-bold">DOSINGMADEEASY</h1>
              <p className="text-sm md:text-base my-4">
                DosingMadeEasy is a dosing calculator that automates medication
                dosing calculations based on factors like renal function and
                infectious diseases. The platform integrates a secure user login,
                subscription-based access, and multilingual options to support a
                global user base. This solution improves dosing safety by reducing
                manual errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio