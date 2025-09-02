"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeadingText from "../HeadingText";
import EnterpriseCard from "../EnterpriseCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "/solution",
  },
  {
    title: "E-Learning Applications",
    img: "/assets/img/solution-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "#",
  },
  {
    title: "CRM Development",
    img: "/assets/img/solution-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    href: "#",
  },
  {
    title: "Networking Applications",
    img: "/assets/img/solution-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
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
            <CircleButton
              onClick={handlePrev}
              ariaLabel="Previous"
              text="Previous"
              className="hover:bg-black/10 text-black transition"
            />
            <CircleButton
              onClick={handleNext}
              ariaLabel="Next"
              text="Next"
              className="hover:bg-black/10 text-black transition"
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
