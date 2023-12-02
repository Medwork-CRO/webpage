import Breadcrumbs from "@/components/Breadcrumb";
import ImageCategory from "@/components/ImageCategory";
import InfoBoxMatrix from "@/components/InfoBoxMatrix";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import safety from "@assets/services/safety-vector.jpg";

// const paragraphsOld = [
//     "Medwork is dedicated to supporting Marketing Authorisation Holders in fulfilling their pharmacovigilance obligations. With over 15 years of experience in different facets of pharmacovigilance, our team possesses a wealth of knowledge and a comprehensive understanding of the intricacies involved in ensuring drug safety.",
// ];
const paragraphs = [
    "Medwork is dedicated to supporting marketing authorisation holders and medical device manufacturers in fulfilling their vigilance obligations. With over 15 years of experience across various aspects of vigilance, our team possesses a wealth of knowledge and a comprehensive understanding of the complexities involved in ensuring the safety of medicines and medical devices.",
];

const infoBoxes = [
    {
        title: "PV System & QPPV",
        text: "We establish and maintain robust pharmacovigilance systems. Our team of experienced EU qualified persons for pharmacovigilance, guarantees the effective management of your drug safety affairs and ensures strict regulatory compliance.",
        link: "/services/safety/pv-system-qppv",
        color: "bg-blue-200",
    },
    {
        title: "Local Pharmacovigilance",
        text: "Offering comprehensive and integrated pharmacovigilance services for Greece, Cyprus, and Malta, our approach extends beyond the responsibilities of the LPPV/LSO. We provide marketing authorization holders with a complete local PV system, ensuring thorough coverage.",
        link: "/services/safety/local-pharmacovigilance",
        color: "bg-blue-200",
    },
    {
        title: "Case processing",
        text: "We possess the capability to handle high volumes of ICSRs, by ensuring both quality and compliance. To deliver optimal service, we customise our case processing solutions to seamlessly align with our client's workflows and processes.",
        link: "/services/safety/case-processing",
        color: "bg-blue-200",
    },
    {
        title: "Global and local literature monitoring",
        text: "Medwork offers efficient global and local literature monitoring services empowered by the involvement of Medical Doctors who are actively engaged in the review and assessment process.",
        link: "/services/safety/global-and-local-literature-monitoring",
        color: "bg-blue-200",
    },
    {
        title: "Clinical Safety",
        text: "Medwork can ensure adherence to safety-related obligations for sponsors and investigators, efficiently removing this responsibility from them. This strategy enables our clients to concentrate solely on reaching their clinical goals. A dedicated group of experienced professionals will support you in every stage of the clinical trial conduct and reporting.",
        link: "/services/safety/clinical-safety",
        color: "bg-blue-200",
    },
    {
        title: "Medical device vigilance",
        text: "As a vigilance-focused organization, we have the expertise to ensure safety across substances, devices, and combinations. With materiovigilance evolving towards a pharmacovigilance approach, we're well-equipped to help medical device manufacturers navigate these new regulatory requirements using our proven, stringent principles.",
        link: "/services/safety/medical-device-vigilance",
        color: "bg-blue-200",
    },
];


function Safety() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="Safety" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-12 px-4 sm:px-6 lg:px-0 py-16">
                    <LeadingParagraphs withLead={false} paragraphs={paragraphs} />
                    <InfoBoxMatrix infoBoxes={infoBoxes} />
                </div>
            </div>
        </div>
    );
}

export default Safety;
