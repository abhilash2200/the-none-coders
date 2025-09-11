"use client";

import { Skeleton } from "@mui/material";
import React from "react";

function SkeletonUpdateDetails() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-[70%]">
          <Skeleton
            variant="rounded"
            sx={{
              width: "1000px",
              maxWidth: "100%",
              height: { xs: "250px", lg: "500px" },
            }}
          />
          <div className="py-2 flex justify-between px-2 items-center">
            <Skeleton variant="rounded" sx={{ width: "100px", height: "10px" }} />
            <Skeleton variant="rounded" sx={{ width: "100px", height: "10px", marginRight: "60px" }} />
          </div>
          <div className="my-4">
            <Skeleton
              className="mb-2"
              variant="rounded"
              sx={{ width: "1000px", maxWidth: "100%", height: "30px" }}
            />
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="mb-2"
                variant="rounded"
                sx={{ width: "1000px", maxWidth: "100%", height: "10px" }}
              />
            ))}
          </div>
          <div className="my-4">
            <Skeleton
              className="mb-2"
              variant="rounded"
              sx={{ width: "500px", maxWidth: "100%", height: "30px" }}
            />
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="mb-2"
                variant="rounded"
                sx={{ width: "1000px", maxWidth: "100%", height: "10px" }}
              />
            ))}
          </div>
          <div className="my-4">
            <Skeleton
              className="mb-2"
              variant="rounded"
              sx={{ width: "500px", maxWidth: "100%", height: "30px" }}
            />
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="mb-2"
                variant="rounded"
                sx={{ width: "1000px", maxWidth: "100%", height: "10px" }}
              />
            ))}
          </div>
          <div className="my-4">
            <Skeleton
              className="mb-2"
              variant="rounded"
              sx={{ width: "500px", maxWidth: "100%", height: "30px" }}
            />
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="mb-2"
                variant="rounded"
                sx={{ width: "1000px", maxWidth: "100%", height: "10px" }}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-[28%] hidden md:block">
          <div>
            <Skeleton variant="text" width="70%" height={30} sx={{ mx: "auto", mb: 1 }} />
            <Skeleton variant="text" width="90%" height={20} sx={{ mx: "auto", mb: 4 }} />

            <div className="space-y-4">
              {/* Name input */}
              <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />

              {/* Email input */}
              <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />

              {/* Phone input */}
              <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />

              {/* Select */}
              <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />

              {/* Textarea */}
              <Skeleton variant="rounded" height={100} sx={{ width: "100%" }} />

              {/* Submit button */}
              <Skeleton variant="rounded" height={45} sx={{ width: "100%" }} />
            </div>
          </div>
          <div className="mt-10">
            <ul className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <Skeleton
                    variant="rounded"
                    width={120}
                    height={80}
                    sx={{ flexShrink: 0, borderRadius: "8px" }}
                  />
                  <div className="flex-1 space-y-2">
                    {/* Title */}
                    <Skeleton variant="text" width="80%" height={24} />
                    {/* Description */}
                    <Skeleton variant="text" width="95%" height={18} />
                    <Skeleton variant="text" width="60%" height={16} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonUpdateDetails;
