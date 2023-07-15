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
      <div className="flex flex-col justify-start gap-2 pb-8 pt-4 text-sm xs:flex-row text-gray-400">
        <span>
          © {new Date().getFullYear()} Medwork -
        </span>
        <span className="flex gap-2">
          <span>All Rights Reserved</span>
          <span>|</span>
          <span>
            Made by{" "}
            <a
              className="font-semibold"
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

function WaveSvg() {
  return (
    <div className="absolute bottom-0 left-0 w-full opacity-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#06B6D4" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    // bg-gradient-to-l from-cyan-500 to-cyan-800
    <footer className={`${inter.variable} w-full flex justify-center shadow-sm bg-[#f6f1eb] dark:bg-[#2d333b] px-4 sm:px-6 lg:px-0 font-sans relative`}>
      <WaveSvg />
      <div className="flex w-full max-w-[86rem] flex-col text-[#2d333b] dark:text-[#f6f1eb]">
        <div className="border-t border-[#2d333b] dark:border-[#f6f1eb]">
        </div>
        <div className="flex flex-col justify-between gap-8 py-16 md:flex-row">
          <div className="flex flex-col gap-6">
            <Logo />
            <span
              className={
                "max-w-sm whitespace-pre-line text-left text-xl"
              }
            >
              Medwork is a Contract Research Organization (CRO) operating in
              Southeast Europe, which since 2005 offers a wide range of
              specialized services to the pharmaceutical and medical device
              industries
            </span>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left">
            <span className="text-xl font-semibold">SERVICES</span>
            <div className="text-md flex flex-col gap-2">
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

          <div className="min-w-96 flex flex-col gap-6 text-left">
            <span className="text-xl font-semibold">ABOUT</span>
            <div className="text-md flex flex-col gap-2">
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

          <div className="min-w-96 flex flex-col gap-6 text-left">
            <span className="text-xl font-semibold">
              CONTACT INFO
            </span>
            <div className="text-md flex flex-col gap-2">
              <Link
                href={`mailto:${mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {mail}
              </Link>
              <Link
                href={'https://goo.gl/maps/KDKk5piro9Cb6AXG7'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </Link>
            </div>
            <RoundedButton label="GET IN TOUCH" href="/contact-us" />
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
