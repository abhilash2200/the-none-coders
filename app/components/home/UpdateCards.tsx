"use client";

import { motion } from "framer-motion";
import React from "react";
import "@splidejs/react-splide/css";
import HeadingText from "../HeadingText";
import Updatecard from "../Updatecard";

interface Update {
    title: string;
    img: string;
    desc: string;
    href: string;
}

const update: Update[] = [
    {
        title: 'Mobile App Development: Creating Dreams in Ones Hand',
        img: '/assets/img/bg-gray.jpg',
        desc: "A mobile app is not an icon on a phone. It is a connector between individuals and the things they cherish.",
        href: '/updates/mobile-app-development-creating-dreams-in-ones-hand'
    },
    {
        title: 'OTT Platform Development: Keeping Entertainment Even Closer Than Before',
        img: '/assets/img/bg-gray.jpg',
        desc: "OTT stands for Over-The-Top. It's a service that streams videos, movies, music, or live events over the internet. No satellite.",
        href: '/updates/ott-platform-development-keeping-entertainment-even-closer-than-before'
    },
    {
        title: 'CRM Development: The Pulse of Successful Growing Businesses',
        img: '/assets/img/bg-gray.jpg',
        desc: "CRM stands for Customer Relationship Management. In other words, it is software that stores all customer information in one location.",
        href: '/updates/crm-development-the-pulse-of-successful-growing-businesses'
    },
];

export function UpdateCards() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative container mx-auto px-4 py-10"
        >
            <div className="mb-6 lg:mb-10">
                <HeadingText textalign="text-center" heading="UPDATES" />
            </div>

            <div className="flex flex-wrap gap-y-6">
                {update.map((ele, i) => (
                    <div key={i} className="w-full md:w-[50%] lg:w-[33.33%]">
                        <Updatecard
                            title={ele.title}
                            img={ele.img}
                            desc={ele.desc}
                            href={ele.href}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
