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
        label: "Our Team",
        href: "/our-team",
      },
      {
        label: "Careers",
        href: "careers",
      },
    ],
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
      },
      {
        label: "Materiovigilance",
        href: "materiovigilance",
      },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    subCategories: [
      {
        label: "Compliance",
        href: "compliance",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${inter.variable} sticky top-0 z-50 w-full bg-[#f6f1eb] font-sans shadow-sm`}
    >
      <div className="mx-auto flex max-w-[86em] items-center justify-between px-4 py-8">
        <Logo />
        <button
          className="block text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="mr-2 cursor-pointer text-cyan-500" />
        </button>
        <div className="hidden md:block">
          <NavMenu nav={navMenu} />
        </div>
      </div>
      <div className="block md:hidden">
        <NavHamburger nav={navMenu} isOpen={isOpen} />
      </div>
    </header>
  );
}

export default Header;
