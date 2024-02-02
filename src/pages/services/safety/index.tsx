import Breadcrumbs from "@/components/Breadcrumb";
import ImageCategory from "@/components/ImageCategory";
import InfoBoxMatrix from "@/components/InfoBoxMatrix";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/stock-images/Safety.jpg";
import { useState } from "react";

// const paragraphsOld = [
//     "Medwork is dedicated to supporting Marketing Authorisation Holders in fulfilling their pharmacovigilance obligations. With over 15 years of experience in different facets of pharmacovigilance, our team possesses a wealth of knowledge and a comprehensive understanding of the intricacies involved in ensuring drug safety.",
// ];
const paragraphs = [
    "Medwork is dedicated to supporting marketing authorization holders and medical device manufacturers in fulfilling their vigilance obligations. With over 15 years of experience across various aspects of vigilance, our team possesses a wealth of knowledge and a comprehensive understanding of the complexities involved in ensuring the safety of medicines and medical devices.",
];

const title = "Our services cover all aspects of pharmacovigilance, including:";
const showcases = [
    { title: "EU Qualified Person for Pharmacovigilance (QPPV)", point: "" },
    { title: "Local pharmacovigilance contact/Qualified Person (Greece, Cyprus, Malta)", point: "" },
    { title: "Development and maintenance of pharmacovigilance systems and Pharmacovigilance System Master File (PSMF) ", point: "" },
    { title: "Management of case reports ", point: "" },
    { title: "Signal management activities (including monitoring of EudraVigilance data via EudraVigilance Data Analysis System (EVDAS))", point: "" },
    { title: "Preparation and submission of aggregate reports (Periodic Safety Update Report (PSUR), Addendum to Clinical Overviews (ACO))", point: "" },
    { title: "Creation/review and maintenance of Risk Management Plan (RMP)", point: "" },
    { title: "Handling safety communications (Direct Healthcare Professional Communication (DHPC), educational material)", point: "" },
    { title: "Implementation of additional Risk Minimization Measures (aRMM; including Pregnancy Prevention Programme (PPP))", point: "" },
    { title: "Local and global literature monitoring", point: "" },
    { title: "Local (Greece, Cyprus, Malta) and EU pharmacovigilance regulatory intelligence", point: "" },
    { title: "Submission of data to Extended EudraVigilance Medicinal Product Dictionary (XEVMPD)", point: "" },
    { title: "Clinical trial pharmacovigilance (including EudraVigilance registration and provision of Responsible Person, management of Serious Adverse Event (SAE)/ Suspected Unexpected Serious Adverse Reaction (SUSAR), Development Safety Update Report (DSUR) preparation and submission, literature monitoring)", point: "" },
    { title: "Medical information", point: "" },
    { title: "Pharmacovigilance training", point: "" },
];

export const infoBoxes = [
    {
        title: "PV Systems & QPPV Services",
        text: "We establish and maintain robust pharmacovigilance systems. Our team of experienced EU Qualified Persons for Pharmacovigilance guarantees the effective management of your drug safety affairs and ensures strict regulatory compliance.",
        link: "/services/safety/pv-systems-qppv-services",
        color: "bg-blue-200",
    },
    {
        title: "Local Pharmacovigilance",
        text: "Offering comprehensive and integrated drug safety services for Greece, Cyprus, and Malta, our approach extends beyond the responsibilities of the LPPV/LSO. We provide marketing authorization holders with a complete local PV system, ensuring thorough coverage.",
        link: "/services/safety/local-pharmacovigilance",
        color: "bg-blue-200",
    },
    {
        title: "Case Processing",
        text: "We are able to handle high volumes of Individual Case Study Reports (ICSRs) by ensuring both quality and compliance. To deliver optimal service, we can customize our case handling solutions to seamlessly align with your workflows and processes.",
        link: "/services/safety/case-processing",
        color: "bg-blue-200",
    },
    {
        title: "Global and Local Medical Literature Monitoring",
        text: "Medwork offers efficient global and local medical literature monitoring services empowered by the involvement of medical doctors who are actively engaged in the review and assessment process.",
        link: "/services/safety/global-and-local-medical-literature-monitoring",
        color: "bg-blue-200",
    },
    {
        title: "Clinical Trial Safety",
        text: "Medwork can ensure adherence to safety-related obligations for sponsors and investigators, efficiently removing this responsibility from them. This strategy enables you to concentrate solely on reaching your clinical goals. A dedicated group of experienced professionals will support you in every stage of clinical trial conduct and reporting.",
        link: "/services/safety/clinical-trial-safety",
        color: "bg-blue-200",
    },
    {
        title: "Medical Device Vigilance",
        text: "As a vigilance-focused organization, we have the expertise to ensure safety across substances, devices, and combinations. With materiovigilance evolving towards a pharmacovigilance approach, we're well-equipped to help medical device manufacturers navigate these new regulatory requirements using our proven, stringent principles.",
        link: "/services/safety/medical-device-vigilance",
        color: "bg-blue-200",
    },
];

function Safety() {
    const [showShowcasing, setShowShowcasing] = useState(false);

    const toggleShowcasing = () => {
        setShowShowcasing(!showShowcasing);
    };

    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="Safety" />

            <div id="main-content" className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
                    <div>
                        <LeadingParagraphs withLead={false} paragraphs={paragraphs} />
                        <button onClick={toggleShowcasing} className={`
                        w-full sm:max-w-[120px] mx-auto mt-4 p-1
                        border border-medwork-brown dark:border-gray-400 rounded-full
                        bg-opacity-25 ${showShowcasing && "bg-medwork-dark dark:bg-medwork-light mb-8"}
                        font-ultralight whitespace-pre-line tracking-wide
                        narrow-letters leading-relaxed italic
                        text-medwork-brown dark:text-gray-400 text-md md:text-lg text-center
                    `}>
                            {showShowcasing ? "Read Less" : "Read More"}
                        </button>
                        {showShowcasing && <Showcasing title={title} showcases={showcases} />}
                    </div>
                    <InfoBoxMatrix infoBoxes={infoBoxes}/>
                </div>
            </div>
        </div>
    );
}

export default Safety;