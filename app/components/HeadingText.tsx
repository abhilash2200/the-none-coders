import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface HeadingProps {
  heading: string;
  textalign: string;
}

function HeadingText({ heading, textalign }: HeadingProps) {
  return (
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`text-2xl lg:text-4xl font-normal leading-tight ${textalign}`}
      style={{
        color: 'var(--color-foregroundSecondary)',
      }}
    >
      {heading}
    </motion.h2>
  );
}

export default HeadingText;
