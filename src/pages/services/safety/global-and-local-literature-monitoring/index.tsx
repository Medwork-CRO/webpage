import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import ImageInline from "@/components/ImageInline";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety-vector.jpg";
import lmlm_team from "@assets/teams/lmlm/IMG_9215.jpg";

const paragraph1 = [
    "Global MLM",
    "Unlock a mature system supported by an experienced team with our Global Literature Monitoring service. Our deep expertise and client-centric approach redefine maximal accuracy, consistency, compliance and well designed and executed processes.",
];

const paragraph2 = [
    "Local MLM",
    "Elevate your pharmacovigilance strategy with our exceptional Local Literature Monitoring services. Our process ensures accuracy and thoroughness in identifying crucial safety information.",
];

const title = "Our Core Strengths";
const showcases = [
    {
        title: "Profound Expertise",
        point: "Our team's extensive experience, bolstered by continuous training and knowledge sharing among members, ensures meticulous scrutiny of safety data.",
    },
    {
        title: "Tailored Adaptability",
        point: "We customise our service to client needs, ensuring seamless alignment with scope, depth, and specific requirements.",
    },
    {
        title: "SOP Alignment",
        point: "Our integration with client Standard Operating Procedures (SOPs) assures compliance and consistency with established protocols.",
    },
    {
        title: "Medical Doctor Engagement",
        point: "Our service benefits from the involvement of Medical Doctors, who offer in-depth medical insights for complex, intricate, or ambiguous cases.",
    },
];

const title2 = "Our Core Strengths";
const showcases2 = [
    {
        title: "Proven Expertise",
        point: "Benefit from our 15-year-refined process, ensuring accuracy and reliability in each review."
    },
    {
        title: "Medical Doctor Review",
        point: "Exclusively performed by trained, experienced Medical Doctors for a meticulous and informed assessment."
    },
    {
        title: "Comprehensive Coverage",
        point: "We extend beyond medical journals to include conference proceedings - a primary source of safety information - amplifying the scope of our assessment."
    },
    {
        title: "Thorough Examination",
        point: "Our word-by-word, cover-by-cover review leaves no stone unturned, and no detail missed."
    },
    {
        title: "Monthly Quality Checks",
        point: "Regular quality controls, including reviewer performance assessments, underscore our commitment to excellence."
    },
    {
        title: "Extensive Trust",
        point: "Over 70 MAHs rely on us for screening over 1,000 APIs, attesting to our service&apos;s reliability."
    },
    {
        title: "Holistic Recording",
        point: "We document all identified safety information for all pharmaceutical products, enabling comprehensive retrospective reviews."
    },
];

function GlobalAndLocalLiteratureMonitoring() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="GLOBAL AND LOCAL LITERATURE MONITORING" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-24 sm:gap-48 px-4 sm:px-6 lg:px-0 py-16">
                    <DisplayParagraphs withLead={true} paragraphs={paragraph1} />
                    <Showcasing title={title} showcases={showcases} />
                </div>

                <div className="flex flex-col gap-24 sm:gap-48 px-4 sm:px-6 lg:px-0 py-16">
                    <DisplayParagraphs withLead={true} paragraphs={paragraph2} />
                    <Showcasing title={title2} showcases={showcases2} />
                    <ImageInline image={lmlm_team} />
                </div>
            </div>
        </div>
    );
}

export default GlobalAndLocalLiteratureMonitoring;
