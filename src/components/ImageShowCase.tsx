import Image, { StaticImageData } from 'next/image';

type ImageShowCaseProps = {
  image: StaticImageData;
  description: string;
};

function ImageShowCase({ image, description }: ImageShowCaseProps) {
  return (
    <div className="flex flex-col md:flex-row h-[520px] sm:h-[670px] md:h-[770px] lg:h-[870px] flex-[0_0_100%] relative">
      <Image
        src={image}
        className="h-full min-w-full object-cover"
        alt="alt"
      />
      <div className="absolute inset-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent bg-gradient-to-t"></div>

      <div
        className="absolute top-3/4 z-20 flex -translate-y-1/2 transform flex-col justify-center gap-8 px-8 md:px-12 lg:px-24">
        <span className="font-semibold leading-[2rem] sm:leading-[2rem] md:leading-[3rem] xl:leading-[4rem] text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#2d333b] dark:text-[#f6f1eb] text-left">
          {description}
        </span>
      </div>
    </div>
  );
}

export default ImageShowCase;

{/* <div className="flex flex-col md:flex-row h-[670px] flex-[0_0_100%] relative">
      <div className="md:w-2/3 w-full h-3/4 md:h-full relative">
        <Image src={image} className="h-full w-full object-cover" alt="Showcase image" />
      </div>
      <div className="md:w-1/3 w-full h-1/4 md:h-full flex items-center justify-center pl-0 pr-0 md:pl-8 md:pr-20 p-5 overflow-hidden">
        <p className="md:leading-[3rem] xl:leading-[3.5rem] font-semibold text-2xl md:text-3xl xl:text-4xl text-gray-800 dark:text-gray-400 whitespace-normal overflow-hidden">
          {description}
        </p>
      </div>
    </div> */}