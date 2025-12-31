"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  services: string;
  message: string;
}

function SupportForm() {
  const { theme } = useTheme();
  const router = useRouter();

  const initialState: FormData = {
    name: "",
    email: "",
    phone: "",
    location: "",
    services: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!formData.phone.match(/^\d{10,}$/))
      newErrors.phone = "Phone must be at least 10 digits";
    if (!formData.location.trim())
      newErrors.location = "Location is required";
    if (!formData.services) newErrors.services = "Please select a service";
    if (!formData.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setFormData(initialState);
      setLoading(false);
      router.push("/thankyou");
    }, 2000);
  };

  return (
    <main
      className={`transition-colors duration-300 ${
        theme === "light" ? "text-[#3A3A3A]" : "text-white"
      }`}
    >
      <div
        className={`w-full max-w-[650px] mx-auto ${
          theme === "light" ? "bg-white" : "bg-[#111]"
        } md:p-2 shadow-lg`}
      >
        <div className="md:p-6 p-2">
          {/* Header */}
          <div
            className={`text-center mb-6 ${
              theme === "light" ? "bg-white" : "bg-[#111]"
            } p-2`}
          >
            <h2
              className={`md:text-2xl text-[20px] mb-1 font-bold ${
                theme === "light" ? "text-[#222]" : "text-white"
              }`}
            >
              Get a Free Consultation
            </h2>
            <p
              className={`leading-tight ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Fill out the form below and our team will get back to you
              shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inputs */}
            {(
              [
                { name: "name", type: "text", placeholder: "Full Name" },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email Address",
                },
                {
                  name: "phone",
                  type: "tel",
                  placeholder: "Phone Number",
                },
                {
                  name: "location",
                  type: "text",
                  placeholder: "City, Country",
                },
              ] as const
            ).map((field) => (
              <div key={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 ${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-[#1a1a1a] text-white"
                  } ${
                    errors[field.name]
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#4a90e2]"
                  }`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Select */}
            <div>
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 ${
                  theme === "light"
                    ? "bg-white text-black"
                    : "bg-[#1a1a1a] text-white"
                } ${
                  errors.services
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#4a90e2]"
                }`}
              >
                <option value="" disabled>
                  Service you’re interested in
                </option>
                <option value="web-development">Web Development</option>
                <option value="mobile-apps">Mobile Apps</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="other">Other</option>
              </select>
              {errors.services && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.services}
                </p>
              )}
            </div>

            {/* Textarea */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 ${
                  theme === "light"
                    ? "bg-white text-black"
                    : "bg-[#1a1a1a] text-white"
                } ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#4a90e2]"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              fullWidth
              className="mt-6"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SupportForm;
