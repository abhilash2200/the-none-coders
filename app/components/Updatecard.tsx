'use client';

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

function Updatecard({ title, img, desc, href }: expertiseDataProps) {
    return (
        <motion.div
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            className="flex flex-wrap gap-y-4"
        >
            <div className="px-1.5 w-full">
                <div className="relative overflow-hidden rounded-lg">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            className="w-full md:h-[320px] h-auto object-cover"
                            src={img}
                            alt={title}
                            width={405}
                            height={250}
                        />
                    </motion.div>
                </div>
                <h3
                    className="my-3 text-xl font-semibold leading-tight"
                    style={{
                        color: 'var(--color-foregroundSecondary)',
                    }}
                >
                    {title}
                </h3>
                <p
                    className="text-base leading-relaxed"
                    style={{
                        color: 'var(--color-foreground)',
                    }}
                >
                    {desc}
                </p>

                <div className="mt-3">
                    <ExpandArrowButton
                        href={href}
                        text="Read More"
                        ariaLabel={`Read more about ${title}`}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Updatecard;
