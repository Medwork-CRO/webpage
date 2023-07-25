import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

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

    useEffect(() => {
        if (isVisible) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isVisible, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-4 p-3 rounded-full text-medwork-dark dark:text-medwork-light bg-medwork-light dark:bg-medwork-dark border-medwork-dark dark:border-medwork-light border z-50 ${isVisible ? 'block' : 'hidden'
                }`}
            variants={variants}
            animate={controls}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <AiOutlineArrowUp />
        </motion.button>
    );
};

export default ScrollToTopButton;
