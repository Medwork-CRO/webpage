import medworkLogo from "@assets/medwork-logo.png";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
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
        className={`font-sans font-thin narrow-letters leading-relaxed text-3xl text-medwork-brown dark:text-medwork-light`}
      >
        MEDWORK
      </div>
    </Link>
  );
}

export default Logo;
