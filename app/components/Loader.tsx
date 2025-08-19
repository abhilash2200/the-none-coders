"use client";

import React, { useEffect, useState, useRef } from "react";

interface LoaderWrapperProps {
  children: React.ReactNode;
  fadeDuration?: number;
  showDuration?: number;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
  children,
  fadeDuration = 1000,
  showDuration = 3500,
}) => {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const fadeTimer = setTimeout(() => setHideLoader(true), fadeDuration);
      return () => clearTimeout(fadeTimer);
    }, showDuration);

    return () => clearTimeout(timer);
  }, [fadeDuration, showDuration]);
  
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  // Glitch text animation
  useEffect(() => {
    if (!containerRef.current) return;
    const animationContainer = containerRef.current;
    const textData = "The Non Coders.";

    animationContainer.innerHTML = "";

    const words = textData.split(" ");
    words.forEach((word, wi) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "animated-word mx-1";
      wordSpan.setAttribute("data-text", word);

      word.split("").forEach((letter) => {
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
  }, []);

  return (
    <>
      {!hideLoader && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity"
          style={{
            transitionDuration: `${fadeDuration}ms`,
            opacity: loading ? 1 : 0,
          }}
        >
          <div
            ref={containerRef}
            className="animated-title text-4xl md:text-5xl font-mono text-white text-center select-none"
          />
        </div>
      )}
      <div
        className="transition-opacity"
        style={{
          transitionDuration: `${fadeDuration}ms`,
          opacity: !loading ? 1 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;
