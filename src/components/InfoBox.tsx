import { motion } from "framer-motion";
import Link from "next/link";

type InfoBoxProps = {
    title: string;
    text: string;
    link: string;
    color: string;
};

function InfoBox({ title, text, link, color }: InfoBoxProps) {
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
        >
            <Link href={link}>
                <div
                    className={`${color}
                        flex flex-col p-4 rounded-lg
                        h-[26rem] sm:h-[20rem] md:h-[22rem] lg:h-[26rem] w-full
                        hover:border-blue-500 border-4 border-transparent
                        text-blue-800 transition-all duration-500 ease-in-out
                        hover:shadow-lg hover:scale-105
                        narrow-letters leading-relaxed
                    `}
                >
                    <p className="mb-6 text-xl border-b border-blue-500">{title.toUpperCase()}</p>
                    <span className="flex flex-col h-full justify-between text-lg">
                        <p>{text}</p>
                        <p className="font-normal">Read more</p>
                    </span>
                </div>
            </Link>

        </motion.div>
    );
}

export default InfoBox;
