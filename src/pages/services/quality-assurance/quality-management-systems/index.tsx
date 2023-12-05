import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety-vector.jpg";

const paragraphs = ["At Medwork, we specialize in the comprehensive development, enhancement, and vigilant monitoring of your Quality Management System (QMS) to ensure alignment with industry standards and regulations."];

const title = "Quality Assurance Consulting";
const showcases = [
    {
        title: "Setup and Implementation of Quality Management Systems",
        point: "We customize processes to align with standardized practices, ensuring compliance with legal and regulatory requirements, as well as relevant quality standards.",
    },
    {
        title: "Review of Existing Quality Management Systems",
        point: "We assess your existing quality management systems for compliance, effectiveness, and efficiency. Our experts provide detailed insights, highlighting areas of strength and opportunities for improvement. This strategic evaluation ensures that your QMS continues to evolve, meeting the dynamic demands of industry standards.",
    },
    {
        title: "Re-engineering for Enhanced Compliance and Efficiency",
        point: "We streamline and enhance existing quality management systems, focusing on improving compliance, effectiveness, and efficiency. Development and Review of QMS Documents",
    },
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="QUALITY ASSURANCE SUPPORT" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 lg:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
