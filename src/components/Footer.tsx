import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import { Inter } from "@next/font/google";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Link from "next/link";
import { MdDarkMode, MdLightMode, MdOutlineBrightnessAuto } from 'react-icons/md';
import { AboutUs, Careers, Services } from "./HeaderLinks";
import { THEME } from "@/types/Theme";

const recruitmentEmail = "recruitment@medwork.gr";
const mail = "medworkinfo@medwork.gr";
const address = "Greece, Chiou 5, Argyroupoli 164 52";
const linkedin = "company/medwork";

const policies = [
  {
    label: "Code of Conduct",
    filePath: "/pdfs",
    fileName: "code-of-conduct.pdf",
  },
  {
    label: "Information Security Policy",
    filePath: "/pdfs",
    fileName: "information-security-policy.pdf",
  },
  {
    label: "Data Privacy Policy",
    filePath: "/pdfs",
    fileName: "data-privacy-policy.pdf",
  },
  {
    label: "Quality Policy",
    filePath: "/pdfs",
    fileName: "quality-policy.pdf",
  },
];

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
        <MdLocationOn className="antialiased" size={"22px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={"mailto:" + mail}
      >
        <MdEmail className="antialiased" size={"22px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={"https://www.linkedin.com/in/" + linkedin}
      >
        <FaLinkedin className="antialiased" size={"22px"} />
      </a>
    </div>
  );
}

function Legal() {
  return (
    <div className="flex flex-col xs:flex-row items-start gap-2 text-md text-gray-400 align-center">
      <span>© {new Date().getFullYear()} Medwork</span>
      <span className="flex flex-col xs:flex-row gap-2">
        <span className="hidden xs:block">|</span>
        <span>All Rights Reserved</span>
        <span className="hidden xs:block">|</span>
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
  );
}

function ThemeSelector({ theme, setTheme }: { theme: THEME, setTheme: Function }) {
  const handleThemeChange = () => {
    if (theme === THEME.DARK) {
      setTheme(THEME.LIGHT);
    } else if (theme === THEME.LIGHT) {
      setTheme(THEME.AUTO);
    } else {
      setTheme(THEME.DARK);
    }
  };

  const themeIcon = () => {
    if (theme === THEME.DARK) {
      return <MdDarkMode />;
    } else if (theme === THEME.LIGHT) {
      return <MdLightMode />;
    } else {
      return <MdOutlineBrightnessAuto />;
    }
  };

  return (
    <button
      className="
        absolute z-50 p-1 w-8 h-8 flex justify-center items-center text-medwork-dark dark:text-medwork-light
        bg-medwork-light dark:bg-medwork-dark border-medwork-dark dark:border-medwork-light border rounded-full"
      onClick={handleThemeChange}
    >
      {themeIcon()}
    </button>
  );
}

function Policies() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-start gap-2 text-md text-medwork-dark dark:text-medwork-light">
      Policies: {policies.map((a, i) => (
        <div key={i} className="flex">
          <Link
            className="font-semibold hover:underline whitespace-nowrap"
            href={`${a.filePath}/${a.fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            download={a.fileName}
          >
            {a.label}
          </Link>
          <span className="hidden sm:block">
            {policies.length - 1 !== i ? "," : ""}
          </span>
        </div>
      ))}
    </div>
  );
}

function WaveSvg() {
  return (
    <div className="absolute select-none bottom-0 left-0 w-full opacity-10 z-[4]">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#06B6D4" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
      <svg
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
      >
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

function Footer({ theme, setTheme }: { theme: any, setTheme: any }) {
  return (
    <footer
      className={`${inter.variable} w-full flex justify-center shadow-sm bg-medwork-light dark:bg-medwork-dark px-4 sm:px-6 lg:px-0 font-sans relative`}
    >

      <div className="flex w-full max-w-[86rem] flex-col text-medwork-dark dark:text-medwork-light z-[5]">
        <div className="mt-6 border-t border-medwork-dark dark:border-medwork-light flex justify-between items-center">
          <div></div>
          <ThemeSelector theme={theme} setTheme={setTheme} />
        </div>

        {/* <div className="flex flex-col justify-between gap-8 py-16 md:flex-row"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-16 py-16"> */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 py-16">

          <div className="flex flex-col gap-6">
            <Logo />
            <span className={"max-w-sm whitespace-pre-line text-left text-lg"}>
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
              {[...AboutUs.subCategories, Careers].map((a, i) => (
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
            <span className="text-xl font-semibold">CONTACT INFO</span>
            <div className="text-md flex flex-col gap-2">
              <Link
                href={`mailto:${mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {mail}
              </Link>
              <Link
                href={`mailto:${recruitmentEmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {recruitmentEmail}
              </Link>
              <Link
                href={"https://goo.gl/maps/KDKk5piro9Cb6AXG7"}
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
        <div className="flex flex-col md:flex-row justify-between gap-8 items-start pb-8 pt-4">
          <Policies />
          <Legal />
        </div>
      </div>
      <div className="absolute z-[3] bottom-0 left-0 right-0 flex items-end justify-center h-16 opacity-[0.05] dark:opacity-[0.02]">
        <span className="select-none text-vws leading-vws text-medwork-dark dark:text-medwork-light font-bold overflow-hidden h-3/7 tracking-widest">
          Forward
        </span>
      </div>
      <WaveSvg />
    </footer>
  );
}

export default Footer;
