import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import Hamburger from 'hamburger-react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { navMenu } from "./HeaderLinks";
import NavHamburger from "./NavHamburger";
import NavMenu from "./NavMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function Header() {
  const [isOpen, setOpen] = useState(false); // Set initial state to false
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
    setOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`${inter.variable} sticky top-0 z-50 w-full font-sans ${isScrolled
        ? "shadow-sm bg-[#f6f1eb] dark:bg-[#2d333b]"
        : "bg-transparent"
        } transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-[86rem] px-4 py-3 sm:py-4 lg:px-0 items-center justify-between ">
        <Logo />
        <button
          className="block text-xl md:hidden z-20"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} color="#0891b2" size={24}/>
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
