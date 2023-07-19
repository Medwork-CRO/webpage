import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import cosmetovigilance from "@assets/services/cosmetovigilance.jpg";
import { FaHome } from 'react-icons/fa';

const paragraphs = [
  "We have great people working for the best causes",
  "Establishing a cosmetovigilance system",
  "Collection and assessment of undesirable events",
  "Handling of Serious Undesirable Effects (SUE), including expedited reporting to Competent Authorities",
  "Appointment of qualified Medwork personnel as a local contact person",
  "Training of personnel on cosmetovigilance, as legally required",
];

function Outsourcing() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Services",
            path: "",
          },
          {
            label: "Outsourcing",
            path: "/services/outsourcing",
          }
        ]}
      />
      <ImageCategory
        image={cosmetovigilance}
        title="Outsourcing"
        description="Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives."
      />

      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />
      </div>
    </div>
  );
}

export default Outsourcing;
