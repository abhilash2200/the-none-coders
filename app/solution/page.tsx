import Image from 'next/image'
import React from 'react'
import HeadingText from '../components/HeadingText'

function page() {
  return (
    <main>
      <section className='pt-6 lg:pt-12'>
        <div className="container mx-auto px-4">
            <div className='mb-5'>
            </div>
            <div className='flex flex-wrap justify-between gap-y-4'>
                <div className="w-full md:w-[50%]">
                    <div>
                        <Image className='me-auto' src='/assets/img/Bair-M.jpg' alt='' width={600} height={440} />
                    </div>
                </div>
                <div className="w-full md:w-[50%]">
                    <div>
                        <HeadingText textalign='text-start' heading="CRM DEVELOPMENT"/>
                        <div className='mt-3'>
                            <p className='text-[20px]'>A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by
                            the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the
                            brands we found a huge gap between the administration level</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='pt-6 lg:pt-12'>
        <div className="container mx-auto px-4">
            <div className='mb-5'>
            </div>
            <div className='flex flex-wrap justify-between gap-y-4'>
                <div className="w-full md:w-[50%]">
                    <div>
                        <HeadingText textalign='text-start' heading="CRM DEVELOPMENT"/>
                        <div className='mt-3'>
                            <p className='text-[20px]'>A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by
                            the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the
                            brands we found a huge gap between the administration level</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[50%]">
                    <div>
                        <Image className='ms-auto' src='/assets/img/Bair-M.jpg' alt='' width={600} height={440} />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default page
