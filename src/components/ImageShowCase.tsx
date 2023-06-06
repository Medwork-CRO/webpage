import Image, { StaticImageData } from "next/image";
import RoundedButton from "./RoundedButton";
import Title from "./Title";

function ImageShowCase({ image }: { image: StaticImageData }) {
  return (
    // 👇 style each individual slide.
    // relative - needed since we use the fill prop from next/image component
    // h-64 - arbitrary height
    // flex[0_0_100%]
    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
    <div className="relative h-[615px] flex-[0_0_100%]">
      <Image src={image} fill className="saturate-150" alt="alt" />
      <div className="absolute inset-0 z-10 bg-cyan-800 opacity-70"></div>

      <div className="absolute top-1 z-20 mx-24 my-48 flex flex-col items-center justify-center gap-8 text-center text-white">
        <Title title={"CORE SERVICES"} />
        <span className="text-5xl font-semibold md:text-2xl">
          Medwork is a Contract Research Organization (CRO) operating in
          Southeast Europe, which since 2005 offers a wide range of specialized
          services to the pharmaceutical and medical device industries
        </span>
        <span className="text-md md:text-md">
          A Contract Research Organization (CRO) is a company that provides
          support to the pharmaceutical, biotechnology, and medical device
          industries in the form of research services outsourced on a contract
          basis. At our CRO, we have experience and expertise with a diverse
          range of Therapeutic Areas and focus on innovative, technology-enabled
          solutions that allow our clients to focus on their core strengths.
        </span>
        <RoundedButton label={"MORE INFO"} href={""} color={"gray"} />
      </div>
    </div>
  );
}

export default ImageShowCase;
