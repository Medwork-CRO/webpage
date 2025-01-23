import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
  index: number;
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
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <Link
        href={readMoreLink}
        className="w-full h-full md:h-[28rem] lg:h-[30rem]"
      >
        <div
          key={index}
          tabIndex={0}
          className="
                        w-full h-full
                        flex flex-col overflow-hidden
                        transform transition-transform duration-300 ease-in-out
                        bg-medwork-light2 dark:bg-medwork-dark2
                        text-medwork-dark2 dark:text-medwork-light2
                        p-2
                        rounded-lg
                        hover:scale-105 hover:shadow-lg
                    "
        >
          <Image
            className="
                            object-cover h-36 sm:h-48
                            transition-transform duration-300 ease-in-out
                            border-2 border-gray-400 dark:border-gray-600
                            rounded-md
                        "
            src={imageData}
            alt={imageTitle}
          />
          <div className="p-2">
            <p className="mb-8 text-xl narrow-letters leading-relaxed">
              {imageTitle}
            </p>
            <p className="text-md narrow-letters leading-relaxed">
              {imageDescription}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
