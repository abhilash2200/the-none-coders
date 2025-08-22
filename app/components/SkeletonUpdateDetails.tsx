"use client";

import { Skeleton } from "@mui/material";
import React from "react";

function SkeletonUpdateDetails() {
  return (
    <div className="max-w-full w-[900px] mx-auto px-5 py-6">
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
        <Skeleton variant="rounded" sx={{ width: "100px", height: "10px" }} />
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
  );
}

export default SkeletonUpdateDetails;
