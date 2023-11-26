import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
  index: number,
  imageData: StaticImageData;
  imageTitle: string;
  imageDescription: string;
  readMoreLink: string;
};

function Card({
  index,
  imageData,
  imageTitle,
  imageDescription,
  readMoreLink,
}: CardProps) {
  return (
    <div className="group flex transform flex-col gap-8">
      <Link href={readMoreLink}>
        <div tabIndex={index} className="
          flex flex-col gap-6 p-4 rounded-xl border-2 border-transparent
          border-[#bbab9a] dark:border-gray-700
          shadow-sm hover:shadow-2xl focus-visible:shadow-2xl dark:shadow-gray-600
          transition duration-200 ease-in-out
        ">
          <div className="overflow-hidden">
            <Image
              className="h-[12rem] sm:h-[16rem] md:h-[24rem] rounded-lg object-cover"
              src={imageData}
              alt={imageTitle}
            />
          </div>
          <div
            className="relative font-extralight narrow-letters text-center text-2xl text-cyan-600 dark:text-white"
          >
            {imageTitle}
            <span className="absolute right-full opacity-0 group-hover:right-0 group-hover:opacity-100 transition-all duration-500">
              →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;

/* <div className="relative">
<Image
className="h-96 rounded-xl object-none"
src={imageData}
alt={imageTitle}
/>
<span className="absolute top-1/3 left-2 text-5xl md:text-2xl font-bold text-left text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageTitle}
</span>
<p className="absolute top-2/3 left-2 w-full text-xl md:text-base text-white p-2 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageDescription}
</p>
</div> */
