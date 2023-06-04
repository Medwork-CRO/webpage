import { Inter } from "@next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

type CardProps = {
    imageData: StaticImageData;
    imageTitle: string;
    imageDescription: string;
    readMoreLink: string;
}

export default function Card({
    imageData,
    imageTitle,
    imageDescription,
    readMoreLink,
}: CardProps) {
    return (
        <div className="flex flex-col justify-between h-[32rem] w-[24rem] rounded-xl bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-4">
                <Image
                    className="h-24 rounded-xl object-none"
                    src={imageData}
                    alt={imageTitle}
                />
                <p className="text-5xl md:text-2xl text-gray-900">
                    {imageTitle}
                </p>
                <p className="text-xl md:text-md text-gray-600">
                    {imageDescription}
                </p>
            </div>
            <Link
                className="text-1xl md:text-sm text-gray-900"
                aria-label="By clicking you will be taken to Home"
                href={readMoreLink}
            >
                <button className="rounded-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 px-3 py-2 text-white">READ MORE</button>
            </Link >
        </div>
    );
};

/* <div className="relative">
<Image
className="h-96 rounded-xl object-none"
src={imageData}
alt={imageTitle}
/>
<span className="absolute top-1/3 left-2 text-5xl md:text-2xl font-bold text-left text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageTitle}
</span>
<p className="absolute top-2/3 left-2 w-full text-lg md:text-base text-white p-2 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageDescription}
</p>
</div> */