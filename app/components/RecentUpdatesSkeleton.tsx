"use client";

import { Skeleton } from "@mui/material";
import React from "react";

const RecentUpdatesSkeleton = () => {
  return (
    <div className="mt-10">
      <ul className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="flex gap-2 items-center">
            {/* Image skeleton */}
            <Skeleton
              variant="rounded"
              width={120}
              height={80}
              sx={{ flexShrink: 0, borderRadius: "8px" }}
            />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" width="80%" height={24} />
              <Skeleton variant="text" width="95%" height={18} />
              <Skeleton variant="text" width="60%" height={16} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUpdatesSkeleton;
