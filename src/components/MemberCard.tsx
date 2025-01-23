import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export type MemberInfo = {
  image: StaticImageData;
  name: string;
  title: string;
  description: string[];
  linkedInTag?: string;
};

type MemberCardProps = MemberInfo & {
  onToggleDescription: () => void;
  showDescription: boolean;
  selected: boolean;
};

function MemberCard({
  image,
  name,
  title,
  linkedInTag,
  description,
  onToggleDescription,
  showDescription,
  selected,
}: MemberCardProps) {
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
      className="flex flex-col items-center content-center text-center text-medwork-dark dark:text-medwork-light"
    >
      <div
        className={`
                flex h-[240px] rounded-lg bg-cover border-2 border-blue-500 dark:border-blue-400
                ${showDescription && "shadow-2xl shadow-blue-500 dark:shadow-blue-400 drop-shadow-2xl"}
            `}
      >
        <Image
          className={`w-[170px] h-[230px] object-cover rounded-md ${!showDescription && selected && "sm:blur-[2px]"}`}
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col justify-between h-full gap-2 m-4 z-10">
        <p className="text-blue text-xl font-extralight">{name}</p>
        {linkedInTag && (
          <a
            aria-label="LinkedIn profile"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.linkedin.com/in/${linkedInTag}`}
          >
            <FaLinkedin className="antialiased" size={"20px"} />
          </a>
        )}
        <p className="text-lg font-thin text-blue-500">{title}</p>

        <div className="flex flex-col items-center mt-3 text-sm">
          <button
            onClick={onToggleDescription}
            className={`
                            flex flex-row items-center justify-center gap-2
                            cursor-pointer text-medwork-light dark:text-medwork-dark
                            font-light narrow-letters leading-relaxed whitespace-nowrap
                            py-2 sm:py-1 px-4 sm:px-3 rounded-full
                            text-md md:text-sm text-center
                            bg-blue-400 hover:bg-blue-500 focus-visible:bg-blue-500
                            transition duration-100 ease-in focus:outline-none
                            ${showDescription && "bg-blue-500"}
                        `}
          >
            {/* flex justify-around w-[64px] items-center rounded-xl py-2 px-2
                            ${showDescription && "bg-medwork-dark2 dark:bg-medwork-light text-medwork-light2 dark:text-medwork-dark"}
                            border border-medwork-brown dark:border-gray-400
                            hover:bg-medwork-dark hover:dark:bg-medwork-light
                            text-medwork-brown dark:text-gray-400
                            hover:text-medwork-light2 hover:dark:text-medwork-dark2 */}
            <span>CV</span>
            {showDescription ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        </div>

        {showDescription && (
          <div className="block sm:hidden">
            <div className="flex flex-col">
              {description.map((item, index) => (
                <p
                  key={index}
                  className="
                                        mt-4 overflow-ellipsis
                                        font-light narrow-letters leading-relaxed
                                        text-md text-left
                                    "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default MemberCard;
