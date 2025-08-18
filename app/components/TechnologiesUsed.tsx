'use client'
import React from 'react'
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';

const slider1 = [
    {
      img: '/assets/img/technology/bxl_adobe.png',
    },
    {
      img: '/assets/img/technology/bxl_amazon.png',
    },
    {
      img: '/assets/img/technology/bxl_android.png',
    },
    {
      img: '/assets/img/technology/bxl_angular.png',
    },
    {
      img: '/assets/img/technology/bxl_aws.png',
    },
    {
      img: '/assets/img/technology/bxl_bootstrap.png',
    },
    {
      img: '/assets/img/technology/bxl_c-plus-plus.png',
    },
    {
      img: '/assets/img/technology/bxl_css3.png',
    }
  ]
const slider2 = [
    {
      img: '/assets/img/technology/bxl_figma.png',
    },
    {
      img: '/assets/img/technology/bxl_firebase.png',
    },
    {
      img: '/assets/img/technology/bxl_flutter.png',
    },
    {
      img: '/assets/img/technology/bxl_git.png',
    },
    {
      img: '/assets/img/technology/bxl_html5.png',
    },
    {
      img: '/assets/img/technology/bxl_javascript.png',
    },
    {
      img: '/assets/img/technology/bxl_php.png',
    },
    {
      img: '/assets/img/technology/bxl_play-store.png',
    },
    {
      img: '/assets/img/technology/bxl_visual-studio.png',
    }
  ]

function TechnologiesUsed() {
  return (
    <div>
        <Splide 
            aria-label="My Favorite Images"
            options={{
                type:'loop',
                arrows:false,
                pagination:false,
                perPage:10,
                rewind: true,
                gap: '1rem',
                breakpoints: {
                1000:{
                    perPage:5
                },
                640: {
                    perPage: 6,
                },
                }
            }}
            extensions={{ AutoScroll }}
            >
            {
                slider1.map((ele,i)=>{
                return(
                    <SplideSlide key={i}>
                        <div>
                        <Image src={ele.img} alt='' width={120} height={120} />
                        </div>
                    </SplideSlide>
                )
                })
            }
            </Splide>
            <Splide 
                    aria-label="My Favorite Images"
                    options={{
                    type:'loop',
                    pagination:false,
                    arrows:false,
                    perPage:10,
                    rewind: true,
                    gap: '1rem',
                    autoScroll: {
                        speed: -1, // negative = scroll from bottom to top
                    },
                    breakpoints: {
                        1000:{
                          perPage:5
                        },
                        640: {
                          perPage: 6,
                        },
                    }
                    }}
                    extensions={{ AutoScroll }}
                >
                {
                    slider2.map((ele,i)=>{
                        return(
                        <SplideSlide key={i}>
                            <div>
                                <Image src={ele.img} alt='' width={120} height={120} />
                            </div>
                        </SplideSlide>
                        )
                    })
                    }
            </Splide>
    </div>
  )
}

export default TechnologiesUsed
