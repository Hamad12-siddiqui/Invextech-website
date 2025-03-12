import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I just get my designs done without committing to your software development services?',
      answer: 'At Invextech, we prioritize transparent communication with our clients throughout the development process. A dedicated project manager, team lead or developer will work closely with you and provide regular updates on the progress of your project. They ensure your desired outcomes are met, and any concerns are addressed promptly. Expect timely and transparent communication from our team.',
    },
    {
      question: 'What are your working models for software development?',
      answer: 'The cost of developing a custom blockchain solution is dependent on several factors including complexity, timeline, features, platform, and the required level of security. Generally, development costs may range from a few thousand to several hundred thousand dollars. We can only give you a fixed cost and timeline after discussing your project details. You can reach out to us for a free consultation using the Contact Us form.',
    },
    {
        question: 'Can you upgrade my blockchain product in the future?',
        answer: 'Absolutely! Our blockchain development services include future-proofing and upgrading your blockchain product. Invextech skilled experts are well-equipped to evaluate and upgrade your existing solution, assuring scalability, security, and enhanced functionality. We stay updated on blockchain technology advancements, ensuring that your solution remains flexible and adaptable to future changes.',
      },
      {
        question: 'What industries can benefit from blockchain technology?',
        answer: 'Numerous industries can benefit from blockchain technology, including, but not limited to: Financial services Supply chain Healthcare Real estate Energy Blockchain can increase transparency, enhance security, reduce costs and simplify operations in all these sectors and more.',
      },
      {
        question: 'Can blockchain technology be integrated with existing business systems?',
        answer: 'Yes, blockchain technology can be integrated with existing business systems. However, the process requires careful planning and execution. Factors to consider include system compatibility, interoperability, scalability, and the potential impact on existing operations',
      },
    {
      question: 'How can smart contracts be utilized in my blockchain application?',
      answer: 'Smart contracts can automate business processes, enforce terms of agreement autonomously, and reduce the need for intermediaries in your blockchain application. So, a smart contract might be used in your blockchain app to ensure that transactions are only executed when predefined conditions are met, increasing confidence and efficiency.',
    },
   
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full'>
      <div className='w-[93%] mx-auto mt-6'>
        <h1 className='text-3xl font-bold text-center'>
          Frequently asked questions regarding Invextech Custom Software Development Services
        </h1>
        <div className='mt-8 w-[80%] mx-auto'>
          {faqs.map((faq, index) => (
            <div key={index} className=' py-1 '>
              <div
                className='flex justify-between items-center cursor-pointer mt-2 border p-6'
                onClick={() => toggleFAQ(index)}
              >
                <h2 className='text-xl font-semibold'>{faq.question}</h2>
                <span className='text-2xl'>
                  {activeIndex === index ? <FaMinus className='text-lg text-sky-400'  /> : <FaPlus className='text-lg text-sky-400' />}
                </span>
              </div>
              {activeIndex === index && (
                <p className='mt-2 shadow-xl bg-sky-100 p-4 rounded-lg text-gray-600'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;