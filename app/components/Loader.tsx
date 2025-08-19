"use client";
import React, { useEffect, useState, useRef } from "react";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading || !containerRef.current) return;

    const animationContainer = containerRef.current;
    const textData = "The Non Coders.";

    animationContainer.innerHTML = "";

    const words = textData.split(" ");
    words.forEach((word, wi) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "animated-word mx-1";
      wordSpan.setAttribute("data-text", word);

      word.split("").forEach((letter, li) => {
        const letterSpan = document.createElement("span");
        letterSpan.className = "animated-letter";
        letterSpan.setAttribute("aria-hidden", "true");
        letterSpan.innerHTML = letter === " " ? "&nbsp;" : letter;

        const delay = Math.random() * 2 + wi * 0.3;
        letterSpan.style.animationDelay = `${delay}s`;

        wordSpan.appendChild(letterSpan);
      });

      animationContainer.appendChild(wordSpan);
    });
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div
          ref={containerRef}
          className="animated-title text-4xl md:text-5xl font-mono text-white text-center select-none"
        ></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoaderWrapper;
