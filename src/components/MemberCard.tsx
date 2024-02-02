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
};

function MemberCard({
    image,
    name,
    title,
    linkedInTag,
    description,
    onToggleDescription,
    showDescription,
}: MemberCardProps) {
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
            className="flex flex-col items-center content-center text-center text-medwork-dark dark:text-medwork-light"
        >
            <div className="flex h-[230px] rounded-xl bg-cover">
                <Image
                    className="w-[156px] rounded-lg border-2 border-blue-500 object-cover"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="flex flex-col gap-2 m-4">
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
                            flex justify-around w-[56px] items-center rounded-full
                            ${showDescription && "bg-medwork-dark2 text-medwork-light2 dark:bg-medwork-light dark:text-medwork-dark"}
                            border border-medwork-brown dark:border-gray-400
                            hover:bg-medwork-dark hover:dark:bg-medwork-light
                            text-medwork-brown dark:text-gray-400
                            hover:text-medwork-light2 hover:dark:text-medwork-dark2
                        `}
                    >
                        {showDescription ? <MdExpandLess /> : <MdExpandMore />}
                        <span>CV</span>
                    </button>
                </div>

                {showDescription && (
                    <div className="block sm:hidden">
                        <div className="flex flex-col">
                            {description.map((item, index) => (
                                <p key={index} className="
                                mt-4 overflow-ellipsis
                                font-light narrow-letters leading-relaxed
                                text-md text-left
                            ">{item}</p>))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default MemberCard;
