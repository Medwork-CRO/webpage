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
    <div className="flex flex-col w-[24rem] rounded-2xl bg-[#ece9e6] p-6 shadow-md">
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{
          backgroundImage: "url('https://i.ibb.co/FWggPq1/banner.png')",
        }}
      >
        <div className="absolute -bottom-12 flex h-[136px] w-[136px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          {/* <img
            className="h-full w-full rounded-full"
            src="https://i.ibb.co/6YbS9ff/avatar11.png"
            alt=""
          /> */}
          <Image
            className="h-full w-full rounded-full object-cover"
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className="items-top mt-16 flex flex-col text-black">
        <div className="flex items-center gap-2">
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
        <p className="text-lightSecondary text-base text-cyan-500 font-normal">{title}</p>
        <p className="mt-4 overflow-ellipsis text-lg font-normal text-gray-700 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default MemberCard;

/* <div className="flex w-[24rem] flex-col justify-between rounded-2xl bg-[#eae4dd] p-6 shadow-md">
      <div className="relative flex flex-col gap-6">
        <div className="h-46 w-full">
          <Image
            className="absolute h-full w-full rounded-xl object-cover"
            src={headerImage}
            alt={title}
          />
        </div>
        <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="mt-16 flex flex-col items-center text-black">
          <h4 className="text-bluePrimary text-xl font-bold">{name}</h4>
          <p className="text-lightSecondary text-base font-normal">{title}</p>
        </div>
        <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-2xl">
          <span>{title}</span>
          <a
            aria-label="By clicking you will be taken to LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.linkedin.com/in/" + linkedInTag}
          >
            <FaLinkedin className="antialiased" size={"20px"} />
          </a>
        </h2>
        <button className="text-black" onClick={toggleDescription}>
          {showDescription ? (
            <span className="flex gap-2">
              <span>Hide bio</span> <FaAngleDown />
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <span>Read bio</span> <FaAngleDown />
            </div>
          )}
        </button>
        {showDescription && (
          <p className="overflow-ellipsis text-lg font-normal text-gray-700 md:text-base">
            {description}
          </p>
        )}
      </div>
    </div> */
