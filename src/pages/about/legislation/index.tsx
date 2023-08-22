import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import legislation from "@assets/stock-images/legislation.jpg";
import LegislationTabs from "./LegislationTabs";

const paragraphs = [
  "The Greek pharmaceutical and medical devices legislation is based on the relevant EU legislation, with a few national adjustments.",
  "In each of the following sections, you will find all original legislative texts, and where available an English translation.",
  "If you are interested in receiving a full translation of the texts in English, please contact us at medworkinfo@medwork.gr",
];

function AboutUs() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory
        image={legislation}
        title="Legislation"
        description="We follow the rules and regulations of the countries we operate in."
      />

      <div className="max-w-[1376px] w-full">
        <Breadcrumbs />

        <div className="flex flex-col gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraphs} />
          <LegislationTabs />
        </div>
      </div>
    </div >
  );
}

export default AboutUs;
