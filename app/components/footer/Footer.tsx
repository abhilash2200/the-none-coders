import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#FAFAFA] pt-12'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap gap-y-4'>
                <div className='w-full md:-[50%] lg:w-[33.33%]'>
                    <div>
                        <h3 className='text-[24px] font-bold mb-3'>SOLUTIONS</h3>
                        <ul>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>CRM Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>Mobile App Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>OTT Platform Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>Artificial Intelligence</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full md:-[50%] lg:w-[33.33%]'>
                    <div>
                        <h3 className='text-[24px] font-bold mb-3'>SOLUTIONS</h3>
                        <ul>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>CRM Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>Mobile App Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>OTT Platform Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>Artificial Intelligence</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full md:-[50%] lg:w-[33.33%]'>
                    <div>
                        <h3 className='text-[24px] font-bold mb-3'>COMPANY</h3>
                        <ul>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>CRM Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>Mobile App Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>OTT Platform Development</Link>
                            </li>
                            <li className='py-2'>
                                <Link className='text-[18px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href=''>Artificial Intelligence</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full border-t border-[#414141] py-8'>
                    <div className='flex flex-wrap gap-y-5'>
                        <div className='w-full lg:w-[33.33%]'>
                            <ul className='md:flex items-center gap-x-3'>
                                <li>
                                    <Link className='text-[15px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href='#'>PRIVACY POLICY</Link>
                                </li>
                                <li>
                                    <Link className='text-[15px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300' href='#'>TERMS & CONDITIONS</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full lg:w-[33.33%]'>
                            <ul className='flex items-center gap-x-5'>
                                <li>
                                    <Link href='#'>
                                        <Image src="/assets/icons/google.svg" alt="" width={25} height={25} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <Image src="/assets/icons/youtube.svg" alt="" width={25} height={25} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <Image src="/assets/icons/facebook.svg" alt="" width={25} height={25} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full lg:w-[33.33%]'>
                            <p className='text-[18px] text-center lg:text-left'>COPYRIGHT © THE NON-CODERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
