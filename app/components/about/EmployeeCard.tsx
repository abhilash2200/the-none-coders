"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const imageVariants = {
    rest: { scale: 1, y: 0, opacity: 1 },
    hover: {
        scale: 1.5,
        y: 0,
        opacity: 0.85,
        transition: {
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

const overlayVariants = {
    rest: { opacity: 0, backdropFilter: "blur(0px)", scale: 1 },
    hover: {
        opacity: 1,
        backdropFilter: "blur(20px)", // hover blur
        scale: 1.05, // thoda zoom for quick punch
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

const contentVariants = {
    rest: { opacity: 0, y: 30 },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 120,
            damping: 18,
            delayChildren: 0.3,
            staggerChildren: 0.12,
        },
    },
};

const lineVariants = {
    rest: { opacity: 0, y: 20 },
    hover: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

function EmployeeItem({
    emp,
}: {
    emp: { img: string; name: string; designation: string; details: string };
}) {
    return (
        <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="relative w-full md:w-[45%] h-[500px] overflow-hidden rounded-xl cursor-pointer shadow-2xl bg-neutral-900 group"
        >
            {/* Image */}
            <motion.div
                variants={imageVariants}
                className="absolute inset-0 z-10 will-change-transform"
            >
                <Image
                    src={emp.img}
                    alt={emp.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-t from-white/50 to-transparent opacity-60" />
            </motion.div>

            {/* Overlay */}
            <motion.div
                variants={overlayVariants}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-gray-900/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-pink-600/20 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/20 via-transparent to-blue-500/20 mix-blend-overlay" />
            </motion.div>


            {/* Content */}
            <motion.div
                variants={contentVariants}
                className="absolute inset-0 z-30 flex flex-col justify-center items-start p-6 text-white"
            >
                <motion.h4 variants={lineVariants} className="text-2xl font-bold">
                    {emp.name}
                </motion.h4>
                <motion.p
                    variants={lineVariants}
                    className="text-sm text-neutral-300 mb-2"
                >
                    {emp.designation}
                </motion.p>
                <motion.p
                    variants={lineVariants}
                    className="text-sm max-w-md leading-relaxed text-neutral-200"
                >
                    {emp.details}
                </motion.p>

                <motion.div variants={lineVariants} className="flex gap-4 mt-4">
                    {[
                        { icon: Linkedin, label: "LinkedIn" },
                        { icon: Twitter, label: "Twitter" },
                        { icon: Github, label: "GitHub" },
                    ].map((s, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            aria-label={s.label}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="transition text-white/90 hover:text-white"
                        >
                            <s.icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Bottom label */}
            <motion.div
                variants={{
                    rest: { opacity: 1, y: 0 },
                    hover: { opacity: 0, y: 15, transition: { duration: 0.4 } },
                }}
                className="absolute bottom-3 left-3 z-20 text-white/90"
            >
                <div className="rounded-md bg-black/50 px-2 py-1 backdrop-blur-sm">
                    <div className="text-[19px] md:text-[18px] font-semibold">
                        {emp.name}
                    </div>
                    <div className="text-[15px] md:text-[13px] text-neutral-200">
                        {emp.designation}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function EmployeeCard() {
    const employees = [
        {
            img: "/assets/img/office-man.jpg",
            name: "John Doe",
            designation: "Web Developer",
            details: "Expert in React & Node.js",
        },
        {
            img: "/assets/img/office-man-2.jpg",
            name: "Jane Smith",
            designation: "UI/UX Designer",
            details: "Specialized in Figma & Tailwind",
        },
        {
            img: "/assets/img/office-man.jpg",
            name: "Michael Lee",
            designation: "Project Manager",
            details: "5+ years managing IT projects",
        },
        {
            img: "/assets/img/office-man-2.jpg",
            name: "Emily Davis",
            designation: "QA Engineer",
            details: "Automation & Manual Testing",
        },
    ];

    return (
        <div className="flex flex-wrap justify-between gap-y-6">
            {employees.map((emp, i) => (
                <EmployeeItem key={i} emp={emp} />
            ))}
        </div>
    );
}

export default EmployeeCard;
