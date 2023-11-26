import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import { THEME } from "@/types/Theme";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Link from "next/link";
import { ReactElement } from "react";
import { MdDarkMode, MdLightMode, MdOutlineBrightnessAuto } from "react-icons/md";
import { AboutUs, Careers, Services } from "./HeaderLinks";
import CompanyInfo from "./companyInfo";

type ThemeSelectorProps = {
    theme: THEME;
    setTheme: (theme: THEME) => void;
};

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

function CompanyContact() {
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
        <div className="flex flex-col xs:flex-row items-start gap-2 text-md font-thin narrow-letters text-gray-400 sm:self-end">
            <span>2005 - {new Date().getFullYear()} © Medwork</span>
            <span className="flex flex-col xs:flex-row gap-2">
                <span className="hidden xs:block">|</span>
                <span>All Rights Reserved</span>
                <span className="hidden xs:block">|</span>
                <span>
          Made by{" "}
                    <a
                        className="font-thin narrow-letters"
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

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
    let themeIcon: ReactElement;
    let tooltipText = "";

    if (theme === THEME.DARK) {
        themeIcon = <MdDarkMode />;
        tooltipText = "Switch to light mode";
    } else if (theme === THEME.LIGHT) {
        themeIcon = <MdLightMode />;
        tooltipText = "Switch to auto mode";
    } else {
        themeIcon = <MdOutlineBrightnessAuto />;
        tooltipText = "Switch to dark mode";
    }

    const handleThemeChange = () => {
        if (theme === THEME.DARK) {
            setTheme(THEME.LIGHT);
        } else if (theme === THEME.LIGHT) {
            setTheme(THEME.AUTO);
        } else {
            setTheme(THEME.DARK);
        }
    };

    return (
        <button
            id="theme-selector" aria-label="Change the theme"
            title={tooltipText}
            className="...your classes..."
            onClick={handleThemeChange}
        >
            {themeIcon}
        </button>
    );
}

function Information() {
    return (
        <div className="flex flex-col items-start gap-4 text-md text-medwork-dark dark:text-medwork-light">
            <Link
                className="font-black narrow-letters hover:underline focus-visible:underline whitespace-nowrap"
                href={"/about/legislation"}
            >
        Legislation
            </Link>
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4">
                {policies.map((policy, i) => (
                    <span key={i}>
                        <Link
                            className="font-thin narrow-letters hover:underline focus-visible:underline whitespace-nowrap"
                            href={`${policy.filePath}/${policy.fileName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {policy.label}
                        </Link>
                        <span className="hidden sm:block">
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
                >
                </path>
                <path
                    d="M 0,500 C 0,500 0,333 0,333 C 90.25,363.42857142857144 180.5,393.85714285714283 306,379 C 431.5,364.14285714285717 592.2499999999999,304 721,294 C 849.7500000000001,284 946.5,324.1428571428571 1061,339 C 1175.5,353.8571428571429 1307.75,343.42857142857144 1440,333 C 1440,333 1440,500 1440,500 Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="#0693e3"
                    fillOpacity="1"
                    className="path-1"
                >
                </path>
            </svg>
        </div>
    );
}

function Footer({ theme, setTheme }: ThemeSelectorProps) {
    return (
        <footer
            id="footer"
            className={"w-full flex justify-center shadow-sm bg-medwork-light dark:bg-medwork-dark px-4 sm:px-6 lg:px-0 pt-0 sm:pt-12 lg:pt-24 font-sans relative"}
        >
            <div className="flex w-full max-w-[1200px] mx-0 eq:mx-8 flex-col text-medwork-dark dark:text-medwork-light z-[5]"> {/* max-w-[1200px] */}
                <div className="mt-6 border-t border-medwork-dark dark:border-medwork-light flex justify-between items-center">
                    <div></div>
                    <ThemeSelector theme={theme} setTheme={setTheme} />
                </div>

                {/* <div className="flex flex-col justify-between gap-8 py-16 md:flex-row"> */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-16 py-16"> */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 py-16">
                    <div className="flex flex-col gap-6">
                        <Logo />
                        <CompanyInfo />
                    </div>

                    <div className="min-w-96 flex flex-col gap-6 text-left">
                        <span className="text-xl font-light narrow-letters uppercase">{Services.label}</span>
                        <div className="text-md font-thin narrow-letters flex flex-col gap-2">
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
                        <span className="text-xl font-light narrow-letters uppercase">{AboutUs.label}</span>
                        <div className="text-md font-thin narrow-letters flex flex-col gap-2">
                            {[AboutUs, Careers].map((a, i) => (
                                <Link
                                    aria-label={`By clicking you will be taken to ${a.label}`}
                                    key={i}
                                    href={a.href}
                                >
                                    <span className="flex items-center hover:text-cyan-500 focus-visible:text-cyan-500">
                                        {a.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="min-w-96 flex flex-col gap-6 text-left">
                        <span className="text-xl font-light narrow-letters uppercase">CONTACT INFO</span>
                        <div className="text-md font-thin narrow-letters flex flex-col gap-2">
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
                        <CompanyContact />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-8 items-start pb-8">
                    <Information />
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
