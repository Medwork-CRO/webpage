import medworkLogo from "@assets/medwork-logo.png";
import { Inter } from "@next/font/google";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

type Props = PropsWithChildren & EmblaOptionsType & { color?: "text-white" | "text-black" | "text-cyan-400" };

function Logo({ children, color = "text-black", ...options }: Props) {
    return (
        <Link
            className="flex items-center gap-4"
            aria-label="By clicking you will be taken to Home"
            href="/"
        >
            <Image src={medworkLogo} alt="Medwork Logo" width={46} />
            <div className={`${inter.variable} font-sans text-3xl ${color}`}>
                Medwork
            </div>
        </Link >
    );
};

export default Logo;