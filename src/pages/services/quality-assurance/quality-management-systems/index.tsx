import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import qualityAssurance from "@assets/services/quality-assurance.webp";

const paragraphs = ["We can develop, improve, and monitor your QMS to ensure alignment with industry standards and regulations."];

const title = "Our services include";
const showcases = [
    {
        title: "Setup and Implementation of QMS",
        point: "We customize processes to align with standardized practices, ensuring compliance with legal and regulatory requirements, and relevant quality standards.",
    },
    {
        title: "Review and Improvement of Existing QMS",
        point: "We assess your existing QMS for compliance, effectiveness, and efficiency. Our experts provide detailed insights, highlighting areas of strength and opportunities for improvement. This strategic evaluation ensures that your QMS continues to evolve, meeting the dynamic demands of industry standards.",
    },
    {
        title: "Development and Review of QMS Documents",
        point: "",
    },
    {
        title: "Quality Management Consulting",
        point: "",
    },
    {
        title: "GVP Audits/Inspections",
        point: "Preparation and follow-up.",
    },
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={qualityAssurance} title="Quality Management Systems" />

            <div id="main-content" className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
