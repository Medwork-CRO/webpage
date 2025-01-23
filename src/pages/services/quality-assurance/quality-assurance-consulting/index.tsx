import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import qualityAssurance from "@assets/services/quality-assurance.webp";

const introParagraph = [
  "Medwork is ideally situated in a geographical area with an increasing need for pharmaceutical quality services. Clinical trials and pharmacovigilance systems in Southeast Europe and the Middle East are required to be audited against the same quality standards as those in Northwest Europe. Cooperation with a reliable regional partner can contribute to reducing travel and frustration for your staff as well as lowering expenses for your organization.",
];

const title = "Medwork can assist you with";
const showcases = [
  {
    title: "Building a corporate quality-oriented mind-set",
    point:
      "by improving your personnel's understanding of quality requirements at all levels and functions throughout your organization",
  },
  {
    title: "Integrating quality into your daily working environment",
    point:
      "and processes while maintaining flexibility appropriate to the size, needs and particularities of your organisation",
  },
  {
    title: "Ensuring compliance and minimising regulatory risk",
    point:
      "by improving your responsiveness to a demanding and fast-changing environment",
  },
  {
    title: "GVP audits/ inspections preparation and follow-up.",
    point: "",
  },
];

function CaseProcessing() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory
        image={qualityAssurance}
        title="QUALITY ASSURANCE CONSULTING"
      />

      <div
        id="main-content"
        className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col"
      >
        <Breadcrumbs />

        <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
          <DisplayParagraphs withLead={false} paragraphs={introParagraph} />
          <Showcasing title={title} showcases={showcases} />
        </div>
      </div>
    </div>
  );
}

export default CaseProcessing;
