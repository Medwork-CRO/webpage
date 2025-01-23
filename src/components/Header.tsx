import Logo from "@/components/Logo";
import { motion, useScroll } from "framer-motion";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { navMenu } from "./HeaderLinks";
import NavHamburger from "./NavHamburger";
import NavMenu from "./NavMenu";

function Header() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const { scrollYProgress } = useScroll();

  return (
    <header
      className={
        "sticky top-0 z-50 w-full font-sans bg-medwork-light dark:bg-medwork-dark transition-all duration-300"
      }
    >
      <div className="mx-auto flex max-w-[1200px] py-2 sm:py-3 px-2 md:px-6 eq:px-0 items-center justify-between">
        <Logo />
        <button
          id="hamburger-menu"
          aria-label="Menu hamburger"
          className="block text-xl md:hidden z-20"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#0891b2"
            size={24}
          />
        </button>
        <div className="hidden md:block">
          <NavMenu nav={navMenu} />
        </div>
      </div>
      <div
        className={`block shadow-xl md:hidden ${isOpen ? "h-[calc(100vh-4rem)] overflow-auto" : ""}`}
      >
        <NavHamburger nav={navMenu} isOpen={isOpen} />
      </div>
      <motion.div
        className="mx-auto max-w-[1200px] top-0 left-0 right-0 h-[0.1rem] bg-blue-400 origin-center"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}

export default Header;
