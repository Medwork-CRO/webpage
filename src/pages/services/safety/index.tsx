import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import InfoBox from "@/components/InfoBox";
import safety from "@assets/services/safety-vector.jpg";

const paragraphs0 = [
    "Medwork is dedicated to supporting Marketing Authorisation Holders in fulfilling their pharmacovigilance obligations. With over 15 years of experience in different facets of pharmacovigilance, our team possesses a wealth of knowledge and a comprehensive understanding of the intricacies involved in ensuring drug safety.",
];

function Safety() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="Safety" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraphs0} />

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16">
                        <InfoBox
                            title="PV System & QPPV"
                            text="We establish and maintain robust Pharmacovigilance Systems.  Our team of experienced EU Qualified Persons for Pharmacovigilance will guarantee the effective management of your drug safety affairs and ensure regulatory compliance."
                            link="/services/safety/pv-system-qppv"
                            color="bg-blue-200"
                        />
                        <InfoBox
                            title="Local Pharmacovigilance"
                            text="Comprehensive and integrated pharmacovigilance services for Greece, Cyprus and Malta, that extend beyond the responsibilities of the LPPV/LSO, providing Marketing Authorization Holders with a complete local PV system."
                            link="/services/safety/local-pharmacovigilance"
                            color="bg-blue-200"
                        />
                        <InfoBox
                            title="Case processing"
                            text="Streamlined case processing solutions tailored to clients workflows and processes. We adapt to our customers needs, being able to handle excessive volume of ICSRs while ensuring quality and compliance. "
                            link="/services/safety/case-processing"
                            color="bg-blue-200"
                        />
                        <InfoBox
                            title="Global and local literature monitoring"
                            text="Medwork offers efficient global and local literature monitoring services empowered by the involvement of Medical Doctors who are actively engaged in the review and assessment process."
                            link="/services/safety/global-and-local-literature-monitoring"
                            color="bg-blue-200"
                        />
                        <InfoBox
                            title="Clinical Safety"
                            text="Despite our relatively young presence, our focus on clinical trials safety is steadfast. With a history of clinical trial PV execution in over 10 countries, our experience is steadily growing and extending to encompass additional territories."
                            link="/services/safety/clinical-safety"
                            color="bg-blue-200"
                        />
                        <InfoBox
                            title="Medical device vigilance"
                            text="Drawing from our extensive 15-year journey in drug safety, we extend our expertise to the realm of medical device vigilance applying the same <stringent> concepts and mindset that have defined our pharmacovigilance legacy."
                            link="/services/safety/medical-device-vigilance"
                            color="bg-blue-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Safety;
