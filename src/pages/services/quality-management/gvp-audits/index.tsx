import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety-vector.jpg";

const introParagraph = ["Medwork is ideally situated in a geographical area with an increasing need for pharmaceutical quality services. Clinical trials and pharmacovigilance systems in Southeast Europe and the Middle East are required to be audited against the same quality standards as those in Northwest Europe. Cooperation with a reliable regional partner can contribute to reducing travel and frustration for your staff as well as lowering expenses for your organization."];

const title = "We perform";
const showcases = [
    {
        title: "",
        point: "GVP audits (system and/or project/activity specific audits)",
    },
    {
        title: "",
        point: "Internal audits",
    },
    {
        title: "",
        point: "Vendor/external partner audits",
    },
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="QUALITY MANAGEMENT SUPPORT" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-8 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={introParagraph} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
