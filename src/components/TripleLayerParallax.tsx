import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type ParallaxInfo = {
    imageFull: string;
    imageMiddle: string;
    imageBottom: string;
    text: string;
};

function TripleLayerParallax({
    imageFull,
    imageMiddle,
    imageBottom,
    text,
}: ParallaxInfo) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // @ts-ignore
        offset: ["start start", "end start"],
    });

    const imageFullY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const imageMiddleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center motion-safe:animate-fadeIn"
        >
            <motion.div
                className="absolute inset-0 bottom-0 z-0"
                style={{
                    backgroundImage: `url('${imageFull}')`, // `url(${imageFull})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: imageFullY,
                }}
            />

            <motion.h1
                style={{ y: textY }}
                className="font-bold mb-[24rem] xs:mb-[40rem] text-white text-7xl xs:text-8xl sm:text-9xl md:text-[12rem] relative z-10"
            >
                {text}
            </motion.h1>

            <div
                className={`absolute inset-0 bottom-0 z-20 from-[#f6f1eb] to-transparent bg-gradient-to-t opacity-40`}
            ></div>

            <motion.div
                className="absolute inset-0 bottom-0 z-30"
                style={{
                    backgroundImage: `url('${imageMiddle}')`, // `url(${imageFull})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: imageMiddleY,
                }}
            />

            <div
                className="absolute inset-0 bottom-0 z-40"
                style={{
                    backgroundImage: `url('${imageBottom}')`, // `url(${imageBottom})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
}

export default TripleLayerParallax;