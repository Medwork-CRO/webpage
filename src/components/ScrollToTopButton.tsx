import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > document.documentElement.clientHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll-to-top"
      aria-label="Scroll to the top"
      onClick={scrollToTop}
      className={`
                scrollToTopButton z-30
                fixed bottom-8 right-4 p-4 sm:p-3 rounded-full
                text-medwork-dark dark:text-medwork-light
                bg-medwork-light dark:bg-medwork-dark bg-opacity-80
                border-medwork-dark dark:border-medwork-light border
                ${isVisible ? "visible" : ""}
            `}
    >
      <AiOutlineArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
