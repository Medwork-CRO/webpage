import medworkLogo from "@assets/medwork-logo.png";
import { Inter } from "@next/font/google";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Roboto } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

type Props = PropsWithChildren &
  EmblaOptionsType & { color?: "text-white" | "text-black" | "text-cyan-600" };

function Logo({ children, color = "text-black", ...options }: Props) {
    return (
        <Link
            className="flex items-center gap-4"
            aria-label="By clicking you will be taken to Home"
            href="/"
        >
            <Image src={medworkLogo} alt="Medwork Logo" width={46} />
            <div className={`${roboto.className} font-sans text-3xl ${color}`} style={{ fontStyle: 'italic' }}>
                Medwork
            </div>
        </Link>
    );
}

export default Logo;
