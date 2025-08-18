"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  position?: "left" | "right" | "center";
}

export const AuroraBackground = ({
  className,
  children,
  position = "right",
  ...props
}: AuroraBackgroundProps) => {
  const mainAuroraPosition =
    position === "left"
      ? "left-[-10vw]"
      : position === "center"
        ? "left-1/2 -translate-x-1/2"
        : "right-[-10vw]";

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center overflow-hidden",
          "bg-[#fff] text-slate-900",
          className
        )}
        {...props}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-[45%] -translate-y-1/2 w-[55vw] max-w-[780px] aspect-[1.5/1] opacity-55 [filter:blur(70px)] animate-hueShift",
            mainAuroraPosition
          )}
          style={{
            background:
              "radial-gradient(60% 65% at 45% 55%, rgba(120,99,245,0.55) 0%, rgba(150,127,246,0.40) 45%, rgba(203,213,255,0.22) 72%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[35%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[780px] aspect-[1.5/1] opacity-55 [filter:blur(70px)] animate-hueShift"
          style={{
            background:
              "radial-gradient(60% 65% at 60% 50%, rgba(120,99,245,0.55) 0%, rgba(150,127,246,0.40) 45%, rgba(203,213,255,0.22) 72%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-12vw] bottom-[-10%] w-[40vw] max-w-[600px] aspect-[1.2/1] opacity-45 [filter:blur(70px)] animate-lavenderPulse"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(244,237,255,0.55) 0%, rgba(244,237,255,0.00) 70%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};
