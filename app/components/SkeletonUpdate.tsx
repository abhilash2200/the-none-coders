"use client";

import React from "react";
import { Skeleton } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

function SkeletonUpdates() {
    const { theme } = useTheme();

    // skeleton ka base color define karlo
    const skeletonBg = theme === "light" ? "#e0e0e0" : "#4b5563";
    const skeletonHighlight = theme === "light" ? "#f5f5f5" : "#6b7280";

    return (
        <section className="py-6 lg:py-12">
            <div className="container mx-auto px-2">
                <div className="flex flex-wrap gap-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                        >
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height={250}
                                sx={{
                                    borderRadius: "8px",
                                    backgroundColor: skeletonBg,
                                    "&::after": {
                                        background: `linear-gradient(90deg, transparent, ${skeletonHighlight}, transparent)`,
                                    },
                                }}
                            />

                            <div className="py-2 flex justify-between items-center">
                                <Skeleton
                                    variant="rounded"
                                    sx={{
                                        width: "100px",
                                        height: "12px",
                                        backgroundColor: skeletonBg,
                                    }}
                                />
                                <Skeleton
                                    variant="rounded"
                                    sx={{
                                        width: "100px",
                                        height: "12px",
                                        backgroundColor: skeletonBg,
                                    }}
                                />
                            </div>

                            <Skeleton
                                variant="text"
                                width="80%"
                                height={28}
                                className="mt-3"
                                sx={{ backgroundColor: skeletonBg }}
                            />
                            <Skeleton
                                variant="text"
                                width="95%"
                                height={20}
                                sx={{ backgroundColor: skeletonBg }}
                            />
                            <Skeleton
                                variant="text"
                                width="90%"
                                height={20}
                                sx={{ backgroundColor: skeletonBg }}
                            />
                            <Skeleton
                                variant="text"
                                width="85%"
                                height={20}
                                sx={{ backgroundColor: skeletonBg }}
                            />

                            <div className="mt-5">
                                <Skeleton
                                    variant="circular"
                                    width={50}
                                    height={50}
                                    sx={{ backgroundColor: skeletonBg }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkeletonUpdates;
