// import Image from "next/image";
// import medworkLogo from "@assets/medwork-logo.png";
import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import CompanyInfo from "./companyInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Footer() {
  return (
    <footer className={`${inter.variable} flex flex-col w-full bg-gradient-to-l from-sky-700 to-sky-900 shadow-sm font-sans justify-between items-center`}>
      <div className="flex flex-col gap-2 w-full max-w-xl text-left py-48">
        <Logo />
        <CompanyInfo align="left" />
      </div>
      <div className="flex justify-between gap-2 w-full px-24 pb-8">
        <span className="text-sm text-cyan-400">
          © Copyright 2005 - {new Date().getFullYear()} Medwork. All Rights Reserved. | Made by{" "}
          <a
            href="https://github.com/keybraker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keybraker
          </a>
        </span>
      </div>
    </footer>
  );
}

{/* <>
      <div
        className={`${inter.variable} container sticky bottom-0 z-40 mx-auto flex w-full max-w-[96rem] flex-row justify-between border-t border-gray-300 py-4 px-2 font-sans backdrop-blur-lg xs:items-stretch`}
      >
        <span className="text-sm">
          Medwork &copy; 2005 - {new Date().getFullYear()}. All Rights Reserved.
        </span>
        <span className="text-sm">
          Made by{" "}
          <a
            href="https://github.com/keybraker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keybraker
          </a>
        </span>
      </div>
    </> */}