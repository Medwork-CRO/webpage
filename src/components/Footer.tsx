import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineBrightnessAuto,
} from "react-icons/md";

import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import { Theme } from "@/types/Theme";
import TUV_27001 from "@assets/certificates/TUV_hellas_iso27001.webp";
import TUV_9001 from "@assets/certificates/TUV_hellas_iso9001.webp";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { AboutUs, Careers, Services } from "./HeaderLinks";
import CompanyInfo from "./CompanyInfo";

type ThemeSelectorProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const mail = "medworkinfo@medwork.gr";
const addressA = "5 Chiou street,";
const addressB = "164 52 Argyroupolis, Greece";
const linkedin = "company/medwork";

const policies = [
  {
    label: "Code of Conduct",
    filePath: "/pdfs",
    fileName: "code-of-conduct.pdf",
  },
  {
    label: "Information Security",
    filePath: "/pdfs",
    fileName: "information-security-policy.pdf",
  },
  {
    label: "Data Privacy",
    filePath: "/pdfs",
    fileName: "data-privacy-policy.pdf",
  },
  {
    label: "Quality",
    filePath: "/pdfs",
    fileName: "quality-policy.pdf",
  },
];

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  let themeIcon: ReactElement;
  let tooltipText: string;

  if (theme === Theme.DARK) {
    themeIcon = <MdDarkMode />;
    tooltipText = "Switch to light mode";
  } else if (theme === Theme.LIGHT) {
    themeIcon = <MdLightMode />;
    tooltipText = "Switch to auto mode";
  } else {
    themeIcon = <MdOutlineBrightnessAuto />;
    tooltipText = "Switch to dark mode";
  }

  const handleThemeChange = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    } else if (theme === Theme.LIGHT) {
      setTheme(Theme.AUTO);
    } else {
      setTheme(Theme.DARK);
    }
  };

  return (
    <button
      id="theme-selector"
      aria-label="Change the theme"
      title={tooltipText}
      className="
        absolute z-50 p-1 w-12 h-12 sm:w-10 sm:h-10 flex justify-center items-center rounded-full
        text-medwork-dark dark:text-medwork-light
        hover:text-medwork-light hover:dark:text-medwork-dark
        focus-visible:text-medwork-light focus-visible:dark:text-medwork-dark
        bg-medwork-light dark:bg-medwork-dark
        hover:bg-medwork-dark hover:dark:bg-medwork-light
        focus-visible:bg-medwork-dark focus-visible:dark:bg-medwork-light
        border border-medwork-dark dark:border-medwork-light
        hover:border-medwork-light hover:dark:border-medwork-dark
        focus-visible:border-medwork-light focus-visible:dark:border-medwork-dark
    "
      onClick={handleThemeChange}
    >
      {themeIcon}
    </button>
  );
}

