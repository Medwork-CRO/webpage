import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import { motion, useScroll } from "framer-motion";
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
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  const { scrollYProgress } = useScroll();

  return (
    <header
      className={`${inter.variable} sticky top-0 z-50 w-full font-sans shadow-sm bg-medwork-light dark:bg-medwork-dark transition-all duration-300`}
    >
      <motion.div className="top-0 left-0 right-0 h-[0.2rem] bg-cyan-400 dark:bg-cyan-600 origin-center fixed z-50" style={{ scaleX: scrollYProgress }} />

      <div className="mx-auto flex max-w-[86rem] px-4 py-3 sm:py-4 lg:px-0 items-center justify-between ">
        <Logo />
        <button
          className="block text-xl md:hidden z-20"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} color="#0891b2" size={24} />
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
