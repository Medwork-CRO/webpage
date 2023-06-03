// import Image from "next/image";
// import medworkLogo from "@assets/medwork-logo.png";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Footer() {
  return (
    <>
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
    </>
  );
}
