"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/solution#crm-development",
  },
  {
    title: "APP DEVELOPMENT",
    img: "/assets/img/solution-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/solution#mobile-app-development",
  },
  {
    title: "College Management Software",
    img: "/assets/img/solution-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/products/app-development#ott-platforms",
  },
  {
    title: "WEB DEVELOPMENT",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/solution#",
  },
  {
    title: "ERP DEVELOPMENT",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/solution#",
  },
  {
    title: "UI & UX DESIGNING",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/solution#",
  },
];

export function SolutionCards() {
  const splideRef = useRef<SplideInstance | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative container mx-auto px-4 bg-transparent"
    >

      <div className="mb-6 lg:mb-10 relative z-10">
        <HeadingText textalign="text-center" heading="SOLUTIONS" />
      </div>

      <div className="relative z-10">
        <Splide
          ref={splideRef}
          options={{
            type: "slide",
            perPage: 4,
            arrows: false,
            pagination: false,
            gap: "1rem",
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

        {/* Mobile pagination dots */}
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
  );
}
