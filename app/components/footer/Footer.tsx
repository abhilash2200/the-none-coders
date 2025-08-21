"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            { label: "CRM Development", href: "/" },
            { label: "Mobile App Development", href: "/" },
            { label: "OTT Platform Development", href: "/" },
            { label: "Artificial Intelligence", href: "/" },
        ],
    },
    {
        title: "SERVICES",
        links: [
            { label: "Web Development", href: "/" },
            { label: "UI/UX Design", href: "/" },
            { label: "Cloud Solutions", href: "/" },
            { label: "E-commerce Development", href: "/" },
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
    { src: "/assets/icons/google.svg", alt: "Google", href: "/" },
    { src: "/assets/icons/youtube.svg", alt: "YouTube", href: "/" },
    { src: "/assets/icons/facebook.svg", alt: "Facebook", href: "/" },
];

function Footer() {
    return (
        <footer className="bg-[#FAFAFA] pt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-y-4">
                    {footerSections.map((section, idx) => (
                        <div key={idx} className="w-full md:w-[50%] lg:w-[33.33%]">
                            <div>
                                <h3 className="text-[24px] font-bold mb-3">{section.title}</h3>
                                <ul>
                                    {section.links.map((link, i) => (
                                        <li key={i} className="py-2">
                                            <Link
                                                className="text-[18px] text-[/3A3A3A] hover:text-[#19d442] transition-colors duration-300"
                                                href={link.href}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="w-full border-t border-[#414141] py-8">
                        <div className="flex flex-wrap gap-y-5">
                            {/* Privacy + Terms */}
                            <div className="w-full lg:w-[33.33%]">
                                <ul className="md:flex items-center gap-x-3">
                                    <li>
                                        <Link
                                            className="text-[15px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300"
                                            href="/privacy-policy"
                                        >
                                            PRIVACY POLICY
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-[15px] text-[#3A3A3A] hover:text-[#19d442] transition-colors duration-300"
                                            href="/terms-conditions"
                                        >
                                            TERMS & CONDITIONS
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-[33.33%]">
                                <ul className="flex items-center gap-x-5">
                                    {socialIcons.map((icon, i) => (
                                        <li key={i}>
                                            <Link href={icon.href}>
                                                <Image
                                                    src={icon.src}
                                                    alt={icon.alt}
                                                    width={25}
                                                    height={25}
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full lg:w-[33.33%]">
                                <p className="text-[18px] text-center lg:text-left">
                                    COPYRIGHT © THE NON-CODERS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
