import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
        href: "/careers",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subCategories: [
      {
        label: "Pharmacovigilance",
        href: "/services/pharmacovigilance",
      },
      {
        label: "Cosmetovigilance",
        href: "/services/cosmetovigilance",
      },
      {
        label: "Quality Management",
        href: "/services/quality-management",
      },
      {
        label: "Materiovigilance",
        href: "/services/materiovigilance",
      },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    subCategories: [
      {
        label: "Compliance",
        href: "/technology/compliance",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Set initial state to false
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`${inter.variable} sticky top-0 z-50 w-full font-sans  ${
        isScrolled ? "bg-[#f6f1eb] shadow-sm" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-[86em] items-center justify-between px-4 lg:px-0 py-6">
        <Logo />
        <button
          className="block text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="mr-2 cursor-pointer text-cyan-600" />
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
