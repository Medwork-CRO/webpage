import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type ParallaxInfo = {
  imageFull: string;
  imageBottom: string;
  text: string;
};

function DualLayerParallax({ imageFull, imageBottom, text }: ParallaxInfo) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "500%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center motion-safe:animate-fadeIn rounded-xl text-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold mb-[18rem] xs:mb-[32rem] text-medwork-light dark:text-medwork-dark text-7xl xs:text-8xl sm:text-9xl md:text-[10rem] relative z-10"
      >
        {text}
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${imageFull}')`, // `url(${imageFull})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url('${imageBottom}')`, // `url(${imageBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      <div
        className={
          "absolute inset-0 z-5 from-medwork-dark to-transparent bg-gradient-to-t"
        }
      ></div>
    </div>
  );
}

export default DualLayerParallax;
