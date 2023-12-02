import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import materiovigilance from "@assets/services/materiovigilance-vector.jpg";

const paragraphs1 = [
    "Medical Devices Directives ensure that adverse incidents are evaluated and, where appropriate, information is disseminated in the form of a National Competent Authority Report (NCAR) with the objective of preventing the repetition of such incidents through the adoption of appropriate corrective actions to be taken in the field.",
    "Medwork can provide you with a vigilance reporting system that is compliant with MEDDEV 2.12-1 r 6, and develop all the standard operating procedures required.",
];

const paragraphs2 = [
    "Our services include:",
    "Pre- and post-marketing vigilance services for all classes of Medical Devices according to the European guideline MEDDEV 2.12-1 rev. 5, including:",
    "Preparation of customized Standard Operating Procedures (SOPs) for a Medical Device Vigilance system and reporting procedures for Incidents/Near Incidents;",
    "Management of Incidents/Near Incidents: case reception, Quality Control Assessment and preparation of narratives;",
    "Expedited reporting of Incidents/Near Incidents: preparation and submission of Manufacturer Incident Reports and Field Safety Notice (FSN) to multiple regulatory authorities where necessary;",
    "Periodic Vigilance Reports: complete and submit Periodic Summary/Trend Reports to National Competent Authorities.",
];

function Materiovigilance() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={materiovigilance}
                title="Materiovigilance"
                description="The principal purpose of materiovigilance is to improve the protection of the health and safety of patients, users and others by reducing the likelihood that incidents related to the use of a medical device will reoccur."
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col gap-8">
                <Breadcrumbs />
                <div className="w-full flex flex-col items-left gap-12 px-4 sm:px-6 py-16 lg:px-0 whitespace-pre-line text-gray-500 dark:text-gray-400">
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs1} />
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs2} />
                </div>
            </div>
        </div>
    );
}

export default Materiovigilance;
