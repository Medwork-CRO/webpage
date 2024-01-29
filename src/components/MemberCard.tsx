import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export type MemberInfo = {
    image: StaticImageData;
    name: string;
    title: string;
    description: string[];
    linkedInTag?: string;
};


function MemberCard({
    image,
    name,
    title,
    description,
    linkedInTag,
}: MemberInfo) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
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
            <div className="flex flex-col sm:flex-row md:flex-col items-center gap-8">
                <div className="flex h-[230px] rounded-xl bg-cover">
                    <Image
                        className="w-[156px] rounded-lg border-2 border-blue-500 object-cover"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="items-base flex flex-col text-2xl font-light narrow-letters leading-relaxed">
                        <div className="flex flex-col text-left items-center sm:items-start md:items-center narrow-letters leading-relaxed">
                            <p className="text-bluePrimary text-xl font-extralight">{name}</p>
                            {linkedInTag && <a
                                aria-label="By clicking you will be taken to LinkedIn"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={"https://www.linkedin.com/in/" + linkedInTag}
                            >
                                <FaLinkedin className="antialiased" size={"20px"} />
                            </a>}
                            <p className="text-lg font-thin text-blue-500">{title}</p>
                        </div>
                    </div>

                    <div className="
                        flex flex-col
                        items-center sm:items-start md:items-center text-sm
                        font-light narrow-letters leading-relaxed text-blue-500"
                    >
                        <button
                            onClick={toggleDescription}
                            className="
                                flex justify-around w-[56px]
                                items-center rounded-full
                                border border-blue-500 dark:border-blue-800 hover:bg-blue-200"
                        >
                            {showFullDescription ? (<MdExpandLess />) : (<MdExpandMore />)}
                            <span>CV</span>
                        </button>
                    </div>
                </div>
            </div>
            {showFullDescription && (
                <div className="flex flex-col">
                    {description.map((item, index) => (
                        <p key={index} className="
                            mt-4 overflow-ellipsis
                            font-light narrow-letters leading-relaxed
                            text-sm sm:text-md md:text-lg text-left
                        ">
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

export default MemberCard;
