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
        <div className="flex flex-col items-center content-center">
            <div className="flex flex-col sm:flex-row md:flex-col items-center content-center">
                <div className="flex h-[230px] rounded-xl bg-cover">
                    <Image
                        className="w-[156px] rounded-lg border-2 border-blue-500 object-cover"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="items-top flex flex-col justify-between px-4">
                    <div className="items-top mt-0 sm:mt-8 flex flex-col text-2xl font-light narrow-letters leading-relaxed text-medwork-brown dark:text-white">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center">
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
                            <p className="text-base font-thin narrow-letters text-blue-500">{title}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center text-sm font-light narrow-letters leading-relaxed text-blue-500">
                        <button
                            onClick={toggleDescription}
                            className="flex justify-around w-[56px] items-center rounded-full border border-blue-500 dark:border-blue-800 hover:bg-blue-200"
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
                            mt-4 overflow-ellipsis font-light narrow-letters leading-relaxed text-sm transform transition duration-200 ease-in-out
                        ">
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MemberCard;
