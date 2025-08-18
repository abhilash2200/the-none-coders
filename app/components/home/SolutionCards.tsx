"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
      title: 'CRM DEVELOPMENT',
      img: '/assets/img/solution.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      href: '#'
    },
    {
      title: 'APP DEVELOPMENT',
      img: '/assets/img/solution-2.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      href: '#'
    },
    {
      title: 'OTT PLATFORM DEVELOPMENT',
      img: '/assets/img/solution-3.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      href: '#'
    },
    {
      title: 'ERP DEVELOPMENT',
      img: '/assets/img/solution-4.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      href: '#'
    },
  ];

export function SolutionCards() {
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
          <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "1rem",
            autoplay: true,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {solution.map((ele, i) => (
            <SplideSlide key={i}>
              <SolutionCard
                index={i}
                title={ele.title}
                img={ele.img}
                desc={ele.desc}
                href={ele.href}
              />
            </SplideSlide>
          ))}
        </Splide>
      </motion.div>
    </AuroraBackground>
  );
}
