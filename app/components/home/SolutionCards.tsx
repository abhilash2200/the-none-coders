"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide"; // ✅ type import
import "@splidejs/react-splide/css";
import HeadingText from "../HeadingText";
import SolutionCard from "../SolutionCard";

interface Solution {
  title: string;
  img: string;
  desc: string;
  href: string;
}

const solution: Solution[] = [
  {
    title: "CRM DEVELOPMENT",
    img: "/assets/img/solution.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    href: "#",
  },
  {
    title: "APP DEVELOPMENT",
    img: "/assets/img/solution-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    href: "#",
  },
  {
    title: "OTT PLATFORM DEVELOPMENT",
    img: "/assets/img/solution-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    href: "#",
  },
  {
    title: "ERP DEVELOPMENT",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    href: "#",
  },
];

export function SolutionCards() {
  const splideRef = useRef<SplideInstance | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <AuroraBackground position="left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative container mx-auto px-4 py-10"
      >
        <div className="mb-6 lg:mb-10">
          <HeadingText textalign="text-center" heading="SOLUTIONS" />
        </div>

        <div className="relative">
          <Splide
            ref={splideRef}
            options={{
              type: "slide",
              perPage: 4,
              arrows: false,
              pagination: false,
              gap: "1.5rem",
              breakpoints: {
                1280: { perPage: 3 },
                1024: { perPage: 2, gap: "1rem" },
                640: { perPage: 1, gap: "0.5rem" },
              },
            }}
            onMoved={(_splide: SplideInstance, index: number) => {
              setCurrentSlide(index);
            }}
          >
            {solution.map((ele, i) => (
              <SplideSlide key={i}>
                <SolutionCard
                  title={ele.title}
                  img={ele.img}
                  desc={ele.desc}
                  href={ele.href}
                />
              </SplideSlide>
            ))}
          </Splide>
          <div className="flex justify-center mt-4 gap-2 lg:hidden">
            {solution.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${i === currentSlide ? "bg-gray-600" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
