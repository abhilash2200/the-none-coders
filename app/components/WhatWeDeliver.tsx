import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

interface cardData{
    title:string, 
    desc:string, 
    icon:string
}

function WhatWeDeliver({title, desc, icon}: cardData) {
  const {theme, toggleTheme}= useTheme()
  return (
    <div className='max-w-full w-[350px] mx-auto'>
      <Image src={icon} alt='octicon-codescan' width={70} height={70}/>
      <h3 className={`text-[24px] text-[#414141] mb-2 mt-4 md:mt-6 ${ theme === "light" ? "text-[#414141]" : "text-white" }`}>{title}</h3>
      <p className={`text-[15px] text-[#414141] ${ theme === "light" ? "text-[#414141]" : "text-white" }`}>{desc}</p>
    </div>
  )
}

export default WhatWeDeliver
