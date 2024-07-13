import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import Showcasing from "@/components/Showcasing";
import Statistics from "@/components/Statistics";
import contractImage from "@assets/vectors/employee-happy.png";

const introParagraph = [
    "Medwork offers a unique 3-year non-breach contract designed to kickstart your career in the pharmaceutical industry. This contract not only provides job security but also a pathway to becoming a highly skilled professional with invaluable experience.",
];

const contractDetailsParagraph = [
    "Contract Details",
    "Our 3-year contract includes 6 months of paid education sponsored by Medwork, followed by 2.5 years of work experience with us. The contract ensures competitive salaries with pre-agreed annual increases, setting you on a strong career path. You can break the contract at any time by paying a penalty of 6,000 euros, except in cases of medical emergencies where the penalty is waived.",
];

const careerBenefitsParagraph = [
    "Career Benefits",
    "This contract is an excellent career starter. After completing the 3-year term, you will be well-prepared to continue your career with Medwork at a market salary or pursue opportunities elsewhere. The experience and skills gained during this period make you a desirable candidate for any job in Greece or Europe.",
];

const title = "Why Choose Medwork's 3-Year Contract?";
const showcases = [
    {
        title: "Paid Education",
        point: "Enjoy 6 months of comprehensive training at Medwork's expense, equipping you with the necessary skills for your role."
    },
    {
        title: "Competitive Salary",
        point: "Benefit from a competitive salary with pre-agreed annual increases throughout the contract period."
    },
    {
        title: "Job Security",
        point: "Secure a stable job with a clear career progression plan for 3 years, backed by Medwork's commitment."
    },
    {
        title: "Exceptional Career Prospects",
        point: "After 3 years, your experience with Medwork will open doors to numerous job opportunities across Europe."
    },
];

const statistics = [
    { count: 80, symbol: "%", title: "continue after", point: "the contract's end" },
    { count: 99, symbol: "%", title: "have an", point: "upwards career trajectory" },
    { count: 94, symbol: "%", title: "follow through", point: "with the contract" },
];

function EmployeeContract() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={contractImage}
                title="Employee Contract"
                description=""
            />

            <div id="main-content" className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
                    <LeadingParagraphs withLead={true} paragraphs={introParagraph} />
                    <Statistics Stats={statistics} />
                    <DisplayParagraphs withLead={true} paragraphs={contractDetailsParagraph} />
                    <DisplayParagraphs withLead={true} paragraphs={careerBenefitsParagraph} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default EmployeeContract;
