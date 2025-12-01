'use client';

// import Link from "next/link";
import Image from "next/image";
import { ExpandArrowButton } from "@/components/ui/ExpandArrowButton";
import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";

interface expertiseDataProps {
  title: string;
  img: string;
  desc: string;
  href: string;
}

function SolutionCard({ title, img, desc, href }: expertiseDataProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="max-w-full lg:w-[250px] xl:w-[300px] mx-auto py-6"
    >
      <div className="relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="w-full h-auto"
            src={img}
            alt={title}
            width={250}
            height={250}
          />
        </motion.div>
        <div
          className="absolute bottom-0 left-0 right-0 p-6"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          }}
        >
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-5">
        <p
          className="text-base leading-relaxed"
          style={{
            color: 'var(--color-foreground)',
          }}
        >
          {desc}
        </p>
      </div>

      <div className="mt-3">
        <ExpandArrowButton
          href={href}
          text="Read More"
          ariaLabel="Read more about this solution"
        />
      </div>
    </motion.div>
  );
}

export default SolutionCard;
