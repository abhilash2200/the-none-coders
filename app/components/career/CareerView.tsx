"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import { Pagination } from "@mui/material";
import SliderPopup from "@/components/SliderPopup";
import SkeletonCareerView from "../SkeletonCareerView";
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

const jobDetailsMap: Record<number, any> = jobDetailsArray.reduce((acc, job) => {
  acc[job.id] = job;
  return acc;
}, {} as Record<number, any>);


export default function CareerView() {
  const [loading, setLoading] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "new" | "old">("all");
  const [page, setPage] = useState(1);

  const details = selectedJob !== null ? jobDetailsMap[selectedJob] : null;

  // --- Sorting logic ---
  const sortedJobs = React.useMemo(() => {
    if (filter === "new") return [...jobsList].sort((a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime());
    if (filter === "old") return [...jobsList].sort((a, b) => new Date(a.posted).getTime() - new Date(b.posted).getTime());
    return jobsList;
  }, [filter]);
  const jobsPerPage = 40;
  const pageCount = Math.ceil(sortedJobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const currentJobs = sortedJobs.slice(startIndex, startIndex + jobsPerPage);

  useEffect(() => {
    if (selectedJob !== null) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  }, [selectedJob]);

  return (
    <div className="container mx-auto py-10 px-4 flex gap-6">
      <div className="w-[600px] border-r border-gray-200 pr-4 sticky top-0 self-start max-h-screen overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 z-10 bg-white border border-gray-200 shadow-sm px-4 py-3 flex justify-between items-center">
          <p className="text-sm text-gray-700 font-medium">
            Showing <span className="font-semibold">{startIndex + 1}–{Math.min(startIndex + currentJobs.length, sortedJobs.length)}</span> of{" "}
            <span className="font-semibold">{jobsList.length}</span> results
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
        <div className="mt-4">
          {currentJobs.map((job) => (
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
              <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                {job.shortDesc}
              </p>
              <span className="text-gray-900 text-sm hover:underline hover:text-[#000]">
                See details →
              </span>
            </div>
          ))}
        </div>
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
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setOpen(true)}
                id="mainButton"
                className="cursor-pointer group relative bg-gray-100 hover:bg-zinc-300 text-black font-semibold text-sm py-3 rounded-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-lg w-36 h-10"
              >
                <div className="relative flex items-center justify-center gap-2">
                  <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Get Started
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Apply Now
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
              <SliderPopup open={open} handleClose={() => setOpen(false)} />
            </div>
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
            {details.overview && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Overview
                </h3>
                <div className="prose prose-sm text-gray-700 mt-2">
                  {details.overview}
                </div>
              </>
            )}

            {details.responsibilities && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  {details.responsibilities.map((r: string, idx: number) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </>
            )}

            {details.qualifications && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Qualifications
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  {details.qualifications.map((q: string, idx: number) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
              </>
            )}

            {details.preferred && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Preferred Qualifications
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  {details.preferred.map((p: string, idx: number) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </>
            )}

            {details.benefits && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Benefits
                </h3>
                <div className="prose prose-sm text-gray-700 mt-2 ">
                  {details.benefits}
                </div>
              </>
            )}

            {details.culture && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Culture
                </h3>
                <div className="prose prose-sm text-gray-700 mt-2 ">
                  {details.culture}
                </div>
              </>
            )}

            {details.careerGrowth && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Career Growth
                </h3>
                <div className="prose prose-sm text-gray-700 mt-2 ">
                  {details.careerGrowth}
                </div>
              </>
            )}

            {details.diversityStatement && (
              <>
                <h3 className="mt-8 font-semibold text-lg pb-1">
                  Diversity & Inclusion
                </h3>
                <div className="prose prose-sm text-gray-700 mt-2 ">
                  {details.diversityStatement}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center text-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5a.375.375 0 01-.375-.375v-1.5a3.375 3.375 0 00-3.375-3.375H8.25A2.25 2.25 0 006 5.25v13.5A2.25 2.25 0 008.25 21h7.5a2.25 2.25 0 002.25-2.25V16.5a.75.75 0 00-.75-.75h-1.5"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-700">Select a job</h3>
            <p className="text-sm text-gray-400 mt-1">Nothing is selected</p>
          </div>
        )}
      </div>
    </div>
  );
}
