"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

interface CircleButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  text?: string; // text on hover
}

const CircleButton: React.FC<CircleButtonProps> = ({
  onClick,
  className = "",
  disabled = false,
  ariaLabel = "Next",
  text = "Read More",
}) => {

  const { theme } = useTheme()
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`group relative flex items-center justify-start w-11 h-12 border-2 rounded-full 
                  cursor-pointer overflow-hidden transition-all duration-500 shadow-lg
                  hover:w-36 hover:rounded-[30px] active:translate-x-1 active:translate-y-1 ${className} ${theme === "light" ? "border-gray-600" : "border-gray-20"}`}
    >
      {/* Arrow container */}
      <div className="flex items-center justify-center w-full transition-all duration-400 group-hover:justify-start group-hover:px-3">
        <svg
          className="w-5 h-5 stroke-gray ml-2 group-hover:ml-0"
          viewBox="0 0 24 24"
          fill="gray"
          stroke="gray"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
      </div>


      {/* Text on hover */}
      <div className={`absolute right-5 transform translate-x-full opacity-0 whitespace-nowrap text-[16px] font-medium transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${theme === "light" ? "text-gray-800" : "text-gray-20"}`}>
        {text}
      </div>
    </button>
  );
};

export default CircleButton;
