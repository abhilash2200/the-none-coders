import React from 'react'
import HeadingText from '../components/HeadingText'
import Image from 'next/image'
import PerspectiveAccordion from '../components/PerspectiveAccordion'

function page() {
  return (
    <main>
      <section className='py-6 lg:py-12'>
        <div className="container mx-auto px-4">
            <div>
                <HeadingText textalign='text-start' heading="ABOUT US"/>
            </div>
            <div className='flex flex-wrap gap-y-4'>
                <div className="w-full lg:w-[50%] flex flex-col justify-center">
                    <div>
                        <p className='text-[20px]'>
                            A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by
                            the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the
                            brands we found a huge gap between the administration level and the operation level of members related to the
                            data, operations, growth, understanding the gaps in operations, protection of their valuable data, increasing 
                            the efficiency of the organisation with more use of automation and reducing the human interventions.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <div>
                        <Image src='/assets/img/Bair-M.jpg' alt='' width={600} height={440} />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='pb-6 lg:pb-12'>
        <div className="container mx-auto px-4">
            <div>
                <HeadingText textalign='text-start' heading="OUR PERSPECTIVE"/>
            </div>
            <div>
                <PerspectiveAccordion/>
            </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
            <div className='mb-5'>
                <HeadingText textalign='text-start' heading="OUR MEMBERS"/>
            </div>
            <div className='flex flex-wrap justify-between gap-y-4'>
                <div className="w-full md:w-[45%]">
                    <div>
                        <Image src='/assets/img/office-man.jpg' alt='' width={600} height={440} />
                        <div className='mt-3'>
                            <h4 className='text-[20px]'>EMPLOYEE NAME</h4>
                            <p className='text-[#A5A5A5D6]'>DESIGNATION</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[45%]">
                    <div>
                        <Image src='/assets/img/office-man-2.jpg' alt='' width={600} height={440} />
                        <div className='mt-3'>
                            <h4 className='text-[20px]'>EMPLOYEE NAME</h4>
                            <p className='text-[#A5A5A5D6]'>DESIGNATION</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[45%]">
                    <div>
                        <Image src='/assets/img/office-man.jpg' alt='' width={600} height={440} />
                        <div className='mt-3'>
                            <h4 className='text-[20px]'>EMPLOYEE NAME</h4>
                            <p className='text-[#A5A5A5D6]'>DESIGNATION</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[45%]">
                    <div>
                        <Image src='/assets/img/office-man-2.jpg' alt='' width={600} height={440} />
                        <div className='mt-3'>
                            <h4 className='text-[20px]'>EMPLOYEE NAME</h4>
                            <p className='text-[#A5A5A5D6]'>DESIGNATION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        
      </section>
    </main>
  )
}

export default page
