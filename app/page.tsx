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
                src="/assets/img/hero-img-modified.png"
                alt="hero img"
                height={700}
                width={440}
                priority
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
