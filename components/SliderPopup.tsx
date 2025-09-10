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
import { useRouter } from "next/navigation";

type PopupFormProps = {
  open: boolean;
  handleClose: () => void;
};

export default function SliderPopup({ open, handleClose }: PopupFormProps) {
  const router = useRouter();
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
    console.log("Form Submitted:", formData);
    router.push("/thankyou");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });

    setLoading(false);
    handleClose();
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
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-1 ${errors.name
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
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-1 ${errors.email
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
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-1 ${errors.phone
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
              className={`w-full px-4 py-3 rounded-md border text-sm bg-white focus:outline-none focus:ring-1 ${errors.projectType
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-black"
                }`}
            >
              <option value="">Select Project Type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Custom Software">Custom Software</option>
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
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-1 ${errors.message
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
            disabled={loading}
            className="w-full mt-2 bg-black text-white font-semibold py-4 rounded-md 
             hover:bg-gray-900 transition-all duration-200 
             disabled:opacity-60 disabled:cursor-not-allowed
             flex items-center justify-center hover:cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
