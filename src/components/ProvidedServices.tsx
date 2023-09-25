import outsourcing from "@assets/services/outsourcing-vector.jpg";
import safety from "@assets/services/safety-vector.jpg";
import qualityManagement from "@assets/services/quality-management-vector.jpg";
import { StaticImageData } from "next/image";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Title from "./Title";

type ImageData = {
  imageData: StaticImageData;
  imageTitle: string;
  imageDescription: string;
  readMoreLink: string;
};

const images: ImageData[] = [
  {
    imageData: safety,
    imageTitle: "SAFETY",
    readMoreLink: "/services/safety",
    imageDescription:
      "Pharmacovigilance is our dedicated service ensuring the safety, efficacy, and risk/benefit balance of pharmaceutical products. We provide detailed drug safety and adverse event reporting services.",
  },
  {
    imageData: qualityManagement,
    imageTitle: "QUALITY MANAGEMENT",
    readMoreLink: "/services/quality-management",
    imageDescription:
      "Our Quality Management service is designed to help organizations maintain and exceed industry standards of quality and compliance. We provide comprehensive quality systems, audits, and continuous improvement strategies.",
  },
  {
    imageData: outsourcing,
    imageTitle: "OUTSOURCING",
    readMoreLink: "/services/outsourcing",
    imageDescription:
      "Outsourcing is our service designed to help organizations manage their pharmacovigilance and regulatory affairs needs. We provide comprehensive outsourcing solutions tailored to your organization needs.",
  },
  // {
  //   imageData: cosmetovigilance,
  //   imageTitle: "COSMETICOVIGILANCE",
  //   readMoreLink: "/services/cosmetovigilance",
  //   imageDescription:
  //     "Cosmeticovigilance is our comprehensive suite of services geared towards ensuring the safety, compliance, and quality of cosmetic products. We adhere to rigorous industry standards and global regulations.",
  // },
  // {
  //   imageData: training,
  //   imageTitle: "TRAINING",
  //   readMoreLink: "/services/training",
  //   imageDescription:
  //     "Our Training service is designed to help organizations train their staff in pharmacovigilance and regulatory affairs. We provide comprehensive training solutions tailored to your organization needs.",
  // },
  // {
  //   imageData: materiovigilance,
  //   imageTitle: "MATERIOVIGILANCE",
  //   readMoreLink: "/services/materiovigilance",
  //   imageDescription:
  //     "Our Materiovigilance services employ advanced monitoring techniques to safeguard the performance and safety of medical devices. We provide thorough post-market surveillance and regulatory support.",
  // },
];

function ProvidedServices() {
  return (
    <div className="flex flex-col gap-0">
      <Title title={"Core Services"} />
      <div className="grid transform gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-12 lg:my-16">
        {images.map((image, i) => (
          <Card
            index={i}
            key={image.imageTitle}
            imageData={image.imageData}
            imageTitle={image.imageTitle}
            imageDescription={image.imageDescription}
            readMoreLink={image.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ProvidedServices;
