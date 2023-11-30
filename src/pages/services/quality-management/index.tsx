import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import InfoBoxMatrix, { InfoBoxAttributes } from "@/components/InfoBoxMatrix";
import Showcasing from "@/components/Showcasing";
import qualityManagement from "@assets/services/quality-management-vector.jpg";

const introParagraph = ["Combining an excellent knowledge of the pharmaceutical environment, a deep understanding of European and international pharmaceutical quality standards and an unwavering commitment to quality, Medwork provides tailored and cost-effective quality management services in the area of Pharmacovigilance (GVP). Medwork can assist you with"];

const title = "Medwork can assist you with";
const showcases = [
    {
        title: "",
        point: "Building a corporate quality-oriented mind-set by improving your personnel's understanding of quality requirements, and communicating and enforcing this message at all levels and functions throughout your organization",
    },
    {
        title: "",
        point: "Integrating quality into your daily working environment by building quality into all processes, while maintaining flexibility as appropriate to the size and particularities of your organization",
    },
    {
        title: "",
        point: "Ensuring compliance and minimizing regulatory risk by improving your responsiveness to a demanding and fast-changing environment",
    },
];

const infoBoxes: InfoBoxAttributes[] = [
    {
        title: "Quality Management Support",
        text: "text",
        link: "/services/quality-management/support",
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
            <ImageCategory image={qualityManagement} title="Quality Management" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-8 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={introParagraph} />
                    <Showcasing title={title} showcases={showcases} />
                    <InfoBoxMatrix infoBoxes={infoBoxes} />
                </div>
            </div>
        </div>
    );
}

export default QualityManagement;