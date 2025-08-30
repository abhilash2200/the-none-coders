"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeadingText from "../HeadingText";
import EnterpriseCard from "../EnterpriseCard";
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    href: "/solution",
  },
  {
    title: "E-Learning Applications",
    img: "/assets/img/solution-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    href: "#",
  },
  {
    title: "CRM Development",
    img: "/assets/img/solution-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    href: "#",
  },
  {
    title: "Networking Applications",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    href: "#",
  },
];

export function EnterpriseCards() {
  const [items, setItems] = useState(expertiseData);
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) {
        setDevice("mobile");
      } else if (window.innerWidth < 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Step measurement based on device
  const measureStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const container = el.parentElement;
    if (!container) return;

    if (device === "mobile") {
      // Full width card
      const style = window.getComputedStyle(container);
      const padding =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      setStep(container.offsetWidth - padding);
    } else if (device === "tablet") {
      // Tablet → 2 cards
      const c0 = el.children[0] as HTMLElement | undefined;
      if (c0) setStep(c0.offsetWidth + 24);
    } else {
      // Desktop → spacing between first 2 cards
      const c0 = el.children[0] as HTMLElement | undefined;
      const c1 = el.children[1] as HTMLElement | undefined;
      if (c0 && c1) {
        setStep(c1.offsetLeft - c0.offsetLeft);
      } else if (c0) {
        setStep(c0.offsetWidth + 24);
      }
    }
  }, [device]);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  const next = async () => {
    if (isAnimating || step === 0) return;
    setIsAnimating(true);
    await controls.start({
      x: -step,
      transition: { type: "spring", stiffness: 120, damping: 20 },
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
      transition: { type: "spring", stiffness: 120, damping: 20 },
    });

    setItems((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
    await controls.set({ x: 0 });
    setIsAnimating(false);
  };

  // Card width classes
  const getCardWidth = () => {
    if (device === "mobile") return "min-w-full";
    if (device === "tablet") return "min-w-[45%]";
    return "min-w-[300px] md:min-w-[320px] lg:min-w-[350px] [@media(min-width:1024px)]:min-w-[300px] [@media(min-width:1200px)]:min-w-[300px] [@media(min-width:1300px)]:min-w-[350px]";
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
              className="flex lg:gap-6 md:gap-2"
              animate={controls}
              style={{ willChange: "transform" }}
            >
              {items.map((ele, i) => (
                <motion.div
                  key={ele.title + "-" + i}
                  layout
                  animate={{ marginTop: device === "mobile" ? 0 : i * 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  className={getCardWidth()}
                >
                  <EnterpriseCard
                    title={ele.title}
                    img={ele.img}
                    desc={ele.desc}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex md:justify-center justify-start mt-3 md:absolute md:-bottom-8 md:left-4 md:mt-0">
            <div className="flex flex-row gap-4">
              <CircleButton
                onClick={prev}
                className={`hover:bg-black/10 text-black transition ${
                  isAnimating || step === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={isAnimating || step === 0}
              />
              <CircleButton
                onClick={next}
                className={`hover:bg-black/10 text-black transition ${
                  isAnimating || step === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={isAnimating || step === 0}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
