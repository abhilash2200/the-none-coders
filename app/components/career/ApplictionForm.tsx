"use client";

import React, { useEffect, useState } from "react";

export type ApplicationFormProps = {
    jobId?: number | null;
    jobTitle?: string;
    jobNumber?: string;
    location?: string;
    onClose: () => void;
};

export default function ApplicationForm({
    jobId,
    jobTitle,
    jobNumber,
    location,
    onClose,
}: ApplicationFormProps) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null as File | null,
        coverLetter: "",
        jobId: jobId ?? null,
        jobTitle: jobTitle ?? "",
        jobNumber: jobNumber ?? "",
        location: location ?? "",
    });

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            jobId: jobId ?? null,
            jobTitle: jobTitle ?? "",
            jobNumber: jobNumber ?? "",
            location: location ?? "",
        }));
    }, [jobId, jobTitle, jobNumber, location]);

    const onInput =
        (key: keyof typeof form) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm((p) => ({ ...p, [key]: e.target.value }));
            };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("name", form.name);
        fd.append("email", form.email);
        fd.append("phone", form.phone);
        if (form.resume) fd.append("resume", form.resume);
        fd.append("jobId", String(form.jobId ?? ""));
        fd.append("jobTitle", form.jobTitle);
        fd.append("jobNumber", form.jobNumber);
        fd.append("location", form.location);
        fd.append("coverLetter", form.coverLetter);

        // API hit here
        // try {
        //     const res = await fetch("/api/apply", { method: "POST", body: fd });
        //     if (!res.ok) throw new Error("Failed to submit");
        //     alert("Application submitted successfully!");
        //     onClose();
        // } catch (err) {
        //     console.error(err);
        //     alert("Something went wrong. Please try again.");
        // }


        console.log("APPLICATION_PAYLOAD =>", Object.fromEntries(fd.entries()));
        onClose();
    };

    return (
        <form onSubmit={onSubmit} className="space-y-3">
            {/* Job Info Section */}
            <div className="mb-4 p-4 rounded-xl border bg-gray-50">
                <p className="text-xs text-gray-600">Applying for</p>
                <h3 className="text-base font-semibold text-gray-900">
                    {form.jobTitle || "—"}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span>Job #{form.jobNumber || "—"}</span>
                    <span>•</span>
                    <span>{form.location || "—"}</span>
                </div>
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="jobId" value={String(form.jobId ?? "")} />
            <input type="hidden" name="jobNumber" value={form.jobNumber} />
            <input type="hidden" name="jobTitle" value={form.jobTitle} />
            <input type="hidden" name="location" value={form.location} />

            <label className="text-sm block">
                Full Name
                <input
                    className="mt-1 w-full rounded-[1px] border-[1px] border-gray-500 p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    value={form.name}
                    onChange={onInput("name")}
                    required
                />
            </label>

            <label className="text-sm block">
                Email ID
                <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                    className="mt-1 w-full rounded-[1px] border-[1px] border-gray-500 p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    value={form.email}
                    onChange={onInput("email")}
                    required
                />
            </label>

            <label className="text-sm block">
                Phone no.
                <input
                    type="tel"
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit phone number"
                    className="mt-1 w-full rounded-[1px] border-[1px] border-gray-500 p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    value={form.phone}
                    onChange={onInput("phone")}
                />
            </label>

            <label className="text-sm block">
                Upload Your Resume (PDF)
                <input
                    type="file"
                    accept=".pdf"
                    className="mt-1 w-full rounded-[1px] border-[1px] border-gray-500 p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size > 2 * 1024 * 1024) { // > 2MB
                            alert("File size must be under 2MB");
                            e.target.value = "";
                            return;
                        }
                        setForm((p) => ({ ...p, resume: file ?? null }));
                    }}
                />
            </label>

            <label className="text-sm block">
                Cover Letter
                <textarea
                    className="mt-1 w-full rounded-[1px] border-[1px] border-gray-700 p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    rows={4}
                    value={form.coverLetter}
                    onChange={onInput("coverLetter")}
                    placeholder="Why are you a great fit for this role?"
                />
            </label>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-[5px] border-1 hover:cursor-pointer hover:scale-101 transition-transform ease-in"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-[5px] bg-[#1d1d1d] text-white hover:bg-[#414141] hover:cursor-pointer hover:scale-101 transition-transform ease-in"
                >
                    Submit application
                </button>
            </div>
        </form>
    );
}
