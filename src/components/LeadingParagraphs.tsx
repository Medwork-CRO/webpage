import { motion } from "framer-motion";

type LeadingParagraphsProps = {
  paragraphs: string[];
  withLead: boolean;
};

function LeadingParagraphs({ paragraphs, withLead = false }: LeadingParagraphsProps) {
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            className="
            pl-6 border-l border-medwork-brown dark:border-gray-400
            font-ultralight
            flex flex-col w-full
            gap-12 sm:gap-16
            whitespace-pre-line tracking-wide
            narrow-letters leading-relaxed
            text-medwork-brown dark:text-gray-400
            text-xl md:text-2xl text-left
        ">
            {paragraphs.map((paragraph, index) => (
                !index
                    ? <p key={index} className={`${index === paragraphs.length - 1 ? "" : "mb-6 sm:mb-8"} ${withLead ? "font-light text-2xl md:text-3xl" : "font-thin text-xl md:text-2xl"}`}>{paragraph}</p>
                    : index === paragraphs.length - 1
                        ? <p key={index} className="font-thin text-xl md:text-2xl">{paragraph}</p>
                        : <p key={index} className="font-thin text-xl md:text-2xl">{paragraph}</p>
            ))}
        </motion.div>
    );
}

export default LeadingParagraphs;
