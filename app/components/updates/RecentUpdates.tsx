"use client";

import React, { useEffect, useState } from "react";
import { updatesList, type UpdateListItem } from "../../data/updatesList";
import Image from "next/image";
import Link from "next/link";

const RecentUpdates = () => {
    const [updates, setUpdates] = useState<UpdateListItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ---- API call ko filhaal comment kiya ----
        // const fetchUpdates = async () => {
        //   try {
        //     const res = await fetch("/api/updates");
        //     const data = await res.json();
        //     setUpdates(data.slice(0, 5));
        //   } catch (error) {
        //     console.error("Error fetching updates:", error);
        //   } finally {
        //     setLoading(false);
        //   }
        // };
        // fetchUpdates();

        // ---- Filhaal local data se updates load karenge ----
        const timer = setTimeout(() => {
            setUpdates(updatesList.slice(0, 5)); // sirf latest 5 updates
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading updates...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
            <ul className="space-y-4">
                {updates.map((update) => (
                    <li
                        key={update.slug}
                        className="border-b pb-2 flex gap-2 items-center hover:bg-gray-20 transition rounded-md"
                    >
                        <Link href={`/blog/${update.slug}`} className="flex gap-2 items-center w-full">
                            <div>
                                <Image
                                    src={update.image}
                                    alt={update.title}
                                    width={300}
                                    height={300}
                                    className="w-[120px] h-[80px] object-cover rounded"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold line-clamp-1">{update.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{update.description}</p>
                                <span className="text-xs text-gray-400">{update.date}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentUpdates;
