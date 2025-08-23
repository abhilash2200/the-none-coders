"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeadingText from "../HeadingText";
import SolutionCard from "../SolutionCard";
import CircleButton from "../CircleButton";

interface ExpertiseData {
  title: string;
  img: string;
  desc: string;
  href: string;
}

const expertiseData: ExpertiseData[] = [
  {
    title: "Customised Softwares",
    img: "/assets/img/solution.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: "/solution",
  },
  {
    title: "E-Learning Applications",
    img: "/assets/img/solution-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: "#",
  },
  {
    title: "CRM Development",
    img: "/assets/img/solution-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: "#",
  },
  {
    title: "Networking Applications",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href: "#",
  },
];

export function EnterpriseCards() {
  const [items, setItems] = useState(expertiseData);
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const measureStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    
    if (isMobile) {
      // On mobile, step is the full width of the container including padding
      const container = el.parentElement;
      if (container) {
        const style = window.getComputedStyle(container);
        const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        setStep(container.offsetWidth - padding);
      }
    } else {
      // On desktop, calculate step as before
      const c0 = el.children[0] as HTMLElement | undefined;
      const c1 = el.children[1] as HTMLElement | undefined;

      if (c0 && c1) {
        setStep(c1.offsetLeft - c0.offsetLeft);
      } else if (c0) {
        setStep(c0.offsetWidth + 24);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep, isMobile]);

  const next = async () => {
    if (isAnimating || step === 0) return;
    setIsAnimating(true);
    await controls.start({
      x: -step,
      transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
    });
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    await controls.set({ x: 0 });
    setIsAnimating(false);
  };

  const prev = async () => {
    if (isAnimating || step === 0) return;
    setIsAnimating(true);
    await controls.start({
      x: step,
      transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
    });
    setItems((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
    await controls.set({ x: 0 });
    setIsAnimating(false);
  };

  return (
    <AuroraBackground position="right">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative container mx-auto px-4 py-10"
        onLoadCapture={measureStep}
      >
        <div className="mb-6 lg:mb-10">
          <HeadingText textalign="text-center" heading="EXPERTISE" />
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex gap-6"
              animate={controls}
              style={{ willChange: "transform" }}
            >
              {items.map((ele, i) => (
                <motion.div
                  key={ele.title + "-" + i}
                  layout
                  // Remove margin on mobile, keep on desktop
                  animate={{ marginTop: isMobile ? 0 : i * 50 }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  // Full width on mobile, fixed width on desktop
                  className={isMobile 
                    ? "min-w-full" 
                    : "min-w-[280px] md:min-w-[350px] lg:min-w-[350px]"
                  }
                >
                  <SolutionCard
                    title={ele.title}
                    img={ele.img}
                    desc={ele.desc}
                    href={ele.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 md:absolute md:bottom-4 md:left-4 md:mt-0">
            <div className="flex flex-row gap-4">
              <CircleButton
                onClick={prev}
                className={`bg-black/10 hover:bg-black/70 text-white transition ${isAnimating || step === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isAnimating || step === 0}
              />
              <CircleButton
                onClick={next}
                className={`bg-black/10 hover:bg-black/70 text-white transition ${isAnimating || step === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isAnimating || step === 0}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}