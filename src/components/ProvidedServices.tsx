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
      "CosmeticoVigilance is our comprehensive suite of services geared towards ensuring the safety, compliance, and quality of cosmetic products. We adhere to rigorous industry standards and global regulations.",
  },
  {
    imageData: materiovigilance,
    imageTitle: "MATERIOVIGILANCE",
    imageDescription:
      "Our MaterioVigilance services employ advanced monitoring techniques to safeguard the performance and safety of medical devices. We provide thorough post-market surveillance and regulatory support.",
  },
  {
    imageData: pharmacovigilance,
    imageTitle: "PHARMACOVIGILANCE",
    imageDescription:
      "PharmacoVigilance is our dedicated service ensuring the safety, efficacy, and risk/benefit balance of pharmaceutical products. We provide detailed drug safety and adverse event reporting services.",
  },
  {
    imageData: qualityManagement,
    imageTitle: "QUALITY MANAGEMENT",
    imageDescription:
      "Our Quality Management service is designed to help organizations maintain and exceed industry standards of quality and compliance. We provide comprehensive quality systems, audits, and continuous improvement strategies.",
  },
];

function ProvidedServices() {
  return (
    <div className="flex flex-wrap max-w-5xl gap-24 mx-4 justify-around">
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
  );
}

export default ProvidedServices;
