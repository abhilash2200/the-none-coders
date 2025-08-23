"use client";

import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CircleButtonProps {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({ onClick, className = "", disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 hover:bg-gray-200 transition-colors ${className}`}
        >
            <ArrowForwardIcon className="w-6 h-6 text-gray-700" />
        </button>
    );
};

export default CircleButton;
