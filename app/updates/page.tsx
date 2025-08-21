"use client";

import Image from "next/image";
import HeadingText from "../components/HeadingText";
import { Tooltip, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";

function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="py-6 lg:py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-6 lg:mb-10">
                        {loading ? (
                            <Skeleton
                                variant="text"
                                width={200}
                                height={40}
                                className="mx-auto"
                            />
                        ) : (
                            <HeadingText textalign="text-center" heading="UPDATES" />
                        )}
                    </div>

                    <div className="flex flex-wrap gap-y-4">
                        {loading
                            ? [...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                                >
                                    <Skeleton variant="rectangular" width="100%" height={250} className="rounded-md" />
                                    <Skeleton variant="text" width="80%" height={28} className="mt-3" />
                                    <Skeleton variant="text" width="95%" height={20} />
                                    <Skeleton variant="text" width="90%" height={20} />
                                    <Skeleton variant="text" width="85%" height={20} />
                                    <div className="mt-5">
                                        <Skeleton variant="circular" width={50} height={50} className="mr-auto" />
                                    </div>
                                </div>
                            ))
                            : [...Array(3)].map((_, i) => (
                                <div key={i}
                                    className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                                >
                                    <div>
                                        <Image className="w-full" src="/assets/img/bg-gray.jpg" alt="" width={405} height={250} />
                                    </div>
                                    <div>
                                        <h3 className="my-3 text-[22px] leading-tight">
                                            THIS IS A DEMO BLOG TOPIC WHICH
                                            <br />
                                            I’M ABOUT TO WRITE
                                        </h3>
                                        <p className="text-[#414141]">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the standard
                                            dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and Lorem Ipsum has been the
                                            standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and
                                        </p>
                                        <div className="mt-5">
                                            <Tooltip title="Visit Now" placement="top">
                                                <a
                                                    href="#"
                                                    className="block w-13 h-13 shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-2 overflow-hidden border-2 rounded-full group"
                                                >
                                                    <svg
                                                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
                                                        viewBox="0 0 16 19"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                                            className="fill-gray-800 group-hover:fill-gray-800"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;
