import Link from "next/link";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";

interface expertiseDataProps {
    title: string;
    img: string;
    desc: string;
    href: string;
}

function Updatecard({ title, img, desc, href }: expertiseDataProps) {
    return (
        <div className="flex flex-wrap gap-y-4">
            <div className="px-1.5">
                <Image
                    className="w-full h-auto"
                    src={img}
                    alt={title}
                    width={405}
                    height={250}
                />
                <h3 className="my-3 text-[22px] leading-tight">
                    {title}
                </h3>
                <p className="text-gray-600 text-[15px]">{desc}</p>

                <div className="mt-3">
                    <Link href={href}>
                        <ArrowButton />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Updatecard;
