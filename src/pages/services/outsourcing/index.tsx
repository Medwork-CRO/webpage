import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import Showcasing from "@/components/Showcasing";
import outsourcing from "@assets/services/outsourcing-vector.jpg";

const introParagraph = [
    "In today's dynamic and rapidly evolving pharmaceutical landscape, maintaining a robust pharmacovigilance system is imperative for regulatory compliance and patient safety. To help you navigate the complexities of pharmacovigilance seamlessly, we offer strategic personnel outsourcing solutions tailored to meet your specific needs.",
];

const expertiseParagraph = [
    "Our Expertise",
    "At Medwork we understand the critical role pharmacovigilance plays in ensuring the safety of pharmaceutical products. Our team comprises highly skilled and experienced professionals with in-depth knowledge of global regulatory requirements and industry best practices. By outsourcing your pharmacovigilance personnel needs to us, you gain access to a dedicated team committed to maintaining the highest standards of drug safety and compliance.",
];

const customSolutionsParagraph = [
    "Custom Solutions",
    "We recognize that every pharmaceutical company is unique, facing distinct challenges and opportunities. Our personnel outsourcing solutions are designed to be flexible and customizable, allowing you to build a team that aligns with your specific goals. Whether you need support in adverse event reporting, medical information handling, or other pharmacovigilance activities, we have the ability to provide qualified personnel that fits your requirements.",
];

const title = "Benefits of Outsourcing with Medwork";
const showcases = [
    { title: "Cost-Efficiency",
        point: "Outsourcing your pharmacovigilance personnel allows you to control costs effectively, eliminating the need for extensive in-house resources."
    },
    {
        title: "Quality Assurance",
        point: "Our team is dedicated to maintaining the highest quality standards, ensuring accurate and timely pharmacovigilance activities."
    },
    {
        title: "Focus on Core Competencies",
        point: "Free up your internal resources to concentrate on core business activities, while we handle the intricacies of pharmacovigilance."
    },
    {
        title: "Proven Track Record",
        point: "We have a successful track record of providing pharmacovigilance solutions to a diverse range of pharmaceutical companies."
    },
];

function Outsourcing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={outsourcing}
                title="Outsourcing"
                description=""
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="w-full flex flex-col items-left gap-12 px-4 sm:px-6 py-16 lg:px-0 whitespace-pre-line text-gray-500 dark:text-gray-400">
                    <LeadingParagraphs withLead={false} paragraphs={introParagraph} />
                    <DisplayParagraphs withLead={true} paragraphs={expertiseParagraph} />
                    <DisplayParagraphs withLead={true} paragraphs={customSolutionsParagraph} />
                    <Showcasing title={title} showcases={showcases} />
                </div>
            </div>
        </div>
    );
}

export default Outsourcing;
