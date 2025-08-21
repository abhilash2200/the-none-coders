"use client";

import React from "react";
import { Skeleton } from "@mui/material";

function SkeletonUpdates() {
    return (
        <section className="py-6 lg:py-12">
            <div className="container mx-auto px-4">
                <div className="mb-6 lg:mb-10 flex justify-center">
                    <Skeleton variant="text" width={200} height={40} className="mx-auto" />
                </div>
                <div className="flex flex-wrap gap-y-4">
                    {[...Array(3)].map((_, i) => (
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
