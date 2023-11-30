import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import outsourcing from "@assets/services/outsourcing-vector.jpg";

const paragraphs = [
    "We have great people working for the best causes",
    "Establishing a outsourcing system",
    "Collection and assessment of undesirable events",
    "Handling of Serious Undesirable Effects (SUE), including expedited reporting to Competent Authorities",
    "Appointment of qualified Medwork personnel as a local contact person",
    "Training of personnel on outsourcing, as legally required",
];

function Outsourcing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={outsourcing}
                title="Outsourcing"
                description="Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives."
            />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />

                <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs} />
                </div>
            </div>
        </div>
    );
}

export default Outsourcing;
