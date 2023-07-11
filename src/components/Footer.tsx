import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import { Inter } from "@next/font/google";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Link from "next/link";
import { AboutUs, Careers, People, Services } from "./HeaderLinks";

const mail = "medworkinfo@medwork.gr";
const address = "Greece, Chiou 5, Argyroupoli 164 52";
const linkedin = "company/medwork";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function CompanyInfo() {
  return (
    <div className="flex-start flex flex-row items-start justify-start gap-4 align-middle">
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={"http://maps.google.com/?q=" + address}
      >
        <MdLocationOn className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={"mailto:" + mail}
      >
        <MdEmail className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={"https://www.linkedin.com/in/" + linkedin}
      >
        <FaLinkedin className="antialiased" size={"20px"} />
      </a>
    </div>
  );
}

function CompanyFooter() {
  return (
    <div className="relative">
      <div className="flex flex-col justify-start gap-2 border-t border-white pb-8 pt-4 text-sm xs:flex-row">
        <span className="text-cyan-400">
          © Copyright {new Date().getFullYear()} Medwork -
        </span>
        <span className="flex gap-2">
          <span className="text-[#f6f1eb] dark:text-gray-300">All Rights Reserved</span>
          <span className="text-cyan-400">|</span>
          <span className="text-[#f6f1eb] dark:text-gray-300">
            Made by{" "}
            <a
            className="underline font-semibold"
              href="https://github.com/keybraker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keybraker
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={`${inter.variable} w-full flex justify-center bg-gradient-to-l from-cyan-500 to-cyan-800 px-4 sm:px-8 font-sans dark:from-cyan-600 dark:to-cyan-900`}
    >
      <div className="flex w-full max-w-[86rem] flex-col">
        <div className="flex flex-col justify-between gap-8 py-16 md:flex-row">
          <div className="flex flex-col gap-6">
            <Logo />
            <span
              className={
                "max-w-sm whitespace-pre-line text-left text-xl text-cyan-400"
              }
            >
              Medwork is a Contract Research Organization (CRO) operating in
              Southeast Europe, which since 2005 offers a wide range of
              specialized services to the pharmaceutical and medical device
              industries
            </span>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left text-[#f6f1eb] dark:text-gray-300">
            <span className="text-xl font-semibold text-[#f6f1eb] dark:text-gray-300">SERVICES</span>
            <div className="text-md flex flex-col gap-2 text-cyan-400">
              {Services.subCategories.map((service, i) => (
                <Link
                  aria-label={`By clicking you will be taken to ${service.label}`}
                  key={i}
                  href={service.href}
                >
                  <span className="flex items-center hover:text-cyan-500">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left text-[#f6f1eb] dark:text-gray-300">
            <span className="text-xl font-semibold text-[#f6f1eb] dark:text-gray-300">ABOUT</span>
            <div className="text-md flex flex-col gap-2 text-cyan-400">
              {[AboutUs, People, Careers].map((a, i) => (
                <Link
                  aria-label={`By clicking you will be taken to ${a.label}`}
                  key={i}
                  href={a.href}
                >
                  <span className="flex items-center hover:text-cyan-500">
                    {a.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left text-[#f6f1eb] dark:text-gray-300">
            <span className="text-xl font-semibold text-[#f6f1eb] dark:text-gray-300">
              CONTACT INFO
            </span>
            <div className="text-md flex flex-col gap-2 text-cyan-400">
              <span>{mail}</span>
              <span>{address}</span>
            </div>
            <RoundedButton label="GET IN TOUCH" href="/contact-us"/>
            <CompanyInfo />
          </div>
        </div>
        <CompanyFooter />
        {/* <div className="absolute hidden overflow-hidden lg:block ">
          <div className="relative bottom-[-175px] select-none overflow-hidden text-[375px] leading-[490px] opacity-5">
            forward
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
