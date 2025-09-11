'use client'
import Image from "next/image";
import HeadingText from "./components/HeadingText";
import WhatWeDeliver from "./components/WhatWeDeliver";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import TechnologiesUsed from "./components/TechnologiesUsed";
import { EnterpriseCards } from "./components/home/EnterpriseCards";
import { SolutionCards } from "./components/home/SolutionCards";
import { UpdateCards } from "./components/home/UpdateCards";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import SliderPopup from "@/components/SliderPopup";
import { useTheme } from "./context/ThemeContext";
import AnimatedBackground from "@/components/AnimatedBackground";

interface WhatWeDeliverData {
  title: string;
  desc: string;
  icon: string;
}
const whatwedeliverData: WhatWeDeliverData[] = [
  {
    title: 'A Great Consultation',
    desc: 'We believe every successful IT project starts with a great consultation. We take time to understand your business, challenges, and goals before suggesting solutions. Through careful listening and strategic insights, we create tailored roadmaps that align technology with growth. With the right consultation, we turn ideas into impactful, scalable solutions.',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'Seamless Technology',
    desc: 'We believe technology should feel seamless, not complex. We design solutions that integrate smoothly into your business, connecting people, processes, and data without friction. From CRM systems to AI-driven tools, we ensure every solution is intuitive, scalable, and reliable. With seamless technology, we help you focus on growth while innovation works in the background.',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'World Class Experience',
    desc: 'We deliver a world-class experience by blending innovation, reliability, and user-centric design. Every solution is crafted to meet global standards while addressing unique business needs. From intuitive interfaces to seamless integrations, we ensure technology feels effortless. With a focus on excellence, we transform digital journeys into impactful, world-class experiences.',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'Unbelievable Support',
    desc: 'We believe great technology is incomplete without unbelievable support. From the first consultation to post-deployment assistance, we stay by your side at every step. Our team ensures quick responses, proactive solutions, and round-the-clock guidance. With a commitment to reliability and care, we deliver support that feels less like a service and more like a partnership.',
    icon: '/assets/icons/octicon-codescan.png'
  },
];




export default function Home() {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    requestAnimationFrame(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      const safeBtn = document.querySelector("#mainButton") as HTMLElement;
      safeBtn?.focus();
    });
  };
  return (
    <main className={`pt-12 transition-colors duration-300 ${
      theme === "light" ? "bg-[#fff] text-[#3A3A3A]" : "bg-[#111] text-white"
    }`}>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-y-4">
            <div className="w-full lg:w-[50%] flex justify-center flex-col">
              <div className="md:ps-1 ps-0">
                <div className="mb-1 md:mb-0">
                  <span className="text-[25px] md:text-[45px] border-b-4 border-[#61FB83]">LET US</span>
                </div>
                <div className="overflow-hidden text-[35px] leading-[40px] py-1 md:py-3 mb-2 md:mb-0">
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
              <button onClick={handleClickOpen} id="mainButton"
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
        <SliderPopup open={open} handleClose={handleClose} />
      </section>

      <section className={`py-6 lg:py-12 ${ theme === "light" ? "bg-[#FAFAFA]" : "bg-[#111]" }`}>
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


      <section className="py-6 lg:py-12 relative">
      {theme === "light" && <AnimatedBackground />}
        <EnterpriseCards />
      </section>

      <section className="py-6 lg:py-12">
        <div className="mb-12">
          <HeadingText textalign="text-center" heading="TECHNOLOGIES USED" />
        </div>
        <TechnologiesUsed />
      </section>

      <section className="py-6 lg:py-12 relative">
      {theme === "light" && <AnimatedBackground side="left" />}
        <SolutionCards />
      </section>

      <section className="py-6 lg:py-12">
        <UpdateCards />
      </section>

    </main>
  );
}
