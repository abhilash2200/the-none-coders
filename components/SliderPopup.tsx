"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

type PopupFormProps = {
  open: boolean;
  handleClose: () => void;
};

export default function SliderPopup(props: PopupFormProps) {
  return (
    <Suspense fallback={null}>
      <SliderPopupContent {...props} />
    </Suspense>
  );
}

function SliderPopupContent({ open, handleClose }: PopupFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const utmSource = searchParams.get("utm_source") || "";
  const url = typeof window !== "undefined" ? window.location.href : "";
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const tempErrors = { ...errors };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.projectType) {
      tempErrors.projectType = "Please select a project type";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Project details are required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const payload = {
        FullName: formData.name,
        EmailId: formData.email,
        MobileNo: formData.phone,
        Address: "",
        PostalCode: "",
        Query: formData.message,
        EnquirySource: "Website",
        Remarks: "",
        EnquiryType: formData.projectType,
        UTMSource: utmSource || url,
        AlternateNo: "",
        Education: "",
        InstituteName: "",
        Position_Applied_For: "",
        CurrentLocation: "",
        Preferred_Location: "",
        Technical_Score: "",
        DataCategory: "Service",
        InterestedService: formData.projectType,
        Campaign: "",
      };

      const response = await fetch("/api/insert-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form Submitted successfully");
      router.push("/thankyou");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      handleClose();
    } catch (error) {
      console.error("Submission Error:", error);
      // Optional: Add a toast notification here
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg rounded-2xl">


        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-[#002147]">
            Get a Free Consultation
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 text-sm">
            Share your project details and our team will connect with you to
            discuss the best solution for your business.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-3 mt-3" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-none border text-sm focus:outline-none focus:ring-1 ${errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-black"
                }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-none border text-sm focus:outline-none focus:ring-1 ${errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-black"
                }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-none border text-sm focus:outline-none focus:ring-1 ${errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-black"
                }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-none border text-sm bg-white focus:outline-none focus:ring-1 ${errors.projectType
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-black"
                }`}
            >
              <option value="">Service you’re interested in</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-apps-development">Mobile Apps Development</option>
              <option value="crm-development">CRM Development</option>
              <option value="erp-development">ERP Development</option>
              <option value="cloud-solutions">Cloud Solutions</option>
              <option value="ai-ml-application">AI & ML Application</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Project Details"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-none border text-sm focus:outline-none focus:ring-1 ${errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-black"
                }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            fullWidth
            className="mt-2 rounded-none cursor-pointer"
          >
            Submit
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
