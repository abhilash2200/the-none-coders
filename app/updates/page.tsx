"use client";

import Image from "next/image";
import Link from "next/link";
import HeadingText from "../components/HeadingText";
import React, { useEffect, useState } from "react";
import { updatesList, type UpdateListItem } from "../data/updatesList";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import SkeletonUpdates from "../components/SkeletonUpdate";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ExpandArrowButton } from "@/components/ui/ExpandArrowButton";
import { useTheme } from "../context/ThemeContext";

function Page() {
    const { theme } = useTheme()
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(50);
    useEffect(() => {
        const updateBlogsPerPage = () => {
            if (window.innerWidth < 768) {
                setBlogsPerPage(20);
            } else {
                setBlogsPerPage(50);
            }
        };
        updateBlogsPerPage();
        window.addEventListener("resize", updateBlogsPerPage);

        return () => window.removeEventListener("resize", updateBlogsPerPage);
    }, []);

    const totalPages = Math.ceil(updatesList.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = updatesList.slice(indexOfFirstBlog, indexOfLastBlog);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <main className={`transition-colors duration-300 ${
            theme === "light" ? "bg-[#fff] text-[#3A3A3A]" : "bg-[#111] text-white"
          }`}>
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
                                            className="rounded-md md:h-[300px] h-auto mb-2 transition-transform duration-300 ease-in-out group-hover:scale-101 group-hover:shadow-md"
                                        />
                                        <div className="flex justify-between items-center mb-4">
                                            <p className={`${theme === "light" ? "text-gray-500" : "text-gray-100"} text-sm inline-flex justify-center items-center gap-x-1`}>
                                                <TerminalIcon />
                                                <span className={`${theme === "light" ? "text-gray-800" : "text-gray-100"} font-medium`}>
                                                    {update.info}
                                                </span>
                                            </p>
                                            <p className={`${theme === "light" ? "text-gray-500" : "text-gray-100"} text-sm inline-flex justify-center items-center gap-x-1`}>
                                                <CalendarMonthOutlinedIcon />
                                                <span className={`${theme === "light" ? "text-gray-800" : "text-gray-100"} font-medium`}>
                                                    {update.date}
                                                </span>
                                            </p>
                                        </div>
                                        <Link href={`/updates/${update.slug}`}>
                                            <h2 className={`text-xl font-semibold mt-3 ${theme === "light" ? "hover:text-[#2D176A]" : "hover:text-gray-200"}`}>
                                                {update.title}
                                            </h2>
                                        </Link>
                                        <p className={`${theme === "light" ? "text-gray-600" : "text-gray-200"} text-sm`}>{update.description}</p>
                                        <div className="mt-5 flex flex-start">
                                            <ExpandArrowButton
                                              href={`/updates/${update.slug}`}
                                              text="Read More"
                                              ariaLabel={`Read more about ${update.title}`}
                                            />
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
        </main>
    );
}

export default Page;
