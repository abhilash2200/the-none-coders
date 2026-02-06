'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeadingText from '../components/HeadingText';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const sections = [
    {
        title: '1. Acceptance of Terms',
        content: 'By accessing or using the services provided by The Non-Coders, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.'
    },
    {
        title: '2. Description of Service',
        content: 'The Non-Coders provides digital technology solutions, including but not limited to software development, CRM systems, mobile applications, and AI integrations. We reserve the right to modify or discontinue any service with or without notice.'
    },
    {
        title: '3. Intellectual Property Rights',
        content: 'Unless otherwise stated, The Non-Coders and/or its licensors own the intellectual property rights for all material on our website and delivered as part of our services. All intellectual property rights are reserved. You may access this from The Non-Coders for your own personal or business use subjected to restrictions set in these terms.'
    },
    {
        title: '4. User Obligations',
        content: 'You agree not to:\n• Use our services for any unauthorized or illegal purpose.\n• Attempt to gain unauthorized access to our systems or networks.\n• Reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.'
    },
    {
        title: '5. Limitation of Liability',
        content: 'In no event shall The Non-Coders, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract. The Non-Coders shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.'
    },
    {
        title: '6. Indemnification',
        content: 'You hereby indemnify to the fullest extent The Non-Coders from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.'
    },
    {
        title: '7. Severability',
        content: 'If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.'
    },
    {
        title: '8. Variation of Terms',
        content: 'The Non-Coders is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.'
    },
    {
        title: '9. Governing Law & Jurisdiction',
        content: 'These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which The Non-Coders operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.'
    }
];

export default function TermsConditions() {
    return (
        <main
            className="pt-24 min-h-screen transition-colors duration-300 pb-20"
            style={{
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-foreground)',
            }}
        >
            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-b from-transparent to-[var(--color-backgroundSecondary)]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <HeadingText heading="TERMS & CONDITIONS" textalign="text-center" />
                        <p className="mt-4 text-lg opacity-80">
                            Last Updated: February 6, 2026
                        </p>
                        <div
                            className="mt-6 h-1 w-24 mx-auto"
                            style={{ backgroundColor: 'var(--color-brand)' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="prose prose-lg max-w-none"
                                >
                                    <h3
                                        className="text-2xl font-bold mb-4"
                                        style={{ color: 'var(--color-foregroundSecondary)' }}
                                    >
                                        {section.title}
                                    </h3>
                                    <div
                                        className="text-base leading-relaxed whitespace-pre-line opacity-90"
                                        style={{ color: 'var(--color-foreground)' }}
                                    >
                                        {section.content}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-20 p-8 rounded-2xl border text-center"
                            style={{
                                borderColor: 'var(--color-border)',
                                backgroundColor: 'var(--color-backgroundSecondary)'
                            }}
                        >
                            <p className="text-lg italic opacity-70">
                                "Transparency and clarity are the foundation of our partnership."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
