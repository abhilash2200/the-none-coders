import React from 'react'
import { useTheme } from "../context/ThemeContext";

interface HeadingProps {
  heading: string;
  textalign: string;
}

function HeadingText({ heading, textalign }: HeadingProps) {
  const { theme } = useTheme();

  return (
    <h2
      className={`text-[25px] lg:text-[37px] font-[400] leading-tight ${textalign} ${
        theme === "light" ? "text-[#414141]" : "text-white"
      }`}
    >
      {heading}
    </h2>
  );
}

export default HeadingText;

