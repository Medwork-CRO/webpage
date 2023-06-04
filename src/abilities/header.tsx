import { Inter } from "@next/font/google";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Athens - 16452";
const linkedin = "https://www.linkedin.com/in/" + "company/medwork";

import Logo from "@/components/Logo";
import { useState } from "react";

function Tab({ label, href }: { label: string, href: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link
      className={`whitespace-nowrap ${isActive ? "text-blue-500" : ""}`}
      aria-label={`By clicking you will be taken to ${label}`}
      href={href}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {label}
    </Link>
  );
}

function Tabs() {
  const tabs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="flex justify-end items-center">
      <div
        className={`${inter.variable} flex-start flex flex-row items-end justify-start gap-10 align-middle font-sans`}
      >
        {tabs.map((tab) => (
          <Tab key={tab.href} label={tab.label} href={tab.href} />
        ))}
      </div>
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
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex justify-between items-center w-full max-w-[86em] px-4 py-8 mx-auto">
        <Logo />
        <Tabs />
      </div>
    </header>
  );
}


