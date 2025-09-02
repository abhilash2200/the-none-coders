"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import { Pagination } from "@mui/material";
import SkeletonCareerView from "../SkeletonCareerView";
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

const jobDetailsMap: Record<number, JobDetails> = Object.fromEntries(
  jobDetailsArray.map((job) => [job.id, job])
);

export default function CareerView() {
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "new" | "old">("all");
  const [page, setPage] = useState(1);

  const jobsPerPage = 40;

  // Sorting logic simplified
  const sortedJobs = useMemo(() => {
    const list = [...jobsList];
    if (filter === "new") {
      list.sort(
        (a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime()
      );
    } else if (filter === "old") {
      list.sort(
        (a, b) => new Date(a.posted).getTime() - new Date(b.posted).getTime()
      );
    }
    return list;
  }, [filter]);

  const pageCount = Math.ceil(sortedJobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const currentJobs = sortedJobs.slice(startIndex, startIndex + jobsPerPage);

  const details = selectedJob !== null ? jobDetailsMap[selectedJob] : null;

  useEffect(() => {
    if (selectedJob !== null) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [selectedJob]);

  // Helper renderer for detail sections
  const renderSection = (title: string, content?: string | string[]) => {
    if (!content) return null;
    return (
      <>
        <h3 className="mt-8 font-semibold text-lg pb-1">{title}</h3>
        {Array.isArray(content) ? (
          <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
            {content.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        ) : (
          <div className="prose prose-sm text-gray-700 mt-2">{content}</div>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4 flex gap-6">
      {/* Left Column - Job List */}
      <div className="w-[600px] border-r border-gray-200 pr-4 sticky top-0 self-start max-h-screen overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 z-10 bg-white border border-gray-200 shadow-sm px-4 py-3 flex justify-between items-center">
          <p className="text-sm text-gray-700 font-medium">
            Showing{" "}
            <span className="font-semibold">
              {startIndex + 1}–{Math.min(startIndex + currentJobs.length, sortedJobs.length)}
            </span>{" "}
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
        <div className="mt-4">
          {currentJobs.map((job: JobItem) => (
            <div
              key={job.id}
              className={`p-5 mb-3 cursor-pointer rounded-xl transition border shadow-sm hover:shadow-md group ${selectedJob === job.id
                ? "border-gray-200 bg-gray-50"
                : "border-gray-200 bg-white hover:border-gray-200"
                }`}
              onClick={() => setSelectedJob(job.id)}
            >
              <h3
                className={`font-semibold text-lg ${selectedJob === job.id
                  ? "text-[#190849]"
                  : "text-gray-900 group-hover:text-[#4d4d4d]"
                  }`}
              >
                {job.title}
              </h3>
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
              <p className="text-sm mt-2 text-gray-700 line-clamp-2">{job.shortDesc}</p>
              <span className="text-gray-900 text-sm hover:underline">See details →</span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="flex justify-center py-4">
            <Pagination
              count={pageCount}
              page={page}
              onChange={(_, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </div>
        )}
      </div>

      {/* Right Column - Job Details */}
      <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
        {loading ? (
          <SkeletonCareerView />
        ) : details ? (
          <>
            <div className="mb-4 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">{details.title}</h2>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {details.location}
              </p>
            </div>

            {/* Apply Button */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer group relative bg-gray-100 hover:bg-zinc-300 text-black font-semibold text-sm py-3 rounded-lg transition-all duration-200 shadow-lg w-36 h-10"
              >
                <div className="relative flex items-center justify-center gap-2">
                  <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Get Started
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Right Now
                    </span>
                  </span>

                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                  >
                    <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="white"
                      d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                    ></path>
                  </svg>
                </div>
              </button>

              <ApplicationDialog
                open={open}
                onClose={() => setOpen(false)}
                jobId={details?.id}
                jobTitle={details?.title}
                jobNumber={details?.jobNumber}
                location={details?.location}
              />
            </div>

            {/* Job Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2 text-sm bg-gray-30 p-4 rounded-lg">
              <p><strong>Date posted:</strong> {details.datePosted}</p>
              <p><strong>Job number:</strong> {details.jobNumber}</p>
              <p><strong>Job status:</strong> {details.jobStatus}</p>
              <p><strong>Travel:</strong> {details.travel}</p>
              <p><strong>Role type:</strong> {details.roleType}</p>
              <p><strong>Discipline:</strong> {details.discipline}</p>
              <p><strong>Employment type:</strong> {details.employmentType}</p>
              <p><strong>Profession:</strong> {details.profession}</p>
              <p><strong>Work Mode:</strong> {details.workMode}</p>
            </div>

            {/* Optional Sections */}
            {renderSection("Overview", details.overview)}
            {renderSection("Responsibilities", details.responsibilities)}
            {renderSection("Qualifications", details.qualifications)}
            {renderSection("Preferred Qualifications", details.preferred)}
            {renderSection("Benefits", details.benefits)}
            {renderSection("Culture", details.culture)}
            {renderSection("Career Growth", details.careerGrowth)}
            {renderSection("Diversity & Inclusion", details.diversityStatement)}
          </>
        ) : (
          <div className="flex flex-col items-center text-center text-gray-500">
            <h3 className="text-lg font-medium text-gray-700">Select a job</h3>
            <p className="text-sm text-gray-400 mt-1">Nothing is selected</p>
          </div>
        )}
      </div>
    </div>
  );
}
