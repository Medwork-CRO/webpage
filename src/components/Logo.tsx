import medworkLogo from "@assets/medwork-logo.png";
import { Inter, Roboto } from "@next/font/google";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

type Props = PropsWithChildren & EmblaOptionsType;

function Logo({ children, ...options }: Props) {
  return (
    <Link
      className="flex items-center gap-4"
      aria-label="By clicking you will be taken to Home"
      href="/"
    >
      <Image src={medworkLogo} alt="Medwork Logo" width={46} />
      <div
        className={`${roboto.className} font-sans text-3xl text-[#919191]`}
        style={{ fontStyle: "italic" }}
      >
        Medwork
      </div>
    </Link>
  );
}

export default Logo;
