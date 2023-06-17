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
      <div className="relative hidden aspect-w-16 aspect-h-9 h-max-[515px] h-min-[515px] w-full max-w-[86em] flex-[0_0_100%] md:block text-white">
        <Image
          src={image}
          className="h-full min-w-full object-cover"
          alt="alt"
        />
        <div
          className={`absolute inset-0 z-10 from-cyan-700 to-transparent ${
            !textSide || textSide === "left"
              ? "bg-gradient-to-r"
              : "bg-gradient-to-l"
          }`}
        ></div>

        <div
          className={`absolute top-3/4 z-20 flex w-1/2 -translate-y-1/2 transform flex-col justify-center gap-8 px-8 md:px-12 lg:px-24 ${
            !textSide || textSide === "left"
              ? "text-left"
              : "left-1/2 text-right"
          }`}
        >
          <span className=" text-xl font-semibold italic md:text-2xl xl:text-3xl">
            {title}
          </span>
          <span className="text-md font-thin md:text-xl xl:text-2xl">
            {description}
          </span>
        </div>
      </div>

      {/* this part is for mobile devices */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative md:hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700"></div>
          <div className="relative z-10 float-left p-6 md:p-12">
            <div className="md:hidden">
              <Image src={image} alt="Image for mobile" className="" />
            </div>
            <div className="mt-8 md:mt-0">
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

/* <div className="relative">
<Image
className="h-96 rounded-xl object-none"
src={imageData}
alt={imageTitle}
/>
<span className="absolute top-1/3 left-2 text-5xl md:text-2xl font-bold text-left text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageTitle}
</span>
<p className="absolute top-2/3 left-2 w-full text-lg md:text-base text-white p-2 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageDescription}
</p>
</div> */
