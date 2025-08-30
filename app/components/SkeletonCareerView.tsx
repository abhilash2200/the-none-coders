"use client";

import React from "react";
import { Skeleton } from "@mui/material";

function SkeletonCareerView() {
    return (
        <div className="w-full flex gap-6">
            <div className="flex-1">
                <Skeleton variant="text" width="70%" height={50} />
                <Skeleton variant="text" width="50%" height={20} className="mt-2" />

                <div className="flex gap-4 mt-6">
                    <Skeleton variant="rectangular" width={140} height={40} />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 mb-3">
                    {Array.from(new Array(8)).map((_, i) => (
                        <Skeleton key={i} variant="text" width="80%" height={18} />
                    ))}
                </div>

                <div className="my-3">
                    <Skeleton variant="text" width="60%" height={30} className="mt-8" />
                    {Array.from(new Array(6)).map((_, i) => (
                        <Skeleton key={i} variant="text" width="90%" height={15} />
                    ))}
                </div>
                <div className="my-3">
                    <Skeleton variant="text" width="60%" height={30} className="mt-8" />
                    {Array.from(new Array(6)).map((_, i) => (
                        <Skeleton key={i} variant="text" width="90%" height={15} />
                    ))}
                </div>
                <div className="my-3">
                    <Skeleton variant="text" width="60%" height={30} className="mt-8" />
                    {Array.from(new Array(6)).map((_, i) => (
                        <Skeleton key={i} variant="text" width="90%" height={15} />
                    ))}
                </div>
                <div className="my-3">
                    <Skeleton variant="text" width="60%" height={30} className="mt-8" />
                    {Array.from(new Array(6)).map((_, i) => (
                        <Skeleton key={i} variant="text" width="90%" height={15} />
                    ))}
                </div>
                <div className="my-3">
                    <Skeleton variant="text" width="60%" height={30} className="mt-8" />
                    {Array.from(new Array(6)).map((_, i) => (
                        <Skeleton key={i} variant="text" width="90%" height={15} />
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default SkeletonCareerView;
