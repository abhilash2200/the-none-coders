"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import CareerView from "./CareerView"; // desktop version
import { Pagination } from "@mui/material";
import {
    Calendar,
    Briefcase,
    MapPin,
    CircleArrowLeft,
    SquareArrowOutDownRight,
} from "lucide-react";
import { jobsList, JobItem } from "@/app/data/jobsList";
import {
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
} from "../../data/jobDetails";
import ApplicationDialog from "./ApplicationDialog";
import { Button } from "@/components/ui/button";

export interface JobDetails {
    id: number;
    title: string;
    location: string;
    datePosted: string;
    jobNumber: string;
    jobStatus: string;
    travel: string;
    roleType: string;
    discipline: string;
    employmentType: string;
    profession: string;
    workMode: string;
    overview?: string;
    responsibilities?: string[];
    qualifications?: string[];
    preferred?: string[];
    benefits?: string;
    culture?: string;
    careerGrowth?: string;
    diversityStatement?: string;
}

const jobDetailsArray: JobDetails[] = [
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

const jobDetailsMap: Record<number, JobDetails> = jobDetailsArray.reduce(
    (acc, job) => {
        acc[job.id] = job;
        return acc;
    },
    {} as Record<number, JobDetails>
);

export default function ResponsiveCareerView() {
    // States
    const [isMobile, setIsMobile] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobDetails | null>(null);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState<"all" | "new" | "old">("all");
    const [showFull, setShowFull] = useState(false);
    const [open, setOpen] = useState(false);

    // refs
    const listTopRef = useRef<HTMLDivElement | null>(null);
    const detailTopRef = useRef<HTMLDivElement | null>(null);

    // Detect mobile width client-side
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Scroll to top when page changes (for job list)
    useEffect(() => {
        if (isMobile) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [page, isMobile]);

    // Scroll to top when job is selected (for job detail)
    useEffect(() => {
        if (isMobile && selectedJob) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [selectedJob, isMobile]);

    // Sorting
    const sortedJobs = useMemo(() => {
        if (filter === "new")
            return [...jobsList].sort(
                (a, b) =>
                    new Date(b.posted).getTime() - new Date(a.posted).getTime()
            );
        if (filter === "old")
            return [...jobsList].sort(
                (a, b) =>
                    new Date(a.posted).getTime() - new Date(b.posted).getTime()
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
                <div ref={listTopRef}>
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
                                onChange={(e) => setFilter(e.target.value as typeof filter)}
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
                        {paginatedJobs.map((job: JobItem) => (
                            <div
                                key={job.id}
                                className="p-5 border border-gray-200 transition shadow-sm hover:shadow-md bg-white cursor-pointer"
                                onClick={() => {
                                    setSelectedJob(jobDetailsMap[job.id]);
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
                <div ref={detailTopRef}>
                    <div className="p-4 bg-[#fafafafa] mb-6 border border-gray-400">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                setSelectedJob(null);
                                setShowFull(false);
                            }}
                            leftIcon={<CircleArrowLeft className="w-4 h-4" />}
                        >
                            Back to Jobs
                        </Button>
                    </div>

                    <h2 className="text-[22px] font-semibold mb-2 text-gray-900">
                        {selectedJob.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm">{selectedJob.location}</p>
                    <hr className="text-[#969696]" />

                    {/* Job Detail Grid */}
                    <h2 className="text-[18px] font-semibold text-gray-800 mt-3">
                        Job Detail
                    </h2>
                    <div className="grid grid-cols-2 gap-3 text-sm py-2 rounded-lg mb-2">
                        <p><strong>Date posted:</strong> {selectedJob.datePosted}</p>
                        <p><strong>Job number:</strong> {selectedJob.jobNumber}</p>
                        <p><strong>Job status:</strong> {selectedJob.jobStatus}</p>
                        <p><strong>Travel:</strong> {selectedJob.travel}</p>
                        <p><strong>Role type:</strong> {selectedJob.roleType}</p>
                        <p><strong>Discipline:</strong> {selectedJob.discipline}</p>
                        <p><strong>Employment type:</strong> {selectedJob.employmentType}</p>
                        <p><strong>Profession:</strong> {selectedJob.profession}</p>
                        <p><strong>Work Mode:</strong> {selectedJob.workMode}</p>
                    </div>
                    <hr className="text-[#969696]" />

                    {/* Overview & More */}
                    <div className="text-sm text-gray-700 leading-relaxed pb-24">
                        <p className="mb-2">{selectedJob.overview}</p>

                        {selectedJob.responsibilities && (
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Responsibilities</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {selectedJob.responsibilities.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {!showFull && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2"
                                onClick={() => setShowFull(true)}
                                rightIcon={<SquareArrowOutDownRight className="w-3 h-3" />}
                            >
                                Read More
                            </Button>
                        )}

                        {showFull && (
                            <div className="transition-all duration-500 ease-in-out mt-6 space-y-4">
                                {selectedJob.qualifications && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Qualifications</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {selectedJob.qualifications.map((q, i) => (
                                                <li key={i}>{q}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedJob.preferred && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Preferred Qualifications</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {selectedJob.preferred.map((p, i) => (
                                                <li key={i}>{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedJob.benefits && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Benefits</h3>
                                        <div>{selectedJob.benefits}</div>
                                    </div>
                                )}

                                {selectedJob.culture && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Culture</h3>
                                        <div>{selectedJob.culture}</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {/* Footer */}
                    <div className="sticky bottom-0 bg-white border-t border-gray-300 p-4">
                        <Button
                            onClick={() => setOpen(true)}
                            id="mainButton"
                            variant="primary"
                            size="lg"
                            fullWidth
                        >
                            Apply Now
                        </Button>
                    </div>

                    {/* Always keep dialog outside */}
                    <ApplicationDialog
                        open={open}
                        onClose={() => setOpen(false)}
                        jobId={selectedJob?.id}
                        jobTitle={selectedJob?.title}
                        jobNumber={selectedJob?.jobNumber}
                        location={selectedJob?.location}
                    />

                </div>
            )}
        </div>
    );
}
