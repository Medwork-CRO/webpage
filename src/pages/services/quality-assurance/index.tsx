import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import InfoBoxMatrix, { InfoBoxAttributes } from "@/components/InfoBoxMatrix";
import qualityAssurance from "@assets/services/quality-assurance.webp";

const introParagraph = [
  "At Medwork, we recognize that maintaining the highest standards in pharmacovigilance is paramount for ensuring the safety of pharmaceutical products. Combining excellent knowledge of the pharmaceutical environment, a deep understanding of European and international pharmaceutical quality standards, and an unwavering commitment to quality, Medwork provides tailored and cost-effective quality assurance services in the area of pharmacovigilance (GVP).",
];

export const infoBoxes: InfoBoxAttributes[] = [
  {
    title: "Quality Management Systems",
    text: "A robust Quality Management System (QMS) is the backbone of effective pharmacovigilance. Whether you need a new QMS established, an existing one reviewed, or enhancements for continuous improvement, our experts work closely with you to tailor solutions that align with your requirements.",
    link: "/services/quality-assurance/quality-management-systems",
    color: "bg-blue-200",
  },
  {
    title: "QA personnel",
    text: "Ensure the seamless functioning of your pharmacovigilance department's quality structure with our dedicated local QA personnel. These professionals serve as the responsible QA persons for PV operations and bring a deep understanding of local regulatory nuances. Their expertise contributes to the overall effectiveness of your pharmacovigilance system.",
    link: "/services/quality-assurance/qa-personnel",
    color: "bg-blue-200",
  },
];

function QualityAssurance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={qualityAssurance} title="Quality Assurance" />

      <div
        id="main-content"
        className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col"
      >
        <Breadcrumbs />

        <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
          <DisplayParagraphs withLead={false} paragraphs={introParagraph} />
          <InfoBoxMatrix infoBoxes={infoBoxes} />
        </div>
      </div>
    </div>
  );
}

export default QualityAssurance;
