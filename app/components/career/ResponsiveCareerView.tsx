"use client";
import React, { useState, useEffect, useMemo } from "react";
import CareerView from "./CareerView"; // desktop version
import { Pagination } from "@mui/material";
import {
    Calendar,
    Briefcase,
    MapPin,
    CircleArrowLeft,
    SquareArrowOutDownRight,
} from "lucide-react";
import { jobsList } from "@/app/data/jobsList";
import { seniorBusinessDevelopmentManager } from "@/app/data/jobDetails/senior-business-development-manager";
import { businessdevelopmentmanager } from "@/app/data/jobDetails/business-development-manager";
import { partnerdevelopmentmanager } from "@/app/data/jobDetails/partner-development-manager";
import { softwareEngineer } from "@/app/data/jobDetails/software-engineer";
import { cloudSolutionsArchitect } from "@/app/data/jobDetails/cloud-solutions-architect";
import { dataScientist } from "@/app/data/jobDetails/data-scientist";
import { cybersecurityAnalyst } from "@/app/data/jobDetails/cybersecurity-analyst";
import { aiResearchEngineer } from "@/app/data/jobDetails/ai-research-engineer";
import { productManager } from "@/app/data/jobDetails/product-manager";
import { uiuxDesigner } from "@/app/data/jobDetails/ui-ux-designer";
import SliderPopup from "@/components/SliderPopup";

const jobDetailsArray = [
    seniorBusinessDevelopmentManager,
    businessdevelopmentmanager,
    partnerdevelopmentmanager,
    softwareEngineer,
    cloudSolutionsArchitect,
    dataScientist,
    cybersecurityAnalyst,
    aiResearchEngineer,
    productManager,
    uiuxDesigner,
];

const jobDetailsMap: Record<number, any> = jobDetailsArray.reduce(
    (acc, job) => {
        acc[job.id] = job;
        return acc;
    },
    {} as Record<number, any>
);

