import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavHamburger from "./NavHamburger";
import NavMenu from "./NavMenu";
import { navMenu } from "./HeaderLinks";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Set initial state to false
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body")?.classList.add("disable-scroll");
    } else {
      document.querySelector("body")?.classList.remove("disable-scroll");
    }
  }, [isOpen]);

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
      className={`${inter.variable} sticky top-0 z-50 w-full font-sans  ${isScrolled
        ? "bg-[#f6f1eb] shadow-sm dark:bg-[#2d333b]"
        : "bg-transparent"
        } transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-[86em] items-center justify-between px-4 py-6 lg:px-0">
        <Logo />
        <button
          className="block text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="mr-2 cursor-pointer text-cyan-600" />
          ) : (
            <FaBars className="mr-2 cursor-pointer text-cyan-600" />
          )}
        </button>
        <div className="hidden md:block">
          <NavMenu nav={navMenu} />
        </div>
      </div>
      <div className={`block shadow-xl md:hidden ${isOpen ? 'h-[calc(100vh-4rem)] overflow-auto' : ''}`}>
        <NavHamburger nav={navMenu} isOpen={isOpen} />
      </div>
    </header>
  );
}

export default Header;
