import Image, { StaticImageData } from "next/image";
import RoundedButton from "./RoundedButton";
import Title from "./Title";

type ImageShowCaseProps = {
  image: StaticImageData;
  title: string;
  description: string;
  description2: string;
  link: string;
};

function ImageShowCase({
  image,
  title,
  description,
  description2,
  link,
}: ImageShowCaseProps) {
  return (
    <div className="flex flex-col sm:flex-row h-[815px] w-full flex-[0_0_100%]">
      {/* <div className="absolute inset-0 z-10 bg-cyan-800 opacity-70"></div> */}

      <div className="flex flex-col w-1/3 items-center justify-center gap-8 sm:ml-16 text-gray-500 dark:text-gray-400">
        <div className="flex">
          <span
            className={`my-4 text-center text-7xl font-bold italic`}
          // className={`${inter.variable} dark:text-white text-xl font-semibold text-gray-400 xs:text-3xl`}
          >
            {/*  text-cyan-500 */}
            {/* &#8226;  */}
            {title}
          </span>
        </div>
        <span className="text-center text-xl font-semibold md:text-4xl xl:text-6xl">
          {description}
        </span>
        <span className="text-xs md:text-xl xl:text-2xl">{description2}</span>
      </div>
      <Image src={image} className="h-full w-2/3 object-cover" alt="alt" />
    </div>
  );
}

export default ImageShowCase;
