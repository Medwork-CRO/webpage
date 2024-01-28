import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import qualityAssurance from "@assets/stock-images/Quality Assurance.jpg";

// const paragraphs = ["At Medwork, we specialize in the comprehensive development, enhancement, and vigilant monitoring of your Quality Management System (QMS) to ensure alignment with industry standards and regulations."];

const paragraphs = ["Our local QA experts work closely with your team to oversee and manage the QA aspects of your PV processes"];

const title = "This includes";
const showcases = [
    {
        title: "",
        point: "Ensuring compliance with local and international regulations",
    },
    {
        title: "",
        point: "Liaise with Global QA personnel",
    },
    {
        title: "",
        point: "Development of local SOPs and localization of global SOPs",
    },
    {
        title: "",
        point: "Support during internal audits",
    },
    {
        title: "",
        point: "Providing ongoing support for continuous improvement",
    },
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={qualityAssurance} title="QA PERSONNEL" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
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
