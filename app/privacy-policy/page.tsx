'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeadingText from '../components/HeadingText';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const sections = [
    {
        title: '1. Introduction',
        content: 'Welcome to The Non-Coders. We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you visit our website or use our services.'
    },
    {
        title: '2. Information We Collect',
        content: 'We collect information you provide directly to us when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide to help us better serve you.'
    },
    {
        title: '3. How We Use Your Information',
        content: 'We use the information we collect to:\n• Provide, maintain, and improve our services and website functionality.\n• Respond to your comments, questions, inquiries, and provide customer support.\n• Send you technical notices, updates, security alerts, and administrative messages.\n• Communicate with you about products, services, offers, and events that we believe will be of interest to you.'
    },
    {
        title: '4. Information Sharing and Disclosure',
        content: 'We do not share your personal information with third parties except in the following circumstances:\n• With your explicit consent to share the information.\n• To comply with legal obligations, such as a subpoena or court order.\n• To protect and defend the rights or property of The Non-Coders.\n• With service providers who perform services on our behalf and are bound by confidentiality agreements.'
    },
    {
        title: '5. Data Security',
        content: 'We take reasonable measures, including administrative, technical, and physical safeguards, to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.'
    },
    {
        title: '6. Cookies and Tracking Technologies',
        content: 'We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
    },
    {
        title: '7. Your Data Protection Rights',
        content: 'Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the personal information we have collected about you. If you wish to exercise any of these rights, please contact us.'
    },
    {
        title: '8. Changes to This Privacy Policy',
        content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.'
    },
    {
        title: '9. Contact Us',
        content: 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:\nEmail: support@thenoncoders.com\nWebsite: www.thenoncoders.com'
    }
];

export default function PrivacyPolicy() {
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
                        <HeadingText heading="PRIVACY POLICY" textalign="text-center" />
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
                                "We value your trust and are committed to being transparent about how we handle your data."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
