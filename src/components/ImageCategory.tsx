import Image, { StaticImageData } from "next/image";

type ImageCategoryProps = {
  title: string;
  image: StaticImageData;
  description?: string;
  textSide?: "left" | "right";
};

function ImageCategory({
  title,
  description,
  image,
  textSide,
}: ImageCategoryProps) {
  const bgGradient = !textSide || textSide === "left" ? "bg-gradient-to-t" : "bg-gradient-to-t";

  return (
    <>
      <div className="relative w-full md:flex-row h-screen hidden md:block motion-safe:animate-fadeIn text-[#2d333b] dark:text-[#f6f1eb]">
        <Image
          src={image}
          className="h-full min-w-full object-cover"
          alt="alt"
        />

        <div
          className={`absolute inset-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent ${bgGradient}`}
        ></div>

        <div className="absolute top-3/4 z-20 -translate-y-1/2 transform w-full">
          <div className={`flex flex-col select-none justify-center gap-8 px-4 md:px-6 lg:px-0 max-w-[86rem] mx-auto ${!textSide || textSide === "left"
            ? "text-left"
            : "text-right"
            }`}>
            <h1 className="font-semibold italic text-2xl md:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="text-xl md:text-4xl xl:text-5xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:hidden text-[#2d333b] dark:text-[#f6f1eb]">
        <Image src={image} alt="Image for mobile" />
        <div className="mx-4 sm:mx-6 lg:mx-0 border-b border-b-[#2d333b] dark:border-b-[#f6f1eb]">
          <div className="mt-8 md:mt-0">
            <h1 className="mb-4 text-2xl italic text-center">{title}</h1>
            <p className="mb-4 text-lg">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCategory;
