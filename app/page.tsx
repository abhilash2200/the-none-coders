'use client'
import Image from "next/image";
import HeadingText from "./components/HeadingText";
import WhatWeDeliver from "./components/WhatWeDeliver";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import TechnologiesUsed from "./components/TechnologiesUsed";
import { Tooltip } from "@mui/material";
import { EnterpriseCards } from "./components/home/EnterpriseCards";
import { SolutionCards } from "./components/home/SolutionCards";
import { useEffect } from "react";

interface WhatWeDeliverData {
  title: string;
  desc: string;
  icon: string;
}
const whatwedeliverData: WhatWeDeliverData[] = [
  {
    title: 'A Great Consultation',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'Seamless Technology',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'World Class Experience',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'Unbelievable Support',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
];

interface ExpertiseData {
  title: string;
  img: string;
  desc: string;
  href: string;
}

const expertiseData: ExpertiseData[] = [
  {
    title: 'Customised Softwares',
    img: '/assets/img/solution.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: '#'
  },
  {
    title: 'E-Learning Applications',
    img: '/assets/img/solution-2.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: '#'
  },
  {
    title: 'CRM Development',
    img: '/assets/img/solution-3.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: '#'
  },
  {
    title: 'Networking Applications',
    img: '/assets/img/solution-4.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: '#'
  },

];




export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <main>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-y-4">
            <div className="w-full lg:w-[50%] flex justify-center flex-col">
              <div className="ps-1">
                <div>
                  <span className="text-[25px] md:text-[45px] border-b-4 border-[#61FB83]">LET US</span>
                </div>
                <div className="overflow-hidden text-[35px] leading-[40px] text-[#000] py-1 md:py-3">
                  <div className="relative flex items-start gap-x-1 h-[40px] overflow-hidden">
                    <p className="inline m-0 text-[19px] md:text-[30px]">Help you build something</p>
                    {/* <ul className="mt-0 text-left list-none animate-change text-[#19d442] text-[19px] md:text-[30px]">
                      <li className="leading-[40px] m-0">Great.</li>
                      <li className="leading-[40px] m-0">World Class.</li>
                      <li className="leading-[40px] m-0">Excellent.</li>
                      <li className="leading-[40px] m-0">Amazing.</li>
                    </ul> */}
                    <ContainerTextFlip
                      words={["Great.", "World Class.", "Excellent.", "Amazing."]}
                      className="text-[#19d442] text-[19px] md:text-[30px]"
                    />
                  </div>
                </div>
                {/* <p className="text-[30px]">Help you build something <span className="bg-[#61FB83] px-1">Great.</span></p> */}
              </div>
              <button
                className="cursor-pointer group relative bg-gray-100 hover:bg-zinc-300 text-black font-semibold text-sm py-3 rounded-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-lg w-40 h-12"
              >
                <div className="relative flex items-center justify-center gap-2">
                  <span className="relative inline-block overflow-hidden">
                    <span
                      className="block transition-transform duration-300 group-hover:-translate-y-full"
                    >
                      Get Started
                    </span>
                    <span
                      className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                    >
                      Right Now
                    </span>
                  </span>

                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                  >
                    <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="white"
                      d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="w-full lg:w-[50%]">
              <Image className="mx-auto" src='/assets/img/developer.gif' alt="hero img" height={700} width={440} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="WHAT WE DELIVER" />
          </div>
          <div className="flex flex-wrap gap-y-8">
            {
              whatwedeliverData.map((ele, i) => {
                return (
                  <div key={i} className="w-full md:w-[50%] xl:w-[25%] px-1.5">
                    <WhatWeDeliver
                      title={ele.title}
                      desc={ele.desc}
                      icon={ele.icon}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      <section className="py-6 lg:py-12">
        <EnterpriseCards />
      </section>

      <section className="py-6 lg:py-12">
        <div className="mb-12">
          <HeadingText textalign="text-center" heading="TECHNOLOGIES USED" />
        </div>
        <TechnologiesUsed />
      </section>

      <section className="py-6 lg:py-12">
        <SolutionCards />
      </section>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="UPDATES" />
          </div>
          <div className="flex flex-wrap gap-y-4">
            {
              [...Array(3)].map((_, i) => {
                return (
                  <div key={i} className="w-full md:w-[50%] lg:w-[33.33%] px-1.5">
                    <div>
                      <Image className="w-full" src='/assets/img/bg-gray.jpg' alt="" width={405} height={250} />
                    </div>
                    <div>
                      <h3 className="my-3 text-[22px] leading-tight">THIS IS  A DEMO BLOG TOPIC WHICH
                        <br />I’M ABOUT TO WRITE</h3>
                      <p className="text-[#414141]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                      <div className='mt-5'>
                        <Tooltip title="Visit Now" placement='top'>
                          <a
                            href='#'
                            className="block w-13 h-13 shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-2 overflow-hidden border-2 rounded-full group"
                          >
                            <svg
                              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
                              viewBox="0 0 16 19"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                className="fill-gray-800 group-hover:fill-gray-800"
                              ></path>
                            </svg>
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

    </main>
  );
}
