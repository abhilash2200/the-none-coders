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
      id: "crm-development",
      title: "CRM DEVELOPMENT",
      description:
        "Empower your business with a custom-built CRM that simplifies lead management, automates workflows, and keeps every customer interaction in one place. Our CRM solutions are designed to fit any industry—whether it’s sales, marketing, finance, or support—giving your team the tools to work smarter, not harder. From tracking leads to building lasting customer relationships, we create CRMs that boost productivity, enhance decision-making, and help your business grow with confidence.",
      image: "/assets/img/Bair-M.jpg",
      link: "/crm",
    },
    {
      id: "mobile-app-development",
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We design and develop custom mobile applications that are user-friendly, scalable, and built to match your business goals. Our solutions cover a wide range of needs—from e-learning platforms to logic-driven apps—helping you deliver seamless digital experiences. With a focus on performance, design, and functionality, we ensure your app not only looks great but also works flawlessly. Whether for Android, iOS, or cross-platform, we bring your ideas to life with technology that drives results.",
      image: "/assets/img/Bair-M.jpg",
      link: "/mobile-apps",
      reverse: true,
    },
    {
      id: "ai-ml",
      title: "AI & ML PRODUCTS",
      description:
        "Leverage the power of AI and machine learning to make your business smarter and more efficient. Our solutions integrate seamlessly with your CRM, automating tasks like lead scoring, customer insights, and data summarisation—reducing manual hours and boosting productivity. From intelligent reporting to workflow automation, we design AI-driven products that adapt to your processes. With advanced models, you gain faster decision-making, higher accuracy, and the tools to scale your business with confidence.",
      image: "/assets/img/ai-ml.gif",
      link: "/ai-ml",
    },
    {
      id: "website-development",
      title: "WEBSITE DEVELOPMENT",
      description:
        "Our website design and development services focus on creating visually engaging, responsive, and user-friendly websites that deliver results. From corporate sites to e-commerce platforms, we blend creativity with technology to ensure seamless navigation, fast performance, and modern designs. Whether building from scratch or redesigning, we craft websites that enhance brand presence and drive customer engagement.",
      image: "/assets/img/Bair-M.jpg",
      link: "/websites",
      reverse: true,
    },
    {
      id: "ui-ux-designing",
      title: "UI & UX DESIGNING",
      description:
        "Great design goes beyond looks—it’s about creating seamless experiences that users love. Our UI & UX design services focus on blending creativity with usability to deliver intuitive, engaging, and visually striking digital products. From wireframes and prototypes to final designs, we ensure every interaction is simple, consistent, and impactful. Whether for websites, mobile apps, or enterprise platforms, we design interfaces that not only look beautiful but also enhance user satisfaction and business growth.",
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
                    <p className="text-[20px]">{section.description}</p>
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
