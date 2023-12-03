import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import ImageInline from "@/components/ImageInline";
import InfoBoxMatrix, { InfoBoxAttributes } from "@/components/InfoBoxMatrix";
import Showcasing from "@/components/Showcasing";
import qualityManagement from "@assets/services/quality-management-vector.jpg";
import quality_assurance_team from "@assets/teams/qa/IMG_9269.jpg";

const introParagraph = ["Combining an excellent knowledge of the pharmaceutical environment, a deep understanding of European and international pharmaceutical quality standards and an unwavering commitment to quality, Medwork provides tailored and cost-effective quality assurance services in the area of Pharmacovigilance (GVP)."];

const title = "Medwork can assist you with";
const showcases = [
    {
        title: "",
        point: "Building a corporate quality-oriented mind-set by improving your personnel's understanding of quality requirements,at all levels and functions throughout your organisation",
    },
    {
        title: "",
        point: "Integrating quality into your daily working environment and processes, while maintaining flexibility as appropriate to the size, needs and particularities of your organisation",
    },
    {
        title: "",
        point: "Ensuring compliance and minimising regulatory risk by improving your responsiveness to a demanding and fast-changing environment",
    },
];

const infoBoxes: InfoBoxAttributes[] = [
    {
        title: "Quality Management System",
        text: "text",
        link: "/services/quality-management/system",
        color: "bg-blue-200",
    },
    {
        title: "GVP AUDITS",
        text: "text",
        link: "/services/quality-management/gvp-audits",
        color: "bg-blue-200",
    }
];

function QualityManagement() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={qualityManagement} title="Quality" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-24 sm:gap-48 px-4 sm:px-6 lg:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={introParagraph} />
                    <Showcasing title={title} showcases={showcases} />
                    <InfoBoxMatrix infoBoxes={infoBoxes} />
                    <ImageInline image={quality_assurance_team}/>
                </div>
            </div>
        </div>
    );
}

export default QualityManagement;