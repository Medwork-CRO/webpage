import Image, { StaticImageData } from "next/image";
import RoundedButton from "./RoundedButton";
import Title from "./Title";

type ImageShowCaseProps = {
  image: StaticImageData;
  title: string;
  description: string;
  description2: string;
  link: string;
};

function ImageShowCase({
  image,
  title,
  description,
  description2,
  link,
}: ImageShowCaseProps) {
  return (
    <div className="relative h-[615px] flex-[0_0_100%]">
      <Image src={image} className="h-full w-full object-cover saturate-150" alt="alt" />
      <div className="absolute inset-0 z-10 bg-cyan-800 opacity-70"></div>

      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center">
        <Title title={title} />
        <span className="text-5xl font-semibold md:text-2xl">
          {description}
        </span>
        <span className="text-md md:text-md">{description2}</span>
        <RoundedButton label={"MORE INFO"} href={link} color={"gray"} />
      </div>
    </div>
  );
}

export default ImageShowCase;
