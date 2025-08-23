"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const imageVariants = {
    rest: {
        y: 0,
        scaleY: 1,
        scaleX: 1,
        opacity: 1,
        transformOrigin: "bottom center",
        transition: {
            duration: 0.4,
            ease: "easeOut" as const,
        },
    },
    hover: {
        y: ["0%", "-20%", "-115%"],
        scaleY: [1, 1.15, 1.2],
        scaleX: [1, 1.02, 1.05],
        opacity: [1, 0.9, 0],
        transition: {
            y: { times: [0, 0.4, 1], duration: 0.9, ease: "easeInOut" as const },
            scaleY: { times: [0, 0.4, 1], duration: 0.9, ease: "easeInOut" as const },
            scaleX: { times: [0, 0.4, 1], duration: 0.9, ease: "easeInOut" as const },
            opacity: { times: [0, 0.5, 1], duration: 0.9, ease: "easeOut" as const },
        },
    },
};


const overlayVariants = {
    rest: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: { duration: 0.4, delay: 0.3 },
    },
};


const contentVariants = {
    rest: { opacity: 0, x: 48 },
    hover: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 340,
            damping: 26,
            delay: 0.6,
            when: "beforeChildren" as const,
            staggerChildren: 0.08,
        },
    },
};


const lineVariants = {
    rest: { y: 10, opacity: 0 },
    hover: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 360, damping: 24 },
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
            className="relative w-full md:w-[45%] h-[500px] overflow-hidden rounded-xl cursor-pointer shadow-xl bg-neutral-900"
        >
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
                    priority={false}
                />
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-t from-white/50 to-transparent opacity-60" />
            </motion.div>
            <motion.div
                variants={overlayVariants}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-gray-800/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-pink-600/30 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/20 via-transparent to-blue-500/20 mix-blend-overlay" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
            </motion.div>
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
                    <a href="#" aria-label="LinkedIn" className="transition hover:opacity-80">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className="transition hover:opacity-80">
                        <Twitter size={20} />
                    </a>
                    <a href="#" aria-label="GitHub" className="transition hover:opacity-80">
                        <Github size={20} />
                    </a>
                </motion.div>
            </motion.div>
            <motion.div
                variants={{
                    rest: { opacity: 1, y: 0 },
                    hover: { opacity: 0, y: 10, transition: { duration: 0.3 } },
                }}
                className="absolute bottom-3 left-3 z-20 text-white/90"
            >
                <div className="rounded-md bg-black/30 px-2 py-1 backdrop-blur-[2px]">
                    <div className="text-sm font-semibold">{emp.name}</div>
                    <div className="text-[11px] text-neutral-200">{emp.designation}</div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function EmployeeCard() {
    const employees = [
        { img: "/assets/img/office-man.jpg", name: "John Doe", designation: "Web Developer", details: "Expert in React & Node.js" },
        { img: "/assets/img/office-man-2.jpg", name: "Jane Smith", designation: "UI/UX Designer", details: "Specialized in Figma & Tailwind" },
        { img: "/assets/img/office-man.jpg", name: "Michael Lee", designation: "Project Manager", details: "5+ years managing IT projects" },
        { img: "/assets/img/office-man-2.jpg", name: "Emily Davis", designation: "QA Engineer", details: "Automation & Manual Testing" },
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
