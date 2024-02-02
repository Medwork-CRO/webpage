import { motion } from "framer-motion";
import React from "react";

type Showcase = {
    title: string;
    point: string
};

function Showcasing({ title, showcases }: { title: string, showcases: Showcase[] }) {
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
            className="
            w-full flex flex-col gap-6
            text-medwork-brown dark:text-gray-400
        ">
            <span
                id={title.split(" ").join("-").toLowerCase()}
                className={`
                pl-4 mt-2 mb-4 text-2xl md:text-3xl text-center
                font-semibold uppercase tracking-wide leading-tight narrow-letters
              `}
            >
                {title}
            </span>
            {/* list-disc */}
            <ul className="
                flex flex-col gap-8 pl-8
                border-l border-medwork-brown dark:border-gray-400
            ">
                {showcases.map((showcase, i) => (
                    <li className="narrow-letters leading-relaxed" key={i}>
                        <p className="font-normal text-2xl">{showcase.title}</p>
                        <p className="font-thin text-xl">{showcase.point}</p>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default Showcasing;
