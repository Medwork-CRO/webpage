import cosmeticovigilance from "@assets/services/cosmeticovigilance.jpg";
import materiovigilance from "@assets/services/materiovigilance.jpg";
import pharmacovigilance from "@assets/services/pharmacovigilance.jpg";
import qualityManagement from "@assets/services/qualityManagement.jpg";
import { StaticImageData } from "next/image";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

type ImageData = {
  imageData: StaticImageData;
  imageTitle: string;
  imageDescription: string;
};

const images: ImageData[] = [
  {
    imageData: cosmeticovigilance,
    imageTitle: "COSMETICOVIGILANCE",
    imageDescription:
      "Our cosmeticovigilance services ensure the safety and quality of cosmetic products.",
  },
  {
    imageData: materiovigilance,
    imageTitle: "MATERIOVIGILANCE",
    imageDescription:
      "Our materiovigilance services monitor the safety and performance of medical devices.",
  },
  {
    imageData: pharmacovigilance,
    imageTitle: "PHARMACOVIGILANCE",
    imageDescription:
      "Our pharmacovigilance services ensure the safety and efficacy of pharmaceutical products.",
  },
  {
    imageData: qualityManagement,
    imageTitle: "QUALITY MANAGEMENT",
    imageDescription:
      "Our quality management services help organizations maintain high standards of quality and compliance.",
  },
];

function ProvidedServices() {
  return (
    <div className="my-12 flex justify-center">
      <div className="grid max-w-5xl grid-rows-2 gap-16 md:grid-cols-2">
        {images.map((image) => (
          <Card
            key={image.imageTitle}
            imageData={image.imageData}
            imageTitle={image.imageTitle}
            imageDescription={image.imageDescription}
            readMoreLink={""}
          />
        ))}
      </div>
    </div>
  );
}

export default ProvidedServices;
