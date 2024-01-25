import Breadcrumbs from "@/components/Breadcrumb";
import ImageCategory from "@/components/ImageCategory";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/stock-images/Safety.jpg";

const paragraph = [
    "Efficient ICSR Case Processing Crafted to Client's Requirements: With an extended team of dedicated pharmacovigilance professionals, we manage all aspects of ICSR processing, seamlessly adapting to client's urgent or substantial caseloads.",
];

const paragraph2 = [
    "Partner with us for a synergy of skilled professionals, adaptable solutions, and a robust quality assurance framework. Our ICSR case processing meets industry standards of accuracy and efficiency, tailored to client's specific needs.",
];

const title = "Our Core Strengths";
const showcases = [
    {
        title: "Dedicated Professionals",
        point: "Our skilled team of pharmacovigilance experts is committed to efficient and accurate ICSR processing, ensuring meticulous attention to detail.",
    },
    {
        title: "Urgent and High-Volume adaptability",
        point: "We are equipped to adapt to urgent or high volume ICSR processing requirements, delivering timely solutions without compromising on quality.",
    },
    {
        title: "Database Expertise",
        point: "Leveraging our PV Database and extensive experience with major PV databases, we ensure case processing tailored to specific client needs.",
    },
    {
        title: "Flexible Compliance",
        point: "Our adeptness at navigating a wide range of requirements and systems enables us to accommodate diverse compliance standards, ensuring seamless integration.",
    },
    {
        title: "3-Step process  including Medical Doctors expertise",
        point: "Clients benefit from our comprehensive 3-step approach, encompassing initial processing, expert medical assessment by qualified Medical Doctors, and thorough Quality Control checks by experienced PV personnel.",
    },
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="CASE PROCESSING" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <LeadingParagraphs withLead={false} paragraphs={paragraph} />
                    <Showcasing title={title} showcases={showcases} />
                    <LeadingParagraphs withLead={false} paragraphs={paragraph2} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
