"use client";
import { useEffect } from "react";
import CareerView from "../components/career/CareerView";
import ResponsiveCareerView from "../components/career/ResponsiveCareerView";
import Image from "next/image";
import HeadingText from "../components/HeadingText";

function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6 lg:py-12">
      <div className="container mx-auto px-4">
        <HeadingText textalign="text-start" heading="CAREER" />
        <p className="md:text-[20px] text-[18px] mt-3 md:mt-0">
          A vision to incorporate THE NONE CODERS started with a journey of 7
          Years in the Digital Marketing Industry by the parent company DIGITAL
          WOLF.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-white/90 relative">
        <CareerView />
        <div className="absolute right-0 bottom-0 -z-[1]">
          <Image
            src="/assets/icons/octicon-codescan.png"
            alt="Career Banner"
            width={400}
            height={300}
            className="w-auto"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden bg-white/90 relative">
        <ResponsiveCareerView />
        <div className="absolute right-0 bottom-0 -z-[1]">
          <Image
            src="/assets/icons/octicon-codescan.png"
            alt="Career Banner"
            width={300}
            height={200}
            className="w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Page;
