"use client";

import React from "react";

interface AnimatedBackgroundProps {
  side?: "left" | "right";
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ side = "right" }) => {
  const isLeft = side === "left";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Purple */}
      <div
        className={`absolute top-20 ${isLeft ? "left-1/3" : "right-1/3"} 
        w-[200px] h-[200px] rounded-full bg-purple-400 opacity-40 blur-[120px] animate-float-slow`}
      ></div>

      {/* Blue */}
      <div
        className={`absolute top-1/3 ${isLeft ? "left-0" : "right-0"} 
        w-[300px] h-[300px] rounded-full bg-blue-400 opacity-40 blur-[120px] animate-float`}
      ></div>

      {/* Pink */}
      <div
        className={`absolute bottom-1/3 ${isLeft ? "left-1/4" : "right-1/4"} 
        w-[250px] h-[250px] rounded-full bg-pink-400 opacity-40 blur-[120px] animate-float-reverse`}
      ></div>

      {/* Orange */}
      <div
        className={`absolute top-20 ${isLeft ? "left-1/5" : "right-1/5"} 
        w-[100px] h-[100px] rounded-full bg-orange-300 opacity-40 blur-[120px] animate-float-fast`}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
