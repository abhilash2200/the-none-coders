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
import { useTheme } from "@/app/context/ThemeContext";
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

const jobDetailsMap: Record<number, JobDetails> = Object.fromEntries(
  jobDetailsArray.map((job) => [job.id, job])
);

export default function CareerView() {
  const { theme } = useTheme()
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
        <h3
          className={`mt-8 font-semibold text-lg pb-1 ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          {title}
        </h3>
  
        {Array.isArray(content) ? (
          <ul
            className={`list-disc pl-6 mt-2 space-y-1 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {content.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        ) : (
          <div
            className={`prose prose-sm mt-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {content}
          </div>
        )}
      </>
    );
  };
  

  return (
    <div className="container mx-auto py-10 px-4 flex gap-6">
      {/* Left Column - Job List */}
      <div className="w-[600px] border-r border-gray-200 pr-4 sticky top-0 self-start max-h-screen overflow-y-auto custom-scrollbar">
        <div className={`sticky top-0 z-10 border shadow-sm px-4 py-3 flex justify-between items-center ${theme === "light" ? "bg-white border-gray-200" : "bg-[#111] border-gray-200"}`}>
          <p className={`text-sm  ${theme === "light" ? "text-gray-700" : "text-gray-200"} font-medium`}>
            Showing{" "}
            <span className="font-semibold">
              {startIndex + 1}–{Math.min(startIndex + currentJobs.length, sortedJobs.length)}
            </span>{" "}
            of <span className="font-semibold">{jobsList.length}</span> results
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>
              Sort by
            </label>
            <select
              id="sort"
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className={`text-sm border rounded-md px-2 py-1 transition focus:ring-0 ${theme === "light" ? "bg-white hover:border-gray-400 border-gray-300" : "bg-[#111] hover:border-gray-400 border-gray-300"}`}
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
              className={`p-5 mb-3 cursor-pointer transition border shadow-sm hover:shadow-md group ${selectedJob === job.id
                ? theme === "light"
                  ? "border-gray-200 bg-gray-50"
                  : "border-gray-700 bg-[#1a1a1a]"
                : theme === "light"
                  ? "border-gray-200 bg-white hover:border-gray-300"
                  : "border-gray-700 bg-[#111] hover:border-gray-600"
                }`}
              onClick={() => setSelectedJob(job.id)}
            >
              <h3
                className={`font-semibold text-lg ${selectedJob === job.id
                  ? theme === "light"
                    ? "text-[#190849]"
                    : "text-yellow-300"
                  : theme === "light"
                    ? "text-gray-900 group-hover:text-[#4d4d4d]"
                    : "text-gray-200 group-hover:text-gray-400"
                  }`}
              >
                {job.title}
              </h3>

              <div
                className={`flex items-center flex-wrap gap-3 my-2 text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
              >
                <span className="flex items-center gap-1">
                  <Calendar className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`} />{" "}
                  {job.posted}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`} />{" "}
                  {job.workType}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`} />{" "}
                  {job.location}
                </span>
              </div>

              <p
                className={`text-sm mt-2 line-clamp-2 ${theme === "light" ? "text-gray-700" : "text-gray-300"
                  }`}
              >
                {job.shortDesc}
              </p>

              <span
                className={`text-sm hover:underline ${theme === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
              >
                See details →
              </span>
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
      <div
        className={`flex-1 p-6 rounded-xl shadow-md ${theme === "light" ? "bg-white" : "bg-[#111]"
          }`}
      >
        {loading ? (
          <SkeletonCareerView />
        ) : details ? (
          <>
            <div className="mb-4 pb-4">
              <h2
                className={`text-2xl font-bold ${theme === "light" ? "text-gray-900" : "text-gray-100"
                  }`}
              >
                {details.title}
              </h2>
              <p
                className={`flex items-center gap-1 ${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
              >
                <MapPin className="w-4 h-4" /> {details.location}
              </p>
            </div>

            {/* Apply Button */}
            <div className="flex items-center gap-4 mb-6">
              <Button
                onClick={() => setOpen(true)}
                variant="primary"
                size="md"
              >
                Apply Now
              </Button>

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
            <div
              className={`grid grid-cols-2 gap-4 mt-2 text-sm p-4 rounded-lg ${theme === "light"
                ? "bg-gray-50 text-gray-800"
                : "bg-[#1a1a1a] text-gray-300"
                }`}
            >
              <p>
                <strong>Date posted:</strong> {details.datePosted}
              </p>
              <p>
                <strong>Job number:</strong> {details.jobNumber}
              </p>
              <p>
                <strong>Job status:</strong> {details.jobStatus}
              </p>
              <p>
                <strong>Travel:</strong> {details.travel}
              </p>
              <p>
                <strong>Role type:</strong> {details.roleType}
              </p>
              <p>
                <strong>Discipline:</strong> {details.discipline}
              </p>
              <p>
                <strong>Employment type:</strong> {details.employmentType}
              </p>
              <p>
                <strong>Profession:</strong> {details.profession}
              </p>
              <p>
                <strong>Work Mode:</strong> {details.workMode}
              </p>
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
          <div
            className={`flex flex-col items-center text-center ${theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}
          >
            <h3
              className={`text-lg font-medium ${theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
            >
              Select a job
            </h3>
            <p className="text-sm mt-1">Nothing is selected</p>
          </div>
        )}
      </div>

    </div>
  );
}
