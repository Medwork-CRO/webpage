import Image, { StaticImageData } from "next/image";
import RoundedButton from "./RoundedButton";

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
    <div className="flex h-[32rem] w-[24rem] transform flex-col justify-between rounded-2xl bg-[#eae4dd] p-6 shadow-md transition-all hover:scale-105">
      <div className="flex flex-col justify-between gap-6">
        <div className="h-24 overflow-hidden rounded-2xl">
          <Image
            className="h-full w-full object-cover"
            src={imageData}
            alt={imageTitle}
          />
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-2xl">
          {imageTitle}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 md:text-base">
          {imageDescription}
        </p>
      </div>
      <RoundedButton label="READ MORE" href={readMoreLink} color="orange" />
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
