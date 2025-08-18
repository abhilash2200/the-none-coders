'use client'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {
  SiAdobe,
  SiAmazon,
  SiAndroid,
  SiAngular,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiGoogleplay,
  SiTypescript
} from "react-icons/si";

const slider1 = [
  { icon: <SiAdobe />, color: "#FF0000" },
  { icon: <SiAmazon />, color: "#FF9900" },
  { icon: <SiAndroid />, color: "#3DDC84" },
  { icon: <SiAngular />, color: "#DD0031" },
  { icon: <SiAmazon />, color: "#FF9900" },
  { icon: <SiBootstrap />, color: "#7952B3" },
  { icon: <SiCplusplus />, color: "#00599C" },
  { icon: <SiCss3 />, color: "#1572B6" }
]

const slider2 = [
  { icon: <SiFigma />, color: "#F24E1E" },
  { icon: <SiFirebase />, color: "#FFCA28" },
  { icon: <SiFlutter />, color: "#02569B" },
  { icon: <SiGit />, color: "#F05032" },
  { icon: <SiHtml5 />, color: "#E34F26" },
  { icon: <SiJavascript />, color: "#F7DF1E" },
  { icon: <SiPhp />, color: "#777BB4" },
  { icon: <SiGoogleplay />, color: "#34A853" },
  { icon: <SiTypescript />, color: "#007ACC" }
]

function TechnologiesUsed() {
  return (
    <div className="space-y-6">
      {/* First Slider */}
      <Splide
        aria-label="Technologies 1"
        options={{
          type: 'loop',
          arrows: false,
          pagination: false,
          perPage: 10,
          rewind: true,
          gap: '1rem',
          breakpoints: {
            1000: { perPage: 5 },
            640: { perPage: 6 },
          }
        }}
        extensions={{ AutoScroll }}
      >
        {
          slider1.map((ele, i) => (
            <SplideSlide key={i}>
              <div
                className="flex items-center justify-center text-7xl text-[#7E7E7E] hover:text-[var(--icon-color)] transition-colors duration-300"
                style={{ "--icon-color": ele.color } as React.CSSProperties}
              >
                {ele.icon}
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
      <Splide
        aria-label="Technologies 2"
        options={{
          type: 'loop',
          arrows: false,
          pagination: false,
          perPage: 10,
          rewind: true,
          gap: '1rem',
          autoScroll: { speed: -1 },
          breakpoints: {
            1000: { perPage: 5 },
            640: { perPage: 6 },
          }
        }}
        extensions={{ AutoScroll }}
      >
        {
          slider2.map((ele, i) => (
            <SplideSlide key={i}>
              <div
                className="flex items-center justify-center text-7xl text-[#7E7E7E] hover:text-[var(--icon-color)] transition-colors duration-300"
                style={{ "--icon-color": ele.color } as React.CSSProperties}
              >
                {ele.icon}
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
  )
}

export default TechnologiesUsed