export default function ResponsiveCareerView() {
    // States
    const [isMobile, setIsMobile] = useState(false);
    const [selectedJob, setSelectedJob] = useState<number | null>(null);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState<"all" | "new" | "old">("all");
    const [showFull, setShowFull] = useState(false);
    const [open, setOpen] = useState(false);

    // Detect mobile width client-side
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Sorting
    const sortedJobs = useMemo(() => {
        if (filter === "new")
            return [...jobsList].sort(
                (a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime()
            );
        if (filter === "old")
            return [...jobsList].sort(
                (a, b) => new Date(a.posted).getTime() - new Date(b.posted).getTime()
            );
        return jobsList;
    }, [filter]);

    const jobsPerPage = 8;
    const startIndex = (page - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const paginatedJobs = sortedJobs.slice(startIndex, endIndex);
    const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);
    if (!isMobile) {
        return <CareerView />;
    }

    return (
        <div className="p-4 mt-10 min-h-screen pb-24">
            {selectedJob === null ? (
                <div>
                    {/* Header */}
                    <div className="sticky top-0 z-10 bg-white border border-gray-200 shadow-sm px-4 py-3 flex justify-between items-center">
                        <p className="text-sm text-gray-700 font-medium">
                            Showing <span className="font-semibold">{paginatedJobs.length}</span>{" "}
                            of <span className="font-semibold">{jobsList.length}</span> results
                        </p>
                        <div className="flex items-center gap-2">
                            <label htmlFor="sort" className="text-sm text-gray-600">
                                Sort by
                            </label>
                            <select
                                id="sort"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value as any)}
                                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white hover:border-gray-400 transition focus:ring-0"
                            >
                                <option value="all">All</option>
                                <option value="new">Most recent</option>
                                <option value="old">Oldest</option>
                            </select>
                        </div>
                    </div>

                    {/* Job List */}
                    <div className="mt-4 space-y-4">
                        {paginatedJobs.map((job) => (
                            <div
                                key={job.id}
                                className="p-5 rounded-[10px] transition border-gray-500 shadow-md hover:shadow-md bg-white cursor-pointer"
                                onClick={() => {
                                    setSelectedJob(job.id);
                                    setShowFull(false);
                                }}
                            >
                                <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
                                <div className="flex items-center flex-wrap gap-3 my-2 text-gray-600 text-sm">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-gray-500" /> {job.posted}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Briefcase className="w-4 h-4 text-gray-500" /> {job.workType}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-gray-500" /> {job.location}
                                    </span>
                                </div>
                                <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                                    {job.shortDesc}
                                </p>
                                <span className="text-indigo-600 text-sm hover:underline">
                                    See details →
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={(_, value) => setPage(value)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                </div>
            ) : (
                // Job Detail
                <div>
                    <div className="p-4 bg-[#fafafafa] mb-6 border border-gray-400">
                        <button
                            className="flex items-center gap-2 text-gray-700 font-medium hover:bg-gray-300 transition"
                            onClick={() => {
                                setSelectedJob(null);
                                setShowFull(false);
                            }}
                        >
                            <CircleArrowLeft /> Back to Jobs
                        </button>
                    </div>

                    <h2 className="text-[22px] font-semibold mb-2 text-gray-900">
                        {jobDetailsMap[selectedJob].title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        {jobDetailsMap[selectedJob].location}
                    </p>
                    <hr className="text-[#969696]" />

                    <h2 className="text-[18px] font-semibold text-gray-800 mt-3">
                        Job Detail
                    </h2>
                    <div className="grid grid-cols-2 gap-3 text-sm py-2 rounded-lg mb-2">
                        <p>
                            <strong>Date posted:</strong>{" "}
                            {jobDetailsMap[selectedJob].datePosted}
                        </p>
                        <p>
                            <strong>Job number:</strong>{" "}
                            {jobDetailsMap[selectedJob].jobNumber}
                        </p>
                        <p>
                            <strong>Job status:</strong>{" "}
                            {jobDetailsMap[selectedJob].jobStatus}
                        </p>
                        <p>
                            <strong>Travel:</strong> {jobDetailsMap[selectedJob].travel}
                        </p>
                        <p>
                            <strong>Role type:</strong> {jobDetailsMap[selectedJob].roleType}
                        </p>
                        <p>
                            <strong>Discipline:</strong>{" "}
                            {jobDetailsMap[selectedJob].discipline}
                        </p>
                        <p>
                            <strong>Employment type:</strong>{" "}
                            {jobDetailsMap[selectedJob].employmentType}
                        </p>
                        <p>
                            <strong>Profession:</strong>{" "}
                            {jobDetailsMap[selectedJob].profession}
                        </p>
                        <p>
                            <strong>Work Mode:</strong>{" "}
                            {jobDetailsMap[selectedJob].workMode}
                        </p>
                    </div>
                    <hr className="text-[#969696]" />

                    <div className="text-sm text-gray-700 leading-relaxed pb-24">
                        <p className="mb-2">{jobDetailsMap[selectedJob].overview}</p>

                        {jobDetailsMap[selectedJob].responsibilities && (
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Responsibilities
                                </h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {jobDetailsMap[selectedJob].responsibilities.map(
                                        (r: string, i: number) => (
                                            <li key={i}>{r}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}

                        {!showFull && (
                            <button
                                className="text-gray-600 font-medium text-[15px] mt-2 inline-flex gap-2"
                                onClick={() => setShowFull(true)}
                            >
                                Read More <SquareArrowOutDownRight className="text-[10px]" />
                            </button>
                        )}

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${showFull
                                    ? "max-h-[2000px] opacity-100 mt-6"
                                    : "max-h-0 opacity-0"
                                }`}
                        >
                            {jobDetailsMap[selectedJob].qualifications && (
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Qualifications
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {jobDetailsMap[selectedJob].qualifications.map(
                                            (q: string, i: number) => (
                                                <li key={i}>{q}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {jobDetailsMap[selectedJob].preferred && (
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Preferred Qualifications
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {jobDetailsMap[selectedJob].preferred.map(
                                            (p: string, i: number) => (
                                                <li key={i}>{p}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {jobDetailsMap[selectedJob].benefits && (
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Benefits</h3>
                                    <div>{jobDetailsMap[selectedJob].benefits}</div>
                                </div>
                            )}

                            {jobDetailsMap[selectedJob].culture && (
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Culture</h3>
                                    <div>{jobDetailsMap[selectedJob].culture}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 bg-white border-t border-gray-300 p-4">
                        <button
                            onClick={() => setOpen(true)}
                            id="mainButton"
                            className="cursor-pointer group relative bg-gray-600 hover:bg-gray-300 text-white font-semibold text-sm py-3 rounded-[5px] transition-all duration-200 ease-in-out shadow-lg w-full"
                        >
                            Apply Now
                        </button>
                        <SliderPopup open={open} handleClose={() => setOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}
