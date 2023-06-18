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
  EmblaOptionsType & { colour?: "text-white" | "text-black" | "text-cyan-500" };

function Logo({ children, colour: colour = "text-black", ...options }: Props) {
  const colourToDisplay =
    colour === "text-black"
      ? "text-[#2d333b] dark:text-[#f6f1eb]"
      : colour === "text-white"
      ? "dark:text-[#2d333b] text-[#f6f1eb]"
      : "text-cyan-600";
  return (
    <Link
      className="flex items-center gap-4"
      aria-label="By clicking you will be taken to Home"
      href="/"
    >
      <Image src={medworkLogo} alt="Medwork Logo" width={46} />
      <div
        className={`${roboto.className} font-sans text-3xl ${colourToDisplay}`}
        style={{ fontStyle: "italic" }}
      >
        Medwork
      </div>
    </Link>
  );
}

export default Logo;
