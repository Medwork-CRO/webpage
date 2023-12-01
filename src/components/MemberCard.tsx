import { useState } from "react";
import { MemberInfo } from "@/types/MemberInfo";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

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

    return (
        <div className="flex flex-col w-full">
            <div className="flex h-[200px] w-full justify-center rounded-xl bg-cover">
                <Image
                    className="h-[212px] w-[156px] rounded-lg border-2 border-cyan-500 object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="items-top mt-8 flex flex-col text-2xl font-light narrow-letters leading-relaxed text-medwork-brown dark:text-white">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 justify-center">
                        <h4 className="text-bluePrimary text-xl font-extralight narrow-letters">{name}</h4>
                        {linkedInTag && <a
                            aria-label="By clicking you will be taken to LinkedIn"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={"https://www.linkedin.com/in/" + linkedInTag}
                        >
                            <FaLinkedin className="antialiased" size={"20px"} />
                        </a>}
                    </div>
                    <p className="text-base font-thin narrow-letters text-cyan-500">{title}</p>
                </div>
                <div className="mt-4 flex flex-col items-center text-sm font-light narrow-letters leading-relaxed text-cyan-500">
                    <button
                        onClick={toggleDescription}
                        className="flex items-center"
                    >
                        {showFullDescription ? (<MdExpandLess className="mr-2 rounded-full border border-cyan-500 dark:border-cyan-800" />) : (<MdExpandMore className="mr-2 rounded-full border border-cyan-500 dark:border-cyan-800" />)}
                        READ BIO
                    </button>
                    {showFullDescription && (
                        description.map((item, index) => (
                            <p key={index} className="mt-4 overflow-ellipsis font-light narrow-letters leading-relaxed text-2xl md:text-base transform transition duration-200 ease-in-out">
                                {item}
                            </p>
                        ))
                    )}

                </div>
            </div>
        </div>
    );
}

export default MemberCard;
