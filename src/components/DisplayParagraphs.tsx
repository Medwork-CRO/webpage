import { motion } from "framer-motion";

type DisplayParagraphsProps = {
  paragraphs: string[];
  withLead: boolean;
};

function DisplayParagraphs({
  paragraphs,
  withLead = false,
}: DisplayParagraphsProps) {
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="
            p-4 sm:p-8 rounded-2xl
            flex flex-col w-full
            bg-medwork-light2 dark:bg-medwork-dark2 bg-opacity-25
            whitespace-pre-line tracking-wide text-left
            narrow-letters leading-relaxed
            text-medwork-brown dark:text-gray-400
      "
    >
      {paragraphs.map((paragraph, index) =>
        !index ? (
          <p
            key={index}
            className={`${index === paragraphs.length - 1 ? "" : "mb-6 sm:mb-8"} ${withLead ? "font-normal text-2xl md:text-3xl" : "font-thin text-xl md:text-2xl"}`}
          >
            {paragraph}
          </p>
        ) : index === paragraphs.length - 1 ? (
          <p key={index} className="font-thin text-xl md:text-2xl">
            {paragraph}
          </p>
        ) : (
          <p key={index} className="font-thin text-xl md:text-2xl">
            {paragraph}
          </p>
        )
      )}
    </motion.div>
  );
}

export default DisplayParagraphs;
