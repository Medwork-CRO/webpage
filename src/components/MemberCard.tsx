import { MemberInfo } from "@/types/MemberInfo";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

function MemberCard({
  image,
  name,
  title,
  description,
  linkedInTag,
}: MemberInfo) {
  return (
    <div className="flex flex-col w-full min-w-[20rem] max-w-[20rem]">
      <div className="flex h-32 w-full justify-center rounded-xl bg-cover">
        <Image
          className="h-[136px] w-[136px] rounded-full border-2 border-cyan-500 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="items-top mt-8 flex flex-col text-2xl font-light narrow-letters leading-relaxed text-medwork-brown dark:text-white">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 justify-center">
            <h4 className="text-bluePrimary text-xl font-extralight narrow-letters">{name}</h4>
            <a
              aria-label="By clicking you will be taken to LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
              href={"https://www.linkedin.com/in/" + linkedInTag}
            >
              <FaLinkedin className="antialiased" size={"20px"} />
            </a>
          </div>
          <p className="text-base font-thin narrow-letters text-cyan-500">{title}</p>
        </div>
        <p className="mt-4 overflow-ellipsis
          font-light narrow-letters leading-relaxed text-medwork-brown dark:text-gray-400 text-2xl md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default MemberCard;