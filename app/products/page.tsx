"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import HeadingText from "../components/HeadingText";
import SectionProgress from "../components/SectionProgress";
import ArrowButton from "@/components/ArrowButton";
import Link from "next/link";
import { motion } from "framer-motion"

interface SectionData {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

function Page() {
  const sections: SectionData[] = [
    {
      id: "e-learning-apps",
      title: "E-LEARNING APPS",
      description:
        "A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the brands we found a huge gap between the administration level",
      image: "/assets/img/Bair-M.jpg",
      link: "/crm",
    },
    {
      id: "student-management-system",
      title: "STUDENT MANAGEMENT SYSTEM",
      description:
        "A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the brands we found a huge gap between the administration level.",
      image: "/assets/img/Bair-M.jpg",
      link: "/mobile-apps",
      reverse: true,
    },
    {
      id: "ott-platforms",
      title: "OTT PLATFORMS",
      description:
        "A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the brands we found a huge gap between the administration level.",
      image: "/assets/img/ai-ml.gif",
      link: "/ai-ml",
    },
    {
      id: "crm-billing-system",
      title: "CRM & BILLING SYSTEM",
      description:
        "A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the brands we found a huge gap between the administration level.",
      image: "/assets/img/Bair-M.jpg",
      link: "/websites",
      reverse: true,
    },
    {
      id: "project-management-tool",
      title: "PROJECT MANAGEMENT TOOL",
      description:
        "A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the brands we found a huge gap between the administration level.",
      image: "/assets/img/Bair-M.jpg",
      link: "/ui-ux",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SectionProgress sections={sections} headerOffset={72} />

      {sections.map((section) => (
        <section id={section.id} key={section.id} className="py-6 lg:py-12">
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto px-4">
            <div
              className={`flex flex-wrap justify-between gap-y-4 ${
                section.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[50%] flex justify-center items-center">
                <Image
                  className="mx-auto"
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={440}
                />
              </div>
              <div className="w-full md:w-[50%] flex items-center justify-center">
                <div className="flex flex-col justify-center">
                  <HeadingText textalign="text-start" heading={section.title} />
                  <div className="mt-3">
                    <p className="md:text-[20px] text-[18px]">{section.description}</p>
                  </div>
                  <div className="mt-3 flex justify-start items-center">
                    <Link href={section.link}>
                      <ArrowButton />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </main>
  );
}

export default Page;
