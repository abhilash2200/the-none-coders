"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const UpdatesForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }
        if (!formData.service.trim())
            newErrors.service = "Please select a service";
        return newErrors;
    };
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);

        
        setTimeout(() => {
            console.log("Form Data Submitted:", formData);

            // form reset
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });

            setSubmitting(false);

            
            router.push("/thank-you");
        }, 2000);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6">
            <h2 className="text-center text-xl font-bold mb-2">
                Get a Free Consultation
            </h2>
            <p className="text-center text-gray-500 mb-6">
                Fill out the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                </div>

                <div>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Service you’re interested in</option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="seo">SEO Services</option>
                        <option value="design">UI/UX Design</option>
                    </select>
                    {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                    )}
                </div>

                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    rows={4}
                />

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={submitting}
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default UpdatesForm;
