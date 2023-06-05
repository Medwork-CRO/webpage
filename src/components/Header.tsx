import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { useState } from "react";
import NavHamburger, { NavProp } from "./NavHamburger";
import NavMenu from "./NavMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const navMenu: NavProp[] = [
  {
    label: "About Us",
    href: "/about-us",
    subCategories: [
      {
        label: "Leadership",
        href: "leadership",
      },
      {
        label: "Careers",
        href: "careers",
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    subCategories: [
      {
        label: "Pharmacovigilance",
        href: "pharmacovigilance",
      },
      {
        label: "Cosmetovigilance",
        href: "cosmetovigilance",
      },
      {
        label: "Quality Management",
        href: "quality-management",
      }
    ]
  },
  {
    label: "Technology",
    href: "/technology",
    subCategories: [
      {
        label: "Compliance",
        href: "compliance",
      }
    ]
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${inter.variable} font-sans sticky top-0 z-50 w-full bg-[#f6f1eb] shadow-sm`}>
      <div className="max-w-[86em] mx-auto px-4 py-8 flex justify-between items-center">
        <Logo />
        <button className="md:hidden block text-xl" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-cyan-500 cursor-pointer mr-2" />
        </button>
        <div className="hidden md:block">
          <NavMenu nav={navMenu} />
        </div>
      </div>
      <div className="md:hidden block">
        <NavHamburger nav={navMenu} isOpen={isOpen} />
      </div>
    </header>
  );
}

export default Header;
