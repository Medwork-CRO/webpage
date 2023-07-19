import Image, { StaticImageData } from "next/image";

type ImageCategoryProps = {
  title: string;
  description: string;
  image: StaticImageData;
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
      <div className="relative hidden aspect-w-16 aspect-h-9 h-[640px] w-full md:block">
        <Image
          src={image}
          className="h-full min-w-full object-cover"
          alt="alt"
        />
        <div
          className={`absolute inset-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent ${bgGradient}`}
        ></div>

        <div className="absolute top-3/4 z-20 -translate-y-1/2 transform w-full">
          <div className={`flex flex-col justify-center gap-8 max-w-[86rem] mx-auto ${!textSide || textSide === "left"
            ? "text-left"
            : "text-right"
            }`}>
            <span className="text-2xl font-semibold italic md:text-3xl xl:text-4xl">
              {title}
            </span>
            <span className="text-md md:text-xl xl:text-2xl">
              {description}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:hidden">
        <div className="mx-4 sm:mx-6 lg:mx-0 border-b border-b-[#2d333b] dark:border-b-[#f6f1eb]">
          <Image src={image} alt="Image for mobile" />
          <div className="mt-8 md:mt-0 text-[#2d333b] dark:text-[#f6f1eb]">
            <h1 className="mb-4 text-4xl italic">{title}</h1>
            <p className="mb-4 text-lg">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCategory;
