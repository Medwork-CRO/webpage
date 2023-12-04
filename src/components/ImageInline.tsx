import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Title from "./Title";

type ImageInlineProps = {
  image: StaticImageData;
};

function ImageInline({
    image,
}: ImageInlineProps) {
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
            <Title title="Our Team" />
            <Image
                src={image}
                className="
                max-h-[420px] object-cover rounded-lg
                border-4 border-gray-400 dark:border-gray-600 shadow-md
            "
                alt="alt"
            />
        </motion.div>
    );
}

export default ImageInline;
