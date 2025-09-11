"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
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
    desc: "CRM is a memory for your business. It remembers each detail of every customer. Treat people with care, establish trust, and cultivate relationships that will last an eternity. It gives customers a sense of being valued.",
    href: "/solution#crm-development",
  },
  {
    title: "APP DEVELOPMENT",
    img: "/assets/img/solution-2.jpg",
    desc: "Apps are small assistants within your phone. They order food, purchase tickets, and bring you in touch with services in seconds. App development makes concepts real, at your fingertips.",
    href: "/solution#mobile-app-development",
  },
  {
    title: "College Management Software",
    img: "/assets/img/solution-3.jpg",
    desc: "College management software is a supporting hand for schools. It handles students, teachers, exams, and records in one place. Less paperwork, more learning, and a happier campus life.",
    href: "/products/app-development#ott-platforms",
  },
  {
    title: "WEB DEVELOPMENT",
    img: "/assets/img/solution-4.jpg",
    desc: "Web development builds gates to the virtual world. A stunning site narrates stories, bridges gaps, and develops enterprises. It's the face of aspirations, accessible to all, at any time, anywhere.",
    href: "/solution#",
  },
  {
    title: "ERP DEVELOPMENT",
    img: "/assets/img/solution-5.jpg",
    desc: "ERP ties all aspects of a business together—sales, accounts, inventory—into one system. It minimises errors, saves time, and makes work easier, making growth feel effortless, stress-free, and unstoppable.",
    href: "/solution#",
  },
  {
    title: "UI & UX DESIGNING",
    img: "/assets/img/solution-6.jpg",
    desc: "UI/UX designing builds digital experiences that come alive. Lovely designs, easy navigation, and friendly layouts make apps and sites a pleasure, a purpose, and an experience to remember, transforming visitors into delighted, repeat users.",
    href: "/solution#",
  },
];

export function SolutionCards() {
  const splideRef = useRef<SplideInstance | null>(null);

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
            pagination: true,
            gap: "1rem",
            breakpoints: {
              1280: { perPage: 3 },
              1024: { perPage: 2, gap: "1rem" },
              640: { perPage: 1, gap: "0.5rem" },
            },
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
      </div>
    </motion.div>
  );
}
