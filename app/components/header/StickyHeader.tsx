"use client";

import SliderPopup from "@/components/SliderPopup";
import { CircleX } from "lucide-react";
import React, { useState } from "react";

interface StickyHeaderProps {
    onOpenForm: () => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ onOpenForm }) => {
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    if (!visible) return null;

    return (
        <div className="sticky top-0 z-50 bg-[#111] text-white p-3">
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="flex items-center flex-col md:flex-row gap-y-4 gap-x-1">
                        <p className="font-medium text-sm sm:text-base">Let’s grow together!</p>
                        <button
                            onClick={() => { onOpenForm(); setIsOpen(true); }}
                            className="font-semibold text-sm hover:underline hover:cursor-pointer transition"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => setVisible(false)}
                        className="text-white hover:text-gray-200 text-lg font-bold absolute right-0 top-0 w-6 h-6 cursor-pointer ml-auto "
                    >
                        <CircleX />
                    </button>
                </div>
            </div>
            <SliderPopup open={isOpen} handleClose={handleClose} />
        </div>
    );
};

export default StickyHeader;
