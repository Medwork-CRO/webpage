import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import LegislationTabs from "./LegislationTabs";

const paragraphs = [
  "The Greek pharmaceutical and medical devices legislation is based on the relevant EU legislation, with a few national adjustments.",
  "In each of the following sections, you will find all original legislative texts, and, where available, an English translation.",
  "If you are interested in receiving a full translation of the texts in English, please contact us at medworkinfo@medwork.gr",
];

function AboutUs() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      {/* <ImageCategory
                image={legislation}
                title="Legislation"
                description=""
            /> */}

      <div
        id="main-content"
        className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col"
      >
        <Breadcrumbs />

        <div className="flex flex-col gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 eq:px-0 py-16">
          <DisplayParagraphs withLead={false} paragraphs={paragraphs} />
          <LegislationTabs />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
