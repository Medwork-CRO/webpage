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
      <Image src={image} className="md:h-full h-3/4 md:w-2/3 object-cover" alt="alt" />
      <div className="flex flex-col md:h-full h-1/4 md:w-1/3 items-center justify-center pl-0 pr-0 md:pl-8 md:pr-20">
        <div className="align-left md:leading-9 xl:leading-[4rem] md:font-semibold sm:text-2xl md:text-4xl xl:text-5xl text-gray-500 dark:text-gray-400">
          {description}
        </div>
      </div>
    </div>
  );
}

export default ImageShowCase;
