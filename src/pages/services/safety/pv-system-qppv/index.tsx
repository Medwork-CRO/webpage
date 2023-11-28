import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import vigilance from "@assets/services/safety-vector.jpg";

const paragraphs0 = [
    "Enhancing Pharmacovigilance Outcomes: PV Systems and QPPV Services.",
    "We understand the criticality of establishing processes that prioritize regulatory compliance, efficiency, and quality. Working closely with our clients, we offer customized solutions that align with regulatory requirements and industry standards.",
];

function Vigilance() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={vigilance} title="PV SYSTEM & QPPV" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraphs0} />

                    <Title title="Our Core Strengths" />
                    <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
                        <li>
                            <b className="mr-2">Robust Quality System:</b>
                            <span>Our services are developed within a thorough quality system, ensuring each deliverable meets the desired and valued standards of our clients.</span>
                        </li>
                        <li>
                            <b className="mr-2">Flexible PV System:</b>
                            <span>Customised to meet the unique needs of medium-sized MAHs, or CROs our PV system provides efficient, versatile solutions that ensure compliance and detailed safety oversight for a diverse range of clients.</span>
                        </li>
                        <li>
                            <b className="mr-2">QPPV Expertise:</b>
                            <span>Our skilled QPPVs diligently ensure compliance with local and EU regulations and industry best practices, guaranteeing that our client&apos;s pharmacovigilance operations adhere to the standards set by competent authorities.</span>
                        </li>
                        <li>
                            <b className="mr-2">Adaptability to Regulations:</b>
                            <span>Catering to the varied portfolios, needs, and operating environments of MAHs and CROs, we adeptly handle complex requirements, ensuring compliance without compromising operational efficiency.</span>
                        </li>
                        <li>
                            <b className="mr-2">Holistic Approach:</b>
                            <span>Our pharmacovigilance systems and QPPVs adopt a holistic approach, implementing smart and efficient solutions. The holistic approach enables us to steer clear of simplistic solutions that may be problematic in the future, ensuring our deliverables/solutions remain optimal over time.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Vigilance;
