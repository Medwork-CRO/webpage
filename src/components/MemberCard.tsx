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
    <div className="flex flex-col w-full sm:max-w-[20rem]">
      <div className="flex h-32 w-full justify-center rounded-xl bg-cover">
        <Image
          className={`h-[136px] w-[136px] ${name.length % 2 ? 'rounded-full' : ''} border-2 border-cyan-600 object-cover`}
        src={image}
        alt={title}
        />
      </div>
      <div className="items-top mt-8 flex flex-col text-black dark:text-white">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 justify-center">
            <h4 className="text-bluePrimary text-xl font-bold">{name}</h4>
            <a
              aria-label="By clicking you will be taken to LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
              href={"https://www.linkedin.com/in/" + linkedInTag}
            >
              <FaLinkedin className="antialiased" size={"20px"} />
            </a>
          </div>
          <p className="text-base font-normal text-cyan-600">{title}</p>
        </div>
        <p className="mt-4 overflow-ellipsis text-lg font-normal text-gray-500 dark:text-gray-400 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default MemberCard;