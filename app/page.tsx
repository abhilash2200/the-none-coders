'use client';
import Image from "next/image";
import HeadingText from "./components/HeadingText";
import WhatWeDeliver from "./components/WhatWeDeliver";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import TechnologiesUsed from "./components/TechnologiesUsed";
import { EnterpriseCards } from "./components/home/EnterpriseCards";
import { SolutionCards } from "./components/home/SolutionCards";
import { UpdateCards } from "./components/home/UpdateCards";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SliderPopup from "@/components/SliderPopup";
import { useTheme } from "@/theme";
import AnimatedBackground from "@/components/AnimatedBackground";
import { MotionSection } from "@/components/ui/motion-section";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";


interface WhatWeDeliverData {
  title: string;
  desc: string;
  icon: string;
}

const whatwedeliverData: WhatWeDeliverData[] = [
  {
    title: 'A Great Consultation',
    desc: 'Every meaningful digital journey starts with understanding. We take our time to understand your business machinery, where challenges show up, and what future you want to build. By listening carefully and asking the right questions, we create clear paths where technology supports ambition and ideas turn into lasting results.',
    icon: '/assets/img/Information.gif'
  },
  {
    title: 'Seamless Technology',
    desc: 'The best technology works quietly in the background. Our solutions fit naturally into daily operations, making processes smoother and decisions smarter. Systems connect smoothly, information flows easily, and everything stays in balance, allowing everything to feel simple instead of stressful.',
    icon: '/assets/img/cloud-robotics-abstract.gif'
  },
  {
    title: 'World Class Experience',
    desc: 'The genuine quality is realised with the very first use. We design the digital experience to be intuitive, secure, and elegant. We address every detail with care, such that the experience with technology would be familiar, trustworthy, or memorable with the very first touch.',
    icon: '/assets/img/user-reviews.gif'
  },
  {
    title: 'Unbelievable Support',
    desc: 'Great support is always there in one’s life. It stays along even after the delivery and is always there to help. The answers to all the questions are given on priority, all complications are resolved prudently, and suggestions are always there. It thus establishes trust based on consistency, concern, and commitment.',
    icon: '/assets/img/contact-us.gif'
  },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
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
    <main
      className="pt-12 min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }}
    >
      {/* Hero Section */}
      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full lg:w-[50%] flex justify-center flex-col"
            >
              <div className="md:ps-1 ps-0">
                <div className="mb-1 md:mb-0">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold inline-block"
                    style={{
                      borderBottom: '4px solid var(--color-brand)',
                      color: 'var(--color-foreground)',
                    }}
                  >
                    LET US
                  </motion.span>
                </div>
                <div className="overflow-hidden text-4xl md:text-5xl leading-tight py-1 md:py-3 mb-2 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative flex items-start gap-x-1 h-auto overflow-hidden"
                  >
                    <p
                      className="inline m-0 text-xl md:text-3xl"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      Help you build something
                    </p>
                    <ContainerTextFlip
                      words={["Great.", "World Class.", "Excellent.", "Amazing."]}
                      className="text-xl md:text-3xl"
                    />
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4"
              >
                <Button
                  onClick={handleClickOpen}
                  id="mainButton"
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                  rightIcon={
                    <motion.svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <circle fill="currentColor" r="11" cy="12" cx="12" />
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="white"
                        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                      />
                    </motion.svg>
                  }
                >
                  <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Get Started
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Right Now
                    </span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="w-full lg:w-[50%]"
            >
              <Image
                className="mx-auto"
                src="/assets/img/developer.gif"
                width={440}
                height={700}
                alt="hero img"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        </div>
        <SliderPopup open={open} handleClose={handleClose} />
      </section>

      {/* What We Deliver Section */}
      <MotionSection
        variant="stagger"
        className="py-6 lg:py-12"
        style={{
          backgroundColor: 'var(--color-backgroundSecondary)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="WHAT WE DELIVER" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-wrap gap-y-8"
          >
            {whatwedeliverData.map((ele, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="w-full md:w-[50%] xl:w-[25%] px-1.5"
              >
                <WhatWeDeliver
                  title={ele.title}
                  desc={ele.desc}
                  icon={ele.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Enterprise Cards Section */}
      <section className="py-6 lg:py-12 relative">
        {resolvedTheme === "light" && <AnimatedBackground />}
        <EnterpriseCards />
      </section>

      {/* Technologies Used Section */}
      <section className="py-6 lg:py-12">
        <div className="mb-12">
          <HeadingText textalign="text-center" heading="TECHNOLOGIES USED" />
        </div>
        <TechnologiesUsed />
      </section>

      {/* Solution Cards Section */}
      <section className="py-6 lg:py-12 relative">
        {resolvedTheme === "light" && <AnimatedBackground side="left" />}
        <SolutionCards />
      </section>

      {/* Update Cards Section */}
      <section className="py-6 lg:py-12">
        <UpdateCards />
      </section>
    </main>
  );
}
