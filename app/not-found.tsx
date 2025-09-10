"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#fff] text-[#414141]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center min-h-[80vh]">
          <div className="w-full md:w-[45%] flex flex-col items-start justify-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-5xl font-bold text-[#414141]"
            >
              404 - Page Not Found
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 text-gray-600 text-xl"
            >
              Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10"
            >
              <Link href="/">
                <BackButton />
              </Link>
            </motion.div>
          </div>
          
          <div className="w-full md:w-[50%] mt-10 md:mt-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 scale-90"></div>
              <Image
                src="/assets/img/404.gif"
                height={500}
                width={500}
                alt="Page not found animation"
                className="mx-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-16 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Your Company Name • Explore our <Link href="/" className="text-gray-400 hover:text-white underline">homepage</Link>
          </motion.p>
        </div>
      </div>
    </main>
  );
}