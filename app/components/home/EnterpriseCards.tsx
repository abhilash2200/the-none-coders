"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";
import HeadingText from "../HeadingText";
import EnterpriseCard from "../EnterpriseCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import { ExpandArrowButton } from "@/components/ui/ExpandArrowButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ExpertiseData {
  title: string;
  img: string;
  desc: string;
  href: string;
}

const expertiseData: ExpertiseData[] = [
  {
    title: "Customised Software",
    img: "/assets/img/solution-7.jpg",
    desc: "Customised software is a trusted tool made only for your work. It suits your business to perfection, keeping work easy, quick, and hassle-free. Developed solely for you, it expands with your aspirations.",
    href: "/solution",
  },
  {
    title: "E-Learning Applications",
    img: "/assets/img/solution-8.jpg",
    desc: "E-learning apps allow carrying classrooms in your pocket. Learn anywhere, anytime. Easy lessons, videos, and quizzes make learning enjoyable, effortless, and accessible to all. Learning becomes more intimate and within reach.",
    href: "#",
  },
  {
    title: "OTT Platform Development",
    img: "/assets/img/solution-9.jpg",
    desc: "OTT platforms are about entertainment at home. Films, music, and television shows, anytime, anywhere. No queues, no restrictions. Just pure happiness, laughter, and stories that join hearts together across friends and family.",
    href: "#",
  },
  {
    title: "ML Networking Applications",
    img: "/assets/img/solution-10.webp",
    desc: "ML-driven networking apps learn from each and every connection. They make communication smarter, faster, and more meaningful. With the ability to see patterns, they connect people and businesses easily and intelligently.",
    href: "#",
  },
];

export function EnterpriseCards() {
  const splideRef = useRef<SplideInstance | null>(null);

  const handlePrev = () => {
    splideRef.current?.go("<");
  };

  const handleNext = () => {
    splideRef.current?.go(">");
  };

  return (

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
        <HeadingText textalign="text-center" heading="EXPERTISE" />
      </div>

      <div className="relative">
        <Splide
          ref={splideRef}
          options={{
            type: "slide",
            perPage: 4,
            perMove: 1,
            arrows: false,
            pagination: false,
            gap: "1.5rem",
            breakpoints: {
              1280: { perPage: 3 },
              1024: { perPage: 2, gap: "1rem" },
              640: { perPage: 1, gap: "0.5rem" },
            },
          }}
          aria-label="Enterprise Expertise Slider"
        >
          {expertiseData.map((ele, i) => (
            <SplideSlide key={ele.title + "-" + i}>
              <EnterpriseCard
                title={ele.title}
                img={ele.img}
                desc={ele.desc}
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Custom Buttons */}
        <div className="flex gap-4 mt-6 md:absolute md:-bottom-10 md:left-0">
          <ExpandArrowButton
            onClick={handlePrev}
            ariaLabel="Previous"
            text="Previous"
            icon={<ArrowLeft className="w-4 h-4" />}
          />
          <ExpandArrowButton
            onClick={handleNext}
            ariaLabel="Next"
            text="Next"
            icon={<ArrowRight className="w-4 h-4" />}
          />
        </div>
      </div>
    </motion.div>

  );
}
