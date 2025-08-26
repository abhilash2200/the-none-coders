"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <main className="min-h-[55vh] flex flex-col items-center justify-center bg-[#e9e9e9] text-center px-6">

      <Image src="/assets/img/404.gif" height={700} width={440} alt="Page not found animation" />

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="px-6 py-3 text-lg font-semibold rounded-2xl shadow-md 
                     bg-gradient-to-r from-purple-600 to-indigo-600 
                     text-white hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </main>
  );
}
