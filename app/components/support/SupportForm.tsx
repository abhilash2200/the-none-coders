"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    name: string;
    email: string;
    phone: string;
    location: string;
    services: string;
    message: string;
}

function SupportForm() {
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation
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
            router.push("/thank-you");
        }, 2000);
    };

    return (
        <div className="w-full max-w-[650px] mx-auto bg-white rounded-[5px] p-2 shadow-[5px]">
            <div className="border border-gray-500 p-6 rounded-[5px]">
                <div className="text-center mb-6 bg-gray-200 p-2">
                    <h2 className="text-2xl mb-1 font-bold text-[#14053b]">
                        Get a Free Consultation
                    </h2>
                    <p className="text-gray-600">
                        Fill out the form below and our team will get back to you shortly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full rounded-[5px] border px-3 py-2 focus:outline-none focus:ring-1 ${errors.name
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-[#150e27]"
                                }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full rounded-[5px] border px-3 py-2 focus:outline-none focus:ring-1 ${errors.email
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-[#150e27]"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full rounded-[5px] border px-3 py-2 focus:outline-none focus:ring-1 ${errors.phone
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-[#150e27]"
                                }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="City, Country"
                            className={`w-full rounded-[5px] border px-3 py-2 focus:outline-none focus:ring-1 ${errors.location
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-[#150e27]"
                                }`}
                        />
                        {errors.location && (
                            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                        )}
                    </div>
                    <div>
                        <select
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            className={`w-full rounded-[5px] border px-3 py-2 focus:outline-none focus:ring-1 ${errors.services
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-[#150e27]"
                                }`}
                        >
                            <option value="" disabled>Service you’re interested in</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-apps">Mobile Apps</option>
                            <option value="ui-ux">UI/UX Design</option>
                            <option value="cloud">Cloud Solutions</option>
                            <option value="ai-ml">AI & Machine Learning</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.services && (
                            <p className="text-red-500 text-xs mt-1">{errors.services}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full rounded-[5px] border px-3 py-2 focus:outline-none focus:ring-1 ${errors.message
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-[#150e27]"
                                }`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full bg-[#0f0430] text-white font-medium py-2 rounded-[5px] hover:bg-[#2D176A] transition flex justify-center items-center"
                    >
                        {loading ? (
                            <span className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SupportForm;
