
'use client'
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const accordionData = [
  {
    title: 'COMMUNITY',
    content: 'A successful growth comes with dedicated efforts and an intelligent mind. Here we have a vision to build a better community of creative thinkers and dedicated resources to build something extraordinary in this IT sector. Taking this as an initiative to bring a betterment for the society to introduce them with the use of technology and AI to generate more productivity.',
  },
  {
    title: 'SUSTAINABILITY',
    content: 'More than 60% of the industry is still not aware of the use of a basic software. It can reduce their daily hustle of tedious jobs by 50-70% depending on the nature of the business. We are on a path to develop some sustainable products and services which can help them to reduce the hustle and increase the productivity.',
  },
  {
    title: 'TRANSPARENCY',
    content: 'We build trust with transparency. Any industry is now completely  data-driven and behaviour analysis of the consumer. Keeping your data safe and secure with the maximum transparency and control is the objective',
  },
  {
    title: 'STANDARDISATION',
    content: 'Anywhere in this business industry, standardisation is the best way to channelise things and increase the productivity. Aiming a standardisation process in our execution and in deliverables is our next step action to make things simpler and easy to use.',
  },
  {
    title: 'AI UTILITY',
    content: 'In this vast world of using smart technologies like Artificial Intelligence and Machine Learning. It is necessary to be introduced to the ground level use to enhance the work process and necessity around the globe. Bringing a step by step utilisation of AI in todays environment is the next contribution to the mankind.',
  },
  {
    title: 'AUTOMATIONS',
    content: 'Software automation enhances efficiency by reducing manual tasks, improving accuracy, and speeding up workflows. Combined with continuous software improvements—like performance tuning, security updates, and new feature rollouts—it drives productivity, adaptability, and smarter operations across businesses and industries.',
  },
];

const PerspectiveAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-full mx-auto mt-10">
    {accordionData.map((item, index) => {
      const isOpen = activeIndex === index;

      return (
        <div key={index} className="md:border-t-3 border-t-2 border-[#5379F6] mb-5">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-[20px] text-left px-4 py-3 font-bold hover:bg-gray-100 hover:cursor-pointer transition"
          >
            <span className='text-[16px] md:text-[20px]'>{item.title}</span>
            <span className="text-[16px] md:text-[20px]">{isOpen ? <RemoveIcon/> : <AddIcon/>}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isOpen ? 'md:max-h-40 max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-4 py-2 bg-white text-[16px] md:text-[18px]">{item.content}</p>
          </div>
        </div>
      );
    })}
  </div>
  );
};

export default PerspectiveAccordion;