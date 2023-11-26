import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > document.documentElement.clientHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="scroll-to-top" aria-label="Scroll to the top"
            onClick={scrollToTop}
            className={`scrollToTopButton
            fixed bottom-8 right-4 p-3 rounded-full
            text-medwork-dark dark:text-medwork-light
            bg-medwork-light dark:bg-medwork-dark
            border-medwork-dark dark:border-medwork-light border z-30
            ${isVisible ? 'visible' : ''}`}
        >
            <AiOutlineArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
