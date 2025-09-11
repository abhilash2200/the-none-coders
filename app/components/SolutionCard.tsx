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

function SolutionCard({ title, img, desc, href }: expertiseDataProps) {
  const {theme} = useTheme()
  return (
    <div className="max-w-full lg:w-[250px] xl:w-[300px] mx-auto py-6">
      <div className="relative">
        <Image
          className="w-full h-auto"
          src={img}
          alt={title}
          width={250}
          height={250}
        />
        <h3 className="absolute bottom-0 left-0 text-[24px] text-white ps-6 pe-12 lg:pe-22 pb-3">
          {title}
        </h3>
      </div>

      <div className="mt-5">
        <p className={`${theme === "light" ? "text-gray-600" : "text-gray-200"} text-[15px]`}>{desc}</p>
      </div>

      <div className="mt-3">
        <Link href={href}>
          <CircleButton />
        </Link>
      </div>
    </div>
  );
}

export default SolutionCard;
