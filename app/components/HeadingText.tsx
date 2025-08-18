import React from 'react'

interface heading{
    heading : string
    textalign: string
}

function HeadingText({heading, textalign} : heading) {
  return (
    <h2 className={`text-[#000000] text-[25px] lg:text-[37px] font-[400] leading-tight ${textalign}`}>
      {heading}
    </h2>
  )
}

export default HeadingText
