import medworkLogo from "@assets/medworkLogo.png";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Athens - 16452";
const linkedin = "https://www.linkedin.com/in/" + "company/medwork";

function Tabs() {
  return (
    <div
      className={`${inter.variable} flex-start flex flex-row items-end justify-start gap-4 align-middle font-sans`}
    >
      <Link
        className="whitespace-nowrap"
        aria-label="By clicking you will be taken to Home"
        href="/"
      >
        Home
      </Link>
      <Link
        className="whitespace-nowrap"
        aria-label="By clicking you will be taken to About Us"
        href="/about-us"
      >
        About Us
      </Link>
      <Link
        className="whitespace-nowrap"
        aria-label="By clicking you will be taken to Services"
        href="/services"
      >
        Services
      </Link>
      <Link
        className="whitespace-nowrap"
        aria-label="By clicking you will be taken to Careers"
        href="/careers"
      >
        Careers
      </Link>
      <Link
        className="whitespace-nowrap"
        aria-label="By clicking you will be taken to Contact Us"
        href="/contact-us"
      >
        Contact Us
      </Link>
    </div>
  );
}

function AboutPageInner() {
  return (
    <div className="flex-start flex flex-row items-end justify-end gap-4 align-middle">
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={address}
      >
        <MdLocationOn className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={mail}
      >
        <MdEmail className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={linkedin}
      >
        <FaLinkedin className="antialiased" size={"20px"} />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="container mx-auto w-full max-w-[96rem] px-2 sticky top-0 z-40 border-b-2 border-grey-200">
      <div className="grid grid-cols-3 content-evenly gap-4 px-2 pt-2 pb-6 backdrop-blur-lg xs:py-4 ">
        <Tabs />
        <div className="font-helvetica flex flex-col items-center justify-center gap-1 text-2xl font-semibold tn:flex-row xs:gap-2">
          <Image src={medworkLogo} alt="Medwork Logo" width={36} />
        </div>
        <AboutPageInner />
      </div>
    </header>
  );
}
