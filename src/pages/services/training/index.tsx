import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import training from "@assets/services/training-vector.jpg";

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
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={training}
                title="Training"
                description="Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives."
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />
                <div className="w-full flex flex-col items-left gap-12 px-4 sm:px-6 py-16 lg:px-0 whitespace-pre-line text-gray-500 dark:text-gray-400">
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs} />
                </div>
            </div>
        </div>
    );
}

export default Training;
