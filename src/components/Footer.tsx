import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import { Inter } from "@next/font/google";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";

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
    <div className="flex flex-col justify-start gap-2 pb-8 text-sm xs:flex-row">
      <span className="text-cyan-400">
        © Copyright 2005 - {new Date().getFullYear()} Medwork -
      </span>
      <span className="flex gap-2">
        <span className="text-white">All Rights Reserved</span>
        <span className="text-cyan-400">|</span>
        <span className="text-white">
          Made by{" "}
          <a
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

function Footer() {
  return (
    <footer
      className={`${inter.variable} w-full bg-gradient-to-l from-cyan-600 to-cyan-900 font-sans`}
    >
      <div className="mx-auto flex w-full max-w-[86em] flex-col justify-between px-16">
        <div className="flex flex-col justify-between py-32 md:flex-row gap-8">
          <div className="flex flex-col gap-6">
            <Logo color="text-white" />
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

          <div className="min-w-96 flex flex-col gap-6 text-left text-white">
            <span className="text-xl font-semibold text-white">SERVICES</span>
            <div className="text-md flex flex-col gap-2 text-cyan-400">
              <span>Pharmacovigilance</span>
              <span>Cosmetovigilance</span>
              <span>Quality Management</span>
              <span>Materiovigilance</span>
            </div>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left text-white">
            <span className="text-xl font-semibold text-white">ABOUT US</span>
            <div className="text-md flex flex-col gap-2 text-cyan-400">
              <span>Our Team</span>
              <span>Careers</span>
            </div>
          </div>

          <div className="min-w-96 flex flex-col gap-6 text-left text-white">
            <span className="text-xl font-semibold text-white">
              CONTACT INFO
            </span>
            <div className="text-md flex flex-col gap-2 text-cyan-400">
              <span>{mail}</span>
              <span>{address}</span>
            </div>
            <RoundedButton label="GET IN TOUCH" href="" color="orange" />
            <CompanyInfo />
          </div>
        </div>
        <CompanyFooter />
      </div>
    </footer>
  );
}

export default Footer;
