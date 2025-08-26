"use client";

import React from "react";
import { Skeleton } from "@mui/material";

function SkeletonUpdates() {
    return (
        <section className="py-6 lg:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                        >
                            <Skeleton variant="rectangular" width="100%" height={250} className="rounded-md" />
                            <div className="py-2 flex justify-between items-center">
                                <Skeleton variant="rounded" sx={{ width: "100px", height: "12px" }} />
                                <Skeleton variant="rounded" sx={{ width: "100px", height: "12px" }} />
                            </div>
                            <Skeleton variant="text" width="80%" height={28} className="mt-3" />
                            <Skeleton variant="text" width="95%" height={20} />
                            <Skeleton variant="text" width="90%" height={20} />
                            <Skeleton variant="text" width="85%" height={20} />

                            <div className="mt-5">
                                <Skeleton variant="circular" width={50} height={50} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkeletonUpdates;
