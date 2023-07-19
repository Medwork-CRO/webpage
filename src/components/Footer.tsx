import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import { Inter } from "@next/font/google";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Link from "next/link";
import { AboutUs, Careers, Services } from "./HeaderLinks";
import AnimatedWave from "./AnimatedWave";

const mail = "medworkinfo@medwork.gr";
const address = "Greece, Chiou 5, Argyroupoli 164 52";
const linkedin = "company/medwork";

const PDFs = [
  {
    label: "Code of Conduct",
    filePath: "assets/pdfs",
    fileName: "code-of-conduct.pdf",
  },
  {
    label: "Information Security Policy",
    filePath: "assets/pdfs",
    fileName: "information-security-policy.pdf",
  },
  {
    label: "Data Privacy Policy",
    filePath: "assets/pdfs",
    fileName: "data-privacy-policy.pdf",
  },
  {
    label: "Quality Policy",
    filePath: "assets/pdfs",
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

function Legal() {
  return (
    <div className="relative">
      <div className="flex flex-col justify-start gap-2 pb-8 pt-4 text-sm xs:flex-row text-gray-400">
        <span>© {new Date().getFullYear()} Medwork -</span>
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

function Files() {
  return (
    <div className="flex">
      {"{ "}
      <div className="flex gap-2 text-sm text-[#2d333b] dark:text-[#f6f1eb]">
        {PDFs.map((a, i) => (
          <div key={i}>
            <Link
              className="hover:underline"
              href={`${a.filePath}/${a.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              download={a.fileName}
            >
              {a.label}
            </Link>
            {PDFs.length - 1 !== i ? "," : ""}
          </div>
        ))}
      </div>
      {" }"}
    </div>
  );
}

function WaveSvg() {
  return (
    <div className="absolute select-none bottom-0 left-0 w-full opacity-10 z-10">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#06B6D4" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 140.42857142857144,179.46428571428572 280.8571428571429,192.92857142857142 410,187 C 539.1428571428571,181.07142857142858 657,155.75 768,138 C 879,120.24999999999999 983.1428571428571,110.07142857142858 1094,116 C 1204.857142857143,121.92857142857142 1322.4285714285716,143.96428571428572 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="#0693e3"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 90.25,363.42857142857144 180.5,393.85714285714283 306,379 C 431.5,364.14285714285717 592.2499999999999,304 721,294 C 849.7500000000001,284 946.5,324.1428571428571 1061,339 C 1175.5,353.8571428571429 1307.75,343.42857142857144 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="#0693e3"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    // bg-gradient-to-l from-cyan-500 to-cyan-800
    <footer
      className={`${inter.variable} w-full flex justify-center shadow-sm bg-[#f6f1eb] dark:bg-[#2d333b] px-4 sm:px-6 lg:px-0 font-sans relative`}
    >
      <div className="flex w-full max-w-[86rem] flex-col text-[#2d333b] dark:text-[#f6f1eb] z-30">
        <div className="border-t border-[#2d333b] dark:border-[#f6f1eb]"></div>
        <div className="flex flex-col justify-between gap-8 py-16 md:flex-row">
          <div className="flex flex-col gap-6">
            <Logo />
            <span className={"max-w-sm whitespace-pre-line text-left text-xl"}>
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
              {[AboutUs, Careers].map((a, i) => (
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
        <Files />
        <Legal />
      </div>
      <div className="absolute z-20 bottom-0 left-0 right-0 flex items-end justify-center h-16 opacity-5">
        <span className="select-none text-vws leading-vws text-[#2d333b] dark:text-[#f6f1eb] font-bold overflow-hidden h-3/7 tracking-widest">
          Forward
        </span>
      </div>
      <WaveSvg />
      {/* <AnimatedWave
        color={"#06B6D4"}
        animationDuration="16s"
        opacity={"0.2"}
      />
      <AnimatedWave
        color={"#06B6D4"}
        animationDirection="reverse"
        animationDuration="12s"
        opacity={"0.1"}
      /> */}
    </footer>
  );
}

export default Footer;
