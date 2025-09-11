"use client";
import { useEffect } from "react";
import Image from "next/image";
import HeadingText from "../components/HeadingText";
import SupportForm from "../components/support/SupportForm";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Page() {
    const { theme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main
            className={`transition-colors duration-300 ${theme === "light"
                    ? "bg-[#FFF] text-[#3A3A3A]"
                    : "bg-[#111] text-white"
                }`}
        >
            {/* Top Section */}
            <section
                className={`py-6 lg:py-20 lg:pb-30 ${theme === "light" ? "bg-[#FAFAFA]" : "bg-[#222]"
                    } bgclipPath`}
            >
                <div className="container mx-auto px-4">
                    <HeadingText textalign="text-start" heading="SUPPORT" />
                    <div className="flex flex-wrap gap-y-4">
                        <div className="w-full lg:w-[50%] flex flex-col justify-center">
                            <p
                                className={`md:text-[19px] text-[18px] mt-3 md:mt-0 ${theme === "light" ? "text-[#414141]" : "text-gray-300"
                                    }`}
                            >
                                Fill out the form, and a Non Coders team member will reach out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact + Form Section */}
            <section className="relative mt-[-100px]">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/assets/img/supportbg.jpg"
                        alt="Support Background"
                        fill
                        className="object-cover object-center opacity-5"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between gap-y-8 gap-x-2">
                        {/* Contact Info */}
                        <div className="w-full md:w-[49%] md:mt-[50px] mt-[120px] md:p-6 flex flex-col gap-y-4 justify-center">
                            <div className="md:mb-8 mb-3">
                                <h2
                                    className={`text-[20px] capitalize font-semibold underline underline-offset-5 pb-1 mb-3 ${theme === "light" ? "text-gray-900" : "text-white"
                                        }`}
                                >
                                    contact us
                                </h2>
                                <p
                                    className={`md:text-[19px] text-[18px] leading-relaxed ${theme === "light" ? "text-[#414141]" : "text-gray-300"
                                        }`}
                                >
                                    We at Non Coders are always here to listen, help, and guide you and your business. Whether it’s a query, idea, or partnership, reach out today. Together, let’s build solutions that matter and create stories of growth.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 gap-y-4">
                                {/* Contact details */}
                                <div className="w-full md:w-[49%] border-r md:border-gray-300 pr-3">
                                    <h2
                                        className={`text-[18px] capitalize font-semibold underline underline-offset-5 pb-1 mb-3 ${theme === "light" ? "text-gray-900" : "text-white"
                                            }`}
                                    >
                                        Get in touch with us:
                                    </h2>
                                    <div className="flex flex-col gap-y-2">
                                        <div
                                            className={`flex items-center space-x-3 ${theme === "light" ? "text-gray-700" : "text-gray-300"
                                                }`}
                                        >
                                            <Phone className="w-5 h-5 text-[#477951]" />
                                            <a
                                                href="tel:+918250054478"
                                                className="md:text-lg text-md hover:underline"
                                            >
                                                +91 82500 54478
                                            </a>
                                        </div>
                                        <div
                                            className={`flex items-center space-x-3 ${theme === "light" ? "text-gray-700" : "text-gray-300"
                                                }`}
                                        >
                                            <Mail className="w-5 h-5 text-[#477951]" />
                                            <a
                                                href="mailto:marketing@digitalwolf.co.in"
                                                className="md:text-lg text-md hover:underline"
                                            >
                                                marketing@digitalwolf.co.in
                                            </a>
                                        </div>
                                        <div
                                            className={`flex items-center space-x-3 ${theme === "light" ? "text-gray-700" : "text-gray-300"
                                                }`}
                                        >
                                            <MapPin className="w-5 h-5 text-[#477951] mt-1" />
                                            <p className="md:text-lg text-md leading-relaxed">
                                                Kolkata, West Bengal 700045.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Support Ticket */}
                                <div className="w-full md:w-[49%]">
                                    <h2
                                        className={`text-[18px] capitalize font-semibold underline underline-offset-5 pb-1 mb-3 ${theme === "light" ? "text-gray-900" : "text-white"
                                            }`}
                                    >
                                        For more queries:
                                    </h2>
                                    <div className="flex flex-col">
                                        <div
                                            className={`flex items-center space-x-3 group ${theme === "light" ? "text-gray-700" : "text-gray-300"
                                                }`}
                                        >
                                            <Mail className="w-5 h-5 text-[#477951]" />
                                            <a
                                                href="https://calendly.com/digitalwolf/support"
                                                className="md:text-lg text-md hover:underline flex items-center gap-2"
                                            >
                                                Open A Support Ticket{" "}
                                                <ArrowRight className="w-5 h-5 group-hover:text-[#477951] group-hover:translate-x-1 duration-300" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Form */}
                        <div className="w-full md:w-[50%]">
                            <SupportForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pt-6 lg:pt-12">
                <div className="w-full h-[400px] lg:h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117952.13759888086!2d88.27976137887296!3d22.50402184753325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a027125f0b85a61%3A0xe9d5ef4252915a51!2s22%2F263%2C%20Jodhpur%20Park%2C%20Tagore%20Park%20Road%2C%20Kolkata%2C%20West%20Bengal%20700045!3m2!1d22.5040428!2d88.362163!5e0!3m2!1sen!2sin!4v1756370244597!5m2!1sen!2sin"
                        className="w-full h-full border-0 rounded-xl shadow-md"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}

export default Page;
