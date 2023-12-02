import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import vigilance from "@assets/services/safety-vector.jpg";

const paragraphs = [
    "Enhancing Pharmacovigilance Outcomes: PV Systems and QPPV Services",
    "We understand the criticality of establishing processes that prioritize regulatory compliance, efficiency, and quality. Working closely with our clients, we offer customized solutions that align with regulatory requirements and industry standards.",
];

const title = "Our Core Strengths";
const showcases = [
    {
        title: "Robust Quality System",
        point: "Our services are developed within a thorough quality system, ensuring each deliverable meets the desired and valued standards of our clients.",
    },
    {
        title: "Flexible PV System",
        point: "Customised to meet the unique needs of medium-sized MAHs, or CROs our PV system provides efficient, versatile solutions that ensure compliance and detailed safety oversight for a diverse range of clients.",
    },
    {
        title: "QPPV Expertise",
        point: "Our skilled QPPVs diligently ensure compliance with local and EU regulations and industry best practices, guaranteeing that our client's pharmacovigilance operations adhere to the standards set by competent authorities.",
    },
    {
        title: "Adaptability to Regulations",
        point: "Catering to the varied portfolios, needs, and operating environments of MAHs and CROs, we adeptly handle complex requirements, ensuring compliance without compromising operational efficiency.",
    },
    {
        title: "Holistic Approach",
        point: "Our pharmacovigilance systems and QPPVs adopt a holistic approach, implementing smart and efficient solutions. The holistic approach enables us to steer clear of simplistic solutions that may be problematic in the future, ensuring our deliverables/solutions remain optimal over time.",
    },
];

function Vigilance() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={vigilance} title="PV SYSTEM & QPPV" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-8 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs withLead={true} paragraphs={paragraphs} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default Vigilance;
