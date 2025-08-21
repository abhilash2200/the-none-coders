"use client"
import { useEffect } from "react";
import Image from "next/image";
import HeadingText from "../components/HeadingText";
import PerspectiveAccordion from "../components/PerspectiveAccordion";
import SectionProgress from "../components/SectionProgress";

export default function Page() {
    const sections = [
        { id: "about-us", title: "ABOUT US" },
        { id: "our-perspective", title: "OUR PERSPECTIVE" },
        { id: "our-members", title: "OUR MEMBERS" },
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <main>
            <SectionProgress sections={sections} headerOffset={72} />
            <section id="about-us" className="py-6 lg:py-12">
                <div className="container mx-auto px-4">
                    <HeadingText textalign="text-start" heading="ABOUT US" />
                    <div className="flex flex-wrap gap-y-4">
                        <div className="w-full lg:w-[50%] flex flex-col justify-center">
                            <p className="text-[20px]">
                                A vision to incorporate THE NON CODERS started with a journey of 7 Years in the Digital Marketing Industry by
                                the parent company DIGITAL WOLF. While achieving the milestones of advertising and generating leads for the
                                brands we found a huge gap between the administration level and the operation level of members related to the
                                data, operations, growth, understanding the gaps in operations, protection of their valuable data, increasing
                                the efficiency of the organisation with more use of automation and reducing the human interventions.
                            </p>
                        </div>
                        <div className="w-full lg:w-[50%] flex justify-center items-center">
                            <Image src="/assets/img/Bair-M.jpg" alt="" width={600} height={440} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-perspective" className="pb-6 lg:pb-12 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <HeadingText textalign="text-start" heading="OUR PERSPECTIVE" />
                    <PerspectiveAccordion />
                </div>
            </section>
            <section id="our-members" className="pb-12 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className='mb-5'>
                        <HeadingText textalign='text-start' heading="OUR MEMBERS" />
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
        </main>
    );
}
