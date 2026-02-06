"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Clock, Mail } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

export default function ComingSoon() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div
            className={`p-6 rounded-full ${
              theme === "light"
                ? "bg-[#f0f0f0]"
                : "bg-[#1a1a1a]"
            }`}
          >
            <Briefcase
              className={`w-16 h-16 ${
                theme === "light" ? "text-[#190849]" : "text-[#4a90e2]"
              }`}
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === "light" ? "text-[#190849]" : "text-white"
          }`}
        >
          Job Listings Coming Soon
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`text-lg md:text-xl mb-8 leading-relaxed ${
            theme === "light" ? "text-[#3A3A3A]" : "text-gray-300"
          }`}
        >
          We're currently preparing exciting career opportunities for you. 
          Check back soon to explore positions that match your skills and passion.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {/* Stay Updated Card */}
          <div
            className={`p-6 rounded-lg border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-[#1a1a1a] border-gray-700"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <Mail
                className={`w-8 h-8 ${
                  theme === "light" ? "text-[#190849]" : "text-[#4a90e2]"
                }`}
              />
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-[#190849]" : "text-white"
              }`}
            >
              Stay Updated
            </h3>
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Subscribe to our newsletter to be notified when new positions are available.
            </p>
          </div>

          {/* Coming Soon Card */}
          <div
            className={`p-6 rounded-lg border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-[#1a1a1a] border-gray-700"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <Clock
                className={`w-8 h-8 ${
                  theme === "light" ? "text-[#190849]" : "text-[#4a90e2]"
                }`}
              />
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-[#190849]" : "text-white"
              }`}
            >
              We're Hiring
            </h3>
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`mt-12 p-6 rounded-lg ${
            theme === "light"
              ? "bg-[#f9f9f9]"
              : "bg-[#1a1a1a]"
          }`}
        >
          <p
            className={`text-base mb-2 ${
              theme === "light" ? "text-[#3A3A3A]" : "text-gray-300"
            }`}
          >
            Have questions or want to send us your resume?
          </p>
          <a
            href="/support"
            className={`inline-block text-base font-semibold hover:underline transition-colors ${
              theme === "light"
                ? "text-[#190849] hover:text-[#4a90e2]"
                : "text-[#4a90e2] hover:text-[#6ba3f0]"
            }`}
          >
            Contact Us →
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
