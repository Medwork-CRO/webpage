import Image, { StaticImageData } from "next/image";

type ImageCategoryProps = {
  image: StaticImageData;
  title?: string;
  description?: string;
  textSide?: "left" | "right";
};

function ImageCategory({ image, title, description }: ImageCategoryProps) {
  return (
    <div className="relative flex flex-col md:flex-row] w-full flex-[0_0_100%] motion-safe:animate-fadeIn justify-center">
      <Image
        src={image}
        className="h-[50vh] w-full object-cover"
        alt={`${title} ${description}`}
      />

      {/* <div className="absolute inset-x-0 bottom-0 z-10 h-full bg-medwork-dark bg-opacity-60"></div> */}
      {/* <div className="absolute inset-x-0 bottom-0 z-10 from-medwork-light dark:from-medwork-dark to-transparent bg-gradient-to-t h-5/6"></div> */}

      <div className="absolute bottom-8 sm:bottom-16 z-20 w-full mb-8 sm:mb-2">
        <div className="flex flex-col justify-center gap-8 w-full max-w-[1200px] px-4 md:px-6 eq:px-0 mx-auto text-medwork-light text-start">
          <div className="flex flex-col gap-4 mt-4 md:mt-0">
            <h1 className="text-4xl sm:text-6xl hidden">{title}</h1>
            {description && (
              <p className="mb-4 text-md sm:text-3xl">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCategory;
