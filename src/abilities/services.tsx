import cosmeticovigilance from "@assets/services/cosmeticovigilance.jpg";
import materiovigilance from "@assets/services/materiovigilance.jpg";
import pharmacovigilance from "@assets/services/pharmacovigilance.jpg";
import qualityManagement from "@assets/services/qualityManagement.jpg";
import Image, { StaticImageData } from "next/image";
import "react-multi-carousel/lib/styles.css";

function ImageShowcase({
  imageData,
  imageTitle,
}: {
  imageData: StaticImageData;
  imageTitle: string;
}) {
  return (
    <div className="relative">
      <Image
        className="h-96 rounded-xl object-none"
        src={imageData}
        alt={imageTitle}
      />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-2xl font-bold text-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
        {imageTitle}
      </span>
    </div>
  );
}

export default function Services() {
  return (
    <section className="">
      <div className="grid-rows-4 md:grid-cols-4 grid w-full gap-2">
        <ImageShowcase
          imageData={cosmeticovigilance}
          imageTitle={"Cosmeticovigilance"}
        />
        <ImageShowcase
          imageData={materiovigilance}
          imageTitle={"Materiovigilance"}
        />
        <ImageShowcase
          imageData={pharmacovigilance}
          imageTitle={"Pharmacovigilance"}
        />
        <ImageShowcase
          imageData={qualityManagement}
          imageTitle={"Quality Management"}
        />
      </div>
    </section>
  );
}
