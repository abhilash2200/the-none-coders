"use client";

import BackButton from "@/components/BackButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [bubbles, setBubbles] = useState<
    { top: string; left: string; width: string; height: string }[]
  >([]);

  useEffect(() => {
    // random bubble positions generate only on client
    const generated = [...Array(5)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 300 + 100}px`,
      height: `${Math.random() * 300 + 100}px`,
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {bubbles.map((style, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-50"
            style={style}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#ffffff] shadow-2xl rounded-2xl p-8 md:p-10 max-w-md w-full border border-gray-100 overflow-hidden"
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
          <div className="absolute -top-12 -left-12 w-24 h-24 rotate-45 bg-gradient-to-r from-gray-500 to-gray-600 opacity-10"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
          <div className="absolute -bottom-12 -right-12 w-24 h-24 rotate-45 bg-gradient-to-r from-gray-500 to-gray-600 opacity-10"></div>
        </div>

        {/* Animated checkmark icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Image
              src="/assets/img/success.gif"
              width={140}
              height={140}
              alt="success"
              className="rounded-full shadow-md border-4 border-white"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl text-center font-bold text-gray-900 mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          We&apos;ve received your submission and truly appreciate you taking the
          time to share with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100"
        >
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 
                   11-2 0 1 1 0 012 0zM9 9a1 1 0 
                   000 2v3a1 1 0 001 1h1a1 1 0 
                   100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-gray-800">
              Our team will review your information and get back to you within
              24-48 hours. You&apos;ll receive a confirmation email shortly.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/">
            <BackButton />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-100"
        >
          <p className="text-xs text-gray-500">
            Need immediate assistance?{" "}
            <a
              href="mailto:support@company.com"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
