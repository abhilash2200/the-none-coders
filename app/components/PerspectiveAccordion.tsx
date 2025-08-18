
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
    content: 'This is the content of the second accordion item.',
  },
  {
    title: 'TRANSPARENCY',
    content: 'This is the content of the third accordion item.',
  },
  {
    title: 'STANDARDISATION',
    content: 'This is the content of the third accordion item.',
  },
  {
    title: 'AI UTILITY',
    content: 'This is the content of the third accordion item.',
  },
  {
    title: 'AUTOMATIONS',
    content: 'This is the content of the third accordion item.',
  },
];

const PerspectiveAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first item open

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-full mx-auto mt-10">
    {accordionData.map((item, index) => {
      const isOpen = activeIndex === index;

      return (
        <div key={index} className="border-t-4 border-[#5379F6] mb-5">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-[20px] text-left px-4 py-3 font-bold hover:bg-gray-100 transition"
          >
            <span>{item.title}</span>
            <span className="text-xl">{isOpen ? <RemoveIcon/> : <AddIcon/>}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-4 py-2 bg-white text-[18px]">{item.content}</p>
          </div>
        </div>
      );
    })}
  </div>
  );
};

export default PerspectiveAccordion;