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
  return (
    <>
      <div className="relative hidden aspect-w-16 aspect-h-9 h-max-[515px] h-min-[515px] w-full max-w-[86rem] flex-[0_0_100%] md:block">
        <Image
          src={image}
          className="h-full min-w-full object-cover"
          alt="alt"
        />
        <div
          className={`absolute inset-0 z-10 from-cyan-600 dark:from-cyan-800 to-transparent ${!textSide || textSide === "left"
              ? "bg-gradient-to-t"
              : "bg-gradient-to-t"
            }`}
        ></div>

        <div
          className={`absolute text-[#f6f1eb] top-3/4 z-20 flex w-1/2 -translate-y-1/2 transform flex-col justify-center gap-8 px-8 md:px-12 lg:px-24 ${!textSide || textSide === "left"
              ? "text-left"
              : "left-1/2 text-right"
            }`}
        >
          <span className=" text-2xl font-semibold italic md:text-3xl xl:text-4xl">
            {title}
          </span>
          <span className="text-md font-thin md:text-xl xl:text-2xl">
            {description}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700"></div>
          <div className="relative z-10 float-left p-6 md:p-12">
            <div>
              <Image src={image} alt="Image for mobile" />
            </div>
            <div className="mt-8 md:mt-0 text-[#f6f1eb]">
              <h1 className="mb-4 text-4xl italic">{title}</h1>
              <p className="mb-4 text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCategory;
