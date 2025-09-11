"use client";

import { Skeleton } from "@mui/material";
import React from "react";

const ArticleSkeleton = () => {
  return (
    <div className="w-full md:w-[70%]">
      {/* Banner image */}
      <Skeleton
        variant="rounded"
        sx={{
          width: "1000px",
          maxWidth: "100%",
          height: { xs: "250px", lg: "500px" },
        }}
      />

      {/* Meta info */}
      <div className="py-2 flex justify-between px-2 items-center">
        <Skeleton variant="rounded" sx={{ width: "100px", height: "10px" }} />
        <Skeleton variant="rounded" sx={{ width: "100px", height: "10px", marginRight: "60px" }} />
      </div>

      {/* Sections */}
      {[...Array(3)].map((_, i) => (
        <div className="my-4" key={i}>
          <Skeleton
            className="mb-2"
            variant="rounded"
            sx={{ width: "500px", maxWidth: "100%", height: "30px" }}
          />
          {[...Array(4)].map((_, j) => (
            <Skeleton
              key={j}
              className="mb-2"
              variant="rounded"
              sx={{ width: "1000px", maxWidth: "100%", height: "10px" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArticleSkeleton;