function CompanyContact() {
  return (
    <div className="flex-start flex flex-row text-xl sm:text-lg items-start justify-start gap-4 align-middle">
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={"https://goo.gl/maps/KDKk5piro9Cb6AXG7"}
        className="hover:text-blue-500 focus-visible:text-blue-500"
      >
        <MdLocationOn className="antialiased" size={"28px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={"mailto:" + mail}
        className="hover:text-blue-500 focus-visible:text-blue-500"
      >
        <MdEmail className="antialiased" size={"28px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={"https://www.linkedin.com/" + linkedin}
        className="hover:text-blue-500 focus-visible:text-blue-500"
      >
        <FaLinkedin className="antialiased" size={"28px"} />
      </a>
    </div>
  );
}

function Legal({
  themeSelectorProps,
}: {
  themeSelectorProps: ThemeSelectorProps;
}) {
  return (
    <div
      className="
      flex flex-col sm:flex-row flex-wrap justify-start lg:justify-end
      pb-8 sm:pb-0 gap-4 w-full sm:self-end text-xl sm:text-md font-light narrow-letters text-gray-500
    "
    >
      <span>2005 - {new Date().getFullYear()} © Medwork</span>
      <span className="hidden sm:block">|</span>
      <span>All Rights Reserved</span>
      <span className="hidden sm:block">|</span>
      <span>
        Made by{" "}
        <a
          className="font-semibold narrow-letters"
          href="https://itsiakkas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keybraker
        </a>
      </span>
      <span>
        <ThemeSelector
          theme={themeSelectorProps.theme}
          setTheme={themeSelectorProps.setTheme}
        />
      </span>
    </div>
  );
}

function Information() {
  return (
    <div className="flex flex-col justify-start gap-4 text-xl sm:text-lg narrow-letters text-medwork-dark dark:text-medwork-light">
      <div className="flex flex-row gap-4">
        <Image
          src={TUV_9001}
          className="h-32 w-32 sm:h-36 sm:w-36 object-cover"
          alt="TUV Certificate of ISO 9001"
        />
        <Image
          src={TUV_27001}
          className="h-32 w-32 sm:h-36 sm:w-36 object-cover"
          alt="TUV Certificate of ISO 27001"
        />
      </div>
      <Link
        className="font-ultralight narrow-letters hover:underline focus-visible:underline whitespace-nowrap"
        href={"/legislation"}
      >
        Legislation
      </Link>
      <div className="flex flex-col sm:flex-row flex-wrap items-start text-xl sm:text-md gap-4">
        {policies.map((policy, i) => (
          <span key={i} className="flex flex-row">
            <Link
              className="font-ultralight narrow-letters hover:underline focus-visible:underline whitespace-nowrap"
              href={`${policy.filePath}/${policy.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              title={policy.label}
            >
              {policy.label}
            </Link>
            <span className="hidden sm:block ml-4">
              {policies.length - 1 !== i ? "|" : ""}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function WaveSvg() {
  return (
    <div className="absolute select-none bottom-0 left-0 w-full opacity-10 z-[4]">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#06B6D4" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg> */}
      <svg id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 140.42857142857144,179.46428571428572 280.8571428571429,192.92857142857142 410,187 C 539.1428571428571,181.07142857142858 657,155.75 768,138 C 879,120.24999999999999 983.1428571428571,110.07142857142858 1094,116 C 1204.857142857143,121.92857142857142 1322.4285714285716,143.96428571428572 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="#0693e3"
          fillOpacity="0.53"
          className="path-0"
        ></path>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 90.25,363.42857142857144 180.5,393.85714285714283 306,379 C 431.5,364.14285714285717 592.2499999999999,304 721,294 C 849.7500000000001,284 946.5,324.1428571428571 1061,339 C 1175.5,353.8571428571429 1307.75,343.42857142857144 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="#0693e3"
          fillOpacity="1"
          className="path-1"
        ></path>
      </svg>
    </div>
  );
}

function Footer({ theme, setTheme }: ThemeSelectorProps) {
  return (
    <footer
      id="footer"
      className={
        "w-full flex justify-center shadow-sm bg-medwork-light dark:bg-medwork-dark px-4 sm:px-6 eq:px-0 pt-0 sm:pt-12 lg:pt-24 font-sans relative"
      }
    >
      <div className="flex w-full max-w-[1200px] mx-0 eq:mx-8 flex-col text-medwork-dark dark:text-medwork-light z-[5]">
        <div className="mt-6 border-t border-medwork-dark dark:border-medwork-light flex border-opacity-25 dark:border-opacity-25 justify-between items-center">
          {/* <div></div>
                    <ThemeSelector theme={theme} setTheme={setTheme} /> */}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 pt-16 pb-16 sm:pb-0">
          <div className="flex flex-col gap-6">
            <Logo />
            <CompanyInfo />
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left">
            <span className="text-2xl sm:text-lg font-normal narrow-letters uppercase">
              {Services.label}
            </span>
            <div className="text-xl sm:text-lg font-thin narrow-letters flex flex-col gap-2">
              {Services.subCategories.map((service, i) => (
                <Link
                  aria-label={`By clicking you will be taken to ${service.label}`}
                  key={i}
                  href={service.href}
                >
                  <span className="flex items-center hover:text-blue-500">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left">
            <span className="text-2xl sm:text-lg font-normal narrow-letters uppercase">
              {AboutUs.label}
            </span>
            <div className="text-xl sm:text-lg font-thin narrow-letters flex flex-col gap-2">
              {[AboutUs, Careers].map((a, i) => (
                <Link
                  aria-label={`By clicking you will be taken to ${a.label}`}
                  key={i}
                  href={a.href}
                >
                  <span className="flex items-center hover:text-blue-500 focus-visible:text-blue-500">
                    {a.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left">
            <span className="text-2xl sm:text-lg font-normal narrow-letters uppercase">
              CONTACT INFO
            </span>
            <div className="text-xl sm:text-lg font-thin narrow-letters flex flex-col gap-2">
              <Link
                href={`mailto:${mail}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 focus-visible:text-blue-500"
              >
                {mail}
              </Link>
              <Link
                href={"https://goo.gl/maps/KDKk5piro9Cb6AXG7"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 focus-visible:text-blue-500"
              >
                <div className="flex flex-col">
                  <div>{addressA}</div>
                  <div>{addressB}</div>
                </div>
              </Link>
            </div>
            <RoundedButton label="GET IN TOUCH" href="/contact-us" />
            <CompanyContact />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 items-start pb-8 sm:pt-8 md:pt-0">
          <Information />
          <Legal themeSelectorProps={{ theme, setTheme }} />
        </div>
      </div>
      <div className="absolute z-[3] bottom-0 left-0 right-0 flex items-end justify-center h-16 opacity-[0.05] dark:opacity-[0.02]">
        <span className="select-none text-vws leading-vws text-medwork-dark dark:text-medwork-light font-bold overflow-hidden h-4/7 tracking-widest">
          Forward
        </span>
      </div>
      <WaveSvg />
    </footer>
  );
}

export default Footer;
