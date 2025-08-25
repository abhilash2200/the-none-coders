"use client";

import React from "react";

interface CircleButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  onClick,
  className = "",
  disabled = false,
  ariaLabel = "Next",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center w-11 h-12 rounded-full border border-black bg-transparent text-black p-0
                  disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-colors duration-300 
                  hover:bg-black hover:text-black cursor-pointer ${className}`}
    >
      <svg
        className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1 shadow-2xl"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 12h12" />
        <path d="M13 7l5 5-5 5" />
      </svg>
    </button>
  );
};

export default CircleButton;
