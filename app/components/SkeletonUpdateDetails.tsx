"use client";

import React from "react";
import ArticleSkeleton from "./ArticleSkeleton";
import FormSkeleton from "./FormSkeleton";
import RecentUpdatesSkeleton from "./RecentUpdatesSkeleton";

const SkeletonUpdateDetails = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-wrap justify-between">
        {/* Left content */}
        <ArticleSkeleton />

        {/* Right sidebar */}
        <div className="w-full md:w-[28%] hidden md:block">
          <FormSkeleton />
          <RecentUpdatesSkeleton />
        </div>
      </div>
    </div>
  );
};

export default SkeletonUpdateDetails;
