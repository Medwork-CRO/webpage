import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
    index: number,
    imageData: StaticImageData;
    imageTitle: string;
    imageDescription: string;
    readMoreLink: string;
};

function ServiceCard({
    index,
    imageData,
    imageTitle,
    imageDescription,
    readMoreLink,
}: CardProps) {
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
            className="flex flex-col gap-2"
        >
            <Link href={readMoreLink}>
                <div
                    key={index}
                    tabIndex={0}
                    className="
                        bg-medwork-light2 dark:bg-medwork-dark2
                        text-medwork-dark2 dark:text-medwork-light2
                        flex flex-col items-center overflow-hidden
                        transform transition duration-200 ease-in-out
                        border-4 border-transparent rounded-lg
                        hover:border-gray-400 dark:hover:border-gray-600
                        h-full sm:h-[32rem] lg:h-[34rem] w-full
                    "
                >
                    <Image
                        className="object-cover h-56"
                        src={imageData}
                        alt={imageTitle}
                    />
                    <div className="p-4">
                        <p className="mb-12 text-xl narrow-letters leading-relaxed">{imageTitle}</p>
                        <p className="text-md narrow-letters leading-relaxed">{imageDescription}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default ServiceCard;
