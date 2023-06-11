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
    <div className="flex w-full transform flex-col justify-between gap-2 rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            className="h-[16rem] w-full rounded-2xl object-cover sm:h-[12rem]"
            src={imageData}
            alt={imageTitle}
          />
        </div>
        <p className="text-base font-normal text-cyan-600">{imageTitle}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="overflow-ellipsis text-lg font-normal text-gray-700 md:text-base">
          {imageDescription}
        </p>
        <Link
          className="font-semibold text-black underline"
          href={readMoreLink}
        >
          Learn More
        </Link>
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
