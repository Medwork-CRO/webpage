import Breadcrumbs from "@/components/Breadcrumb";
import ImageCategory from "@/components/ImageCategory";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety.webp";

const paragraph = [
    "Navigating the realm of clinical trial safety requires diligence and expertise. Although we might not boast extensive experience, our dedication to excellence remains unwavering. Discover how we bring a fresh perspective and commitment to your clinical trial safety needs.",
];

const title = "Our Core Strengths";
const showcases = [
    {
        title: "Focused Approach",
        point: "Despite our relatively young presence, our focus on clinical trial safety is steadfast. We approach each project with an eagerness to learn and a dedication to delivering results.",
    },
    {
        title: "Collaborative Adaptation",
        point: "We understand the unique demands of clinical trial safety. By collaborating closely with your team, we tailor our approach to meet your specific requirements.",
    },
    {
        title: "Growing experience",
        point: "With a history of clinical trial PV execution in over 10 countries, our experience is steadily growing and extending to encompass various territories.",
    },
];

function ClinicalSafety() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="Clinical Trials Safety" />

            <div id="main-content" className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
                    <LeadingParagraphs withLead={false} paragraphs={paragraph} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default ClinicalSafety;
