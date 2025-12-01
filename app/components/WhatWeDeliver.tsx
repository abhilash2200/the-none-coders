import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '@/lib/animations';

interface cardData {
  title: string;
  desc: string;
  icon: string;
}

function WhatWeDeliver({ title, desc, icon }: cardData) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="max-w-full w-[350px] mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={icon} alt={title} width={70} height={70} />
      </motion.div>
      <h3
        className="text-2xl mb-2 mt-4 md:mt-6 font-semibold"
        style={{ color: 'var(--color-foregroundSecondary)' }}
      >
        {title}
      </h3>
      <p
        className="text-base leading-relaxed"
        style={{ color: 'var(--color-foreground)' }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

export default WhatWeDeliver;
