"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import HeadingText from "../components/HeadingText";
import SectionProgress from "../components/SectionProgress";
import Link from "next/link";
import { motion } from "framer-motion"
import CircleButton from "../components/CircleButton";
import { useTheme } from "../context/ThemeContext";

interface SectionData {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

function Page() {
  const {theme} = useTheme()
  const sections: SectionData[] = [
    {
      id: "e-learning-apps",
      title: "E-LEARNING APPS",
      description:
        "E-learning apps unlock doors to knowledge anywhere and anytime. They convert phones into classrooms and learning into fun, easy, and personalised experiences. With videos, notes, and tests, learning becomes interesting, developing students' confidence, happiness, and brighter futures.",
      image: "/assets/img/Bair-M.jpg",
      link: "/crm",
    },
    {
      id: "student-management-system",
      title: "STUDENT MANAGEMENT SYSTEM",
      description:
        "A student management system is a guiding light for schools and colleges. It monitors attendance, exams, fees, and performance. Teachers teach better, students learn better, and parents stay updated. It establishes harmony, saves time, and fosters trust.",
      image: "/assets/img/Bair-M.jpg",
      link: "/mobile-apps",
      reverse: true,
    },
    {
      id: "ott-platforms",
      title: "OTT PLATFORMS",
      description:
        "OTT platforms place entertainment in your own hands. Films, television shows, and live events await streaming at any time. They unite families, bring laughter to empty hours, and cause stories to travel through hearts without limits. Entertainment becomes freedom, happiness, and togetherness.",
      image: "/assets/img/ai-ml.gif",
      link: "/ai-ml",
    },
    {
      id: "crm-billing-system",
      title: "CRM & BILLING SYSTEM",
      description:
        "A CRM and billing system is a nurturing partner to businesses. It remembers each customer, makes billing easy, and does not make mistakes. Work is easier, relationships become deeper, and trust becomes stronger. Customers feel appreciated, businesses feel enabled, and growth comes naturally without tension.",
      image: "/assets/img/Bair-M.jpg",
      link: "/websites",
      reverse: true,
    },
    {
      id: "project-management-tool",
      title: "PROJECT MANAGEMENT TOOL",
      description:
        "A project management tool is the pulse of collaboration. It structures tasks, makes deadlines, and monitors progress. Teams are cohesive, confusion vanishes, and objectives become attainable. Projects seem smoother, tensions subside, and success tastes like a collective journey amid pride.",
      image: "/assets/img/Bair-M.jpg",
      link: "/ui-ux",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={`transition-colors duration-300 ${
      theme === "light" ? "bg-[#FFF] text-[#3A3A3A]" : "bg-[#111] text-white"
    }`}>
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
              className={`flex flex-wrap justify-between gap-y-4 ${section.reverse ? "flex-row-reverse" : ""
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
                    <p className={`md:text-[19px] ${theme === "light" ? "text-[#414141] " : "text-white"} text-[18px]`}>{section.description}</p>
                  </div>
                  <div className="mt-3 flex justify-start items-center">
                    <Link href={section.link}>
                      <CircleButton
                        ariaLabel="Visit Now"
                        text="Visit Now"
                      />
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
