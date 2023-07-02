import Image, { StaticImageData } from "next/image";

type ImageShowCaseProps = {
  image: StaticImageData;
  description: string;
};

function ImageShowCase({
  image,
  description,
}: ImageShowCaseProps) {
  return (
    <div className="flex flex-col md:flex-row h-[670px] flex-[0_0_100%]">
      <Image src={image} className="md:h-full h-2/3 md:w-2/3 object-cover" alt="alt" />
      <div className="flex flex-col md:h-full h-1/3 md:w-1/3 items-center justify-center gap-8 pl-6 pr-6 md:pl-8 md:pr-20">
        <span className="text-ellipsis align-left text-semibold text-2xl sm:text-3xl md:text-3xl xl:text-6xl text-gray-500 dark:text-gray-400">
          {description}
        </span>
      </div>
    </div>
  );
}

export default ImageShowCase;
