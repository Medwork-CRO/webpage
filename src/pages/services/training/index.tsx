import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import cosmetovigilance from "@assets/services/cosmetovigilance.jpg";

const paragraphs = [
  "Our services include:",
  "Establishing a cosmetovigilance system",
  "Collection and assessment of undesirable events",
  "Handling of Serious Undesirable Effects (SUE), including expedited reporting to Competent Authorities",
  "Appointment of qualified Medwork personnel as a local contact person",
  "Training of personnel on cosmetovigilance, as legally required",
];

function Training() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between">
      <ImageCategory
        image={cosmetovigilance}
        title="Training"
        description="Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives."
      />

      <div className="flex max-w-[86em] flex-col items-center gap-6 whitespace-pre-line px-6 text-xl text-gray-500 dark:text-gray-400 sm:px-8 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />
      </div>
    </div>
  );
}

export default Training;