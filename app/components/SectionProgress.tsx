"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

type SectionItem = { id: string; title: string };

interface SectionProgressProps {
    sections: SectionItem[];
    headerOffset?: number;
}

const SectionProgress: React.FC<SectionProgressProps> = ({
    sections,
    headerOffset = 0,
}) => {
    const { theme } = useTheme()
    const [active, setActive] = useState(0);
    const ticking = useRef(false);
    const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const els = useMemo(
        () => sections.map((s) => () => document.getElementById(s.id)),
        [sections]
    );

    const compute = () => {
        let maxVisible = 0;
        let currentActive = active;
        els.forEach((getEl, i) => {
            const el = getEl();
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const visible =
                Math.min(rect.bottom, viewportHeight) -
                Math.max(rect.top, headerOffset);
            const visibleHeight = Math.max(0, visible);
            if (visibleHeight > maxVisible) {
                maxVisible = visibleHeight;
                currentActive = i;
            }
        });

        setActive(currentActive);
    };


    const onScroll = () => {
        if (ticking.current) return;
        ticking.current = true;
        requestAnimationFrame(() => {
            compute();
            ticking.current = false;
        });
    };

    useEffect(() => {
        compute();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sections, headerOffset]);

    const handleJump = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    // progress position and width based on active button
    const activeBtn = btnRefs.current[active];
    const progressStyle = activeBtn
        ? {
            left: activeBtn.offsetLeft,
            width: activeBtn.offsetWidth,
        }
        : { left: 0, width: 0 };

    return (
        <div className={`sticky top-0 z-30 ${theme === "light" ? "bg-[#FAFAFA]" : "bg-[#333]"} hidden md:block`}>
            <div className="relative w-full mx-auto flex justify-start">
                <motion.div
                    className={`absolute top-0 bottom-0  ${theme === "light" ? "bg-[#EFEFEF]" : "bg-[#818181]"} z-0`}
                    initial={false}
                    animate={progressStyle}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                />
                {sections.map((s, i) => (
                    <button
                        key={s.id}
                        ref={(el) => {
                            btnRefs.current[i] = el;
                        }}
                        onClick={() => handleJump(s.id)}
                        className={`relative z-10 px-6 py-4 text-[12px] md:text-[15px] uppercase tracking-wide text-left transition-colors
                      ${theme === "light"
                                ? i === active
                                    ? "text-gray-900"
                                    : "text-gray-600"
                                : i === active
                                    ? "text-white"
                                    : "text-gray-400"
                            }
                    `}
                    >
                        {s.title}
                    </button>

                ))}
            </div>
        </div>
    );
};

export default SectionProgress;