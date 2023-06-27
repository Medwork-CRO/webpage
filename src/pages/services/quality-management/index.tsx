import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import qualityManagement from "@assets/services/qualityManagement.jpg";

const paragraphs = [
  "Medwork can assist you with:",
  "Building a corporate quality-oriented mind-set by improving your personnel&apos;s understanding of quality requirements, and communicating and enforcing this message at all levels and functions throughout your organization;",
  "Integrating quality into your daily working environment by building quality into all processes, while maintaining flexibility as appropriate to the size and particularities of your organization;",
  "Ensuring compliance and minimizing regulatory risk by improving your responsiveness to a demanding and fast-changing environment.",
];

function QualityManagement() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between">
      <ImageCategory
        image={qualityManagement}
        title="QualityManagement"
        description="Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives."
      />

      <div className="flex max-w-[86em] flex-col items-center gap-6 whitespace-pre-line px-6 text-xl text-gray-500 dark:text-gray-400 sm:px-8 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />
      </div>
    </div>
  );
}

export default QualityManagement;