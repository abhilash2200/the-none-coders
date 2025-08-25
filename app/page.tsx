'use client'
import Image from "next/image";
import HeadingText from "./components/HeadingText";
import WhatWeDeliver from "./components/WhatWeDeliver";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import TechnologiesUsed from "./components/TechnologiesUsed";
import { EnterpriseCards } from "./components/home/EnterpriseCards";
import { SolutionCards } from "./components/home/SolutionCards";
import { UpdateCards } from "./components/home/UpdateCards";
import { useEffect } from "react";
import { motion } from "framer-motion"

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
              <div className="md:ps-1 ps-0">
                <div className="mb-1 md:mb-0">
                  <span className="text-[25px] md:text-[45px] border-b-4 border-[#61FB83]">LET US</span>
                </div>
                <div className="overflow-hidden text-[35px] leading-[40px] text-[#000] py-1 md:py-3 mb-2 md:mb-0">
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
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        
        className="container mx-auto px-4">
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
        </motion.div>
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
        <UpdateCards />
      </section>

    </main>
  );
}
