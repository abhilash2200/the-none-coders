import Link from "next/link";
import Image from "next/image";
import CircleButton from "./CircleButton";
import { useTheme } from "../context/ThemeContext";

interface expertiseDataProps {
    title: string;
    img: string;
    desc: string;
    href: string;
}

function Updatecard({ title, img, desc, href }: expertiseDataProps) {
    const {theme} = useTheme()
    return (
        <div className="flex flex-wrap gap-y-4">
            <div className="px-1.5">
                <Image
                    className="w-full md:h-[320px] h-auto"
                    src={img}
                    alt={title}
                    width={405}
                    height={250}
                />
                <h3 className="my-3 text-[22px] leading-tight">
                    {title}
                </h3>
                <p className={`${theme === "light" ? "text-gray-600" : "text-gray-200"} text-[15px]`}>{desc}</p>

                <div className="mt-3">
                    <Link href={href}>
                        <CircleButton />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Updatecard;
