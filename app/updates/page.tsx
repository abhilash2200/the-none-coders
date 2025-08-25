"use client";

import Image from "next/image";
import Link from "next/link";
import HeadingText from "../components/HeadingText";
import React, { useEffect, useState } from "react";
import { updatesList, type UpdateListItem } from "../data/updatesList";
import ArrowButton from "@/components/ArrowButton";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import SkeletonUpdates from "../components/SkeletonUpdate";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Page() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 50;

    const totalPages = Math.ceil(updatesList.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = updatesList.slice(indexOfFirstBlog, indexOfLastBlog);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <>
            <section className="py-6 lg:py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-6 lg:mb-10">
                        <HeadingText textalign="text-center" heading="UPDATES" />
                    </div>

                    {loading ? (
                        <SkeletonUpdates />
                    ) : (
                        <>
                            <div className="flex flex-wrap gap-y-6 gap-x-2">
                                {currentBlogs.map((update: UpdateListItem) => (
                                    <div
                                        key={update.slug}
                                        className="w-full md:w-[49%] lg:w-[32.33%] md:p-4 p-2 rounded-md border-1 border-[#cacaca]"
                                    >
                                        <Image
                                            src={update.image}
                                            alt={update.title}
                                            width={450}
                                            height={250}
                                            className="rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-101 group-hover:shadow-md"
                                        />

                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-gray-500 text-sm inline-flex justify-center items-center gap-x-1">
                                                <TerminalIcon />
                                                <span className="text-gray-800 font-medium">
                                                    {update.info}
                                                </span>
                                            </p>
                                            <p className="text-gray-500 text-sm inline-flex justify-center items-center gap-x-1">
                                                <CalendarMonthOutlinedIcon />
                                                <span className="text-gray-800 font-medium">
                                                    {update.date}
                                                </span>
                                            </p>
                                        </div>
                                        <Link href={`/updates/${update.slug}`}>
                                            <h2 className="text-xl font-semibold mt-3 hover:text-[#2D176A]">
                                                {update.title}
                                            </h2>
                                        </Link>
                                        <p className="text-gray-600 text-sm">{update.description}</p>
                                        <div className="mt-5 flex flex-start">
                                            <Link href={`/updates/${update.slug}`}>
                                                <ArrowButton />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-8">
                                <Stack spacing={2}>
                                    <Pagination
                                        count={totalPages}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        variant="outlined"
                                        shape="rounded"
                                        color="standard"
                                    />
                                </Stack>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default Page;
