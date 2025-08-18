"use client";
import React, { useEffect, useState, useRef } from "react";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec loader
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading || !containerRef.current) return;

    const animationContainer = containerRef.current;
    const textData = "In space no one can hear you scream.";

    animationContainer.innerHTML = ""; // clear previous

    const words = textData.split(" ");
    words.forEach((word, i) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "animated-word inline-block mx-1";
      wordSpan.setAttribute("data-text", word);

      // split letters
      word.split("").forEach((letter) => {
        const letterSpan = document.createElement("span");
        letterSpan.className = "animated-letter";
        letterSpan.setAttribute("aria-hidden", "true");
        letterSpan.innerHTML = letter === " " ? "&nbsp;" : letter;
        wordSpan.appendChild(letterSpan);
      });

      animationContainer.appendChild(wordSpan);

      setTimeout(() => {
        wordSpan.classList.add("animate");
      }, i * 200);
    });
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div
          ref={containerRef}
          className="text-4xl font-mono text-white select-none"
        ></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoaderWrapper;