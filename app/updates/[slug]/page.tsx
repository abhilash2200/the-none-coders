import { updatesList, type UpdateListItem } from "../../data/updatesList";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TerminalIcon from '@mui/icons-material/Terminal';

// Dynamic import for details
async function getUpdate(slug: string) {
    try {
        await new Promise((res) => setTimeout(res, 1000));
        const update = await import(`../../data/updates/${slug}`);
        return update.default;
    } catch {
        return null;
    }
}

// SEO Meta
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const update = await getUpdate(slug);
    if (!update) return {};

    return {
        title: update.metaTitle,
        description: update.metaDescription,
        alternates: {
            canonical: update.canonical,
        },
    };
}

export default async function UpdateDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const listItem = updatesList.find((u: UpdateListItem) => u.slug === slug);
    const update = await getUpdate(slug);

    if (!listItem || !update) return notFound();

    return (
        <main className="max-w-full w-[900px] mx-auto py-10 px-4">
            <Image
                src={listItem.image}
                alt={listItem.title}
                width={900}
                height={400}
                className="rounded-md mb-4"
            />
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-500 text-sm inline-flex justify-center items-center gap-x-1">
                    <TerminalIcon /> <span className="text-gray-800 font-medium">{listItem.info}</span>
                </p>
                <p className="text-gray-500 text-sm inline-flex justify-center items-center gap-x-1">
                    <CalendarMonthOutlinedIcon /> <span className="text-gray-800 font-medium">{listItem.date}</span>
                </p>
            </div>
            <h1 className="md:text-[30px] text-[25px] font-bold mb-6 leading-tight">{listItem.title}</h1>
            <article
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: update.content }}
            />
        </main>
    );
}
