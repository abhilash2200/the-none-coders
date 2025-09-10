"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaYoutube, FaFacebook } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "SOLUTIONS",
    links: [
      { label: "CRM Development", href: "/solution" },
      { label: "Mobile App Development", href: "/solution" },
      { label: "OTT Platform Development", href: "/solution" },
      { label: "Artificial Intelligence", href: "/solution" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Web Development", href: "/products/app-development" },
      { label: "UI/UX Design", href: "/products/app-development" },
      { label: "Cloud Solutions", href: "/products/app-development" },
      { label: "E-commerce Development", href: "/products/app-development" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/career" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/updates" },
    ],
  },
];

const socialIcons = [
  { icon: FaGoogle, alt: "Google", href: "/" },
  { icon: FaYoutube, alt: "YouTube", href: "/" },
  { icon: FaFacebook, alt: "Facebook", href: "/" },
];

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`pt-12 transition-colors duration-300 ${
        theme === "light" ? "bg-[#FAFAFA] text-[#3A3A3A]" : "bg-[#222] text-white"
      }`}
    >
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap gap-y-4">
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              className="w-full md:w-[50%] lg:w-[33.33%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <motion.h3
                className="text-[22px] font-bold mb-3 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {section.title}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] bg-[#19d442] w-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h3>

              <ul>
                {section.links.map((link, i) => (
                  <li key={i} className="py-2">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block"
                    >
                      <Link
                        className="text-[16px] hover:text-[#19d442] transition-colors duration-300"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Bottom Section */}
          <div className="w-full border-t border-[#414141] py-8">
            <div className="flex flex-wrap gap-y-3 items-center">
              {/* Privacy + Terms */}
              <motion.div
                className="w-full lg:w-[33.33%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center md:justify-start items-center gap-x-2">
                  <p>
                    <Link
                      className="text-[15px] hover:text-[#19d442] transition-colors duration-300"
                      href="/privacy-policy"
                    >
                      PRIVACY POLICY
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="text-[15px] hover:text-[#19d442] transition-colors duration-300"
                      href="/terms-conditions"
                    >
                      TERMS & CONDITIONS
                    </Link>
                  </p>
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="w-full lg:w-[33.33%]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ul className="flex items-center gap-x-5 justify-center lg:justify-start">
                  {socialIcons.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link href={item.href}>
                          <Icon className="w-6 h-6 hover:text-[#19d442]" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Copyright */}
              <motion.div
                className="w-full lg:w-[33.33%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-[18px] text-center lg:text-left">
                  COPYRIGHT © THE NON-CODERS
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
