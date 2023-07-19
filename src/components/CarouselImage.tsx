import Image, { StaticImageData } from 'next/image';

type ImageShowCaseProps = {
  image: StaticImageData;
  title?: string;
};

function CarouselImage({ image, title }: ImageShowCaseProps) {
  return (
    <div className="flex flex-col md:flex-row h-[520px] sm:h-[670px] md:h-[770px] lg:h-[870px] flex-[0_0_100%] relative">
      <Image
        src={image}
        className="h-full min-w-full object-cover"
        alt="alt"
      />

      <div className="absolute inset-x-0 top-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent bg-gradient-to-b h-[6%]"></div>
      <div className="absolute inset-x-0 bottom-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent bg-gradient-to-t h-5/6"></div>

      <div className="absolute bottom-8 sm:bottom-16 z-20 w-full">
        <div className="flex flex-col justify-center gap-8 max-w-[86rem] px-4 md:px-6 lg:px-0 mx-auto text-[#2d333b] dark:text-[#f6f1eb] text-left">
          <span className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarouselImage;
