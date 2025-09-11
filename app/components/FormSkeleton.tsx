"use client";

import { Skeleton } from "@mui/material";
import React from "react";

const FormSkeleton = () => {
  return (
    <div>
      <Skeleton variant="text" width="80%" height={30} sx={{ mx: "auto", mb: 1 }} />
      <Skeleton variant="text" width="90%" height={20} sx={{ mx: "auto", mb: 4 }} />

      <div className="space-y-4">
        <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />
        <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />
        <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />
        <Skeleton variant="rounded" height={40} sx={{ width: "100%" }} />
        <Skeleton variant="rounded" height={100} sx={{ width: "100%" }} />
        <Skeleton variant="rounded" height={45} sx={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default FormSkeleton;
