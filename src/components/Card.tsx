import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
  imageData: StaticImageData;
  imageTitle: string;
  imageDescription: string;
  readMoreLink: string;
};

function Card({
  imageData,
  imageTitle,
  imageDescription,
  readMoreLink,
}: CardProps) {
  return (
    <div className="flex transform flex-col gap-2">
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden">
          <Link

            href={readMoreLink}
          >
            <Image
              className="h-[16rem] rounded-lg object-cover sm:h-[12rem]"
              src={imageData}
              alt={imageTitle}
            />
          </Link>
        </div>
        <Link
          className="font-semibold text-xl text-cyan-600 hover:text-cyan-400 hover:underline dark:text-white"
          href={readMoreLink}
        >
          {imageTitle}
        </Link>
      </div>
      <div className="flex flex-col gap-2 h-full justify-between">
        <p className="overflow-ellipsis text-lg font-normal text-gray-500 dark:text-gray-400 md:text-base">
          {imageDescription}
        </p>
      </div>
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
<p className="absolute top-2/3 left-2 w-full text-lg md:text-base text-white p-2 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
{imageDescription}
</p>
</div> */
