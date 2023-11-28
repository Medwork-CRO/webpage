import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import safety from "@assets/services/safety-vector.jpg";

const paragraph1 = [
    "Global MLM",
    "Unlock a mature system supported by an experienced team with our Global Literature Monitoring service. Our deep expertise and client-centric approach redefine maximal accuracy, consistency, compliance and well designed and executed processes.",
];

const paragraph2 = [
    "Local MLM",
    "Elevate your pharmacovigilance strategy with our exceptional Local Literature Monitoring services. Our process ensures accuracy and thoroughness in identifying crucial safety information.",
];

function GlobalAndLocalLiteratureMonitoring() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="GLOBAL AND LOCAL LITERATURE MONITORING" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraph1} />

                    <Title title="Key Attributes" />
                    <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
                        <li>
                            <b className="mr-2">Profound Expertise:</b>
                            <span>Our team&apos;s extensive experience, bolstered by continuous training and knowledge sharing among members, ensures meticulous scrutiny of safety data.</span>
                        </li>
                        <li>
                            <b className="mr-2">Tailored Adaptability:</b>
                            <span>We customise our service to client needs, ensuring seamless alignment with scope, depth, and specific requirements.</span>
                        </li>
                        <li>
                            <b className="mr-2">SOP Alignment:</b>
                            <span>Our integration with client Standard Operating Procedures (SOPs) assures compliance and consistency with established protocols.</span>
                        </li>
                        <li>
                            <b className="mr-2">Medical Doctor Engagement:</b>
                            <span>Our service benefits from the involvement of Medical Doctors, who offer in-depth medical insights for complex, intricate, or ambiguous cases.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraph2} />

                    <Title title="Key Attributes" />
                    <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
                        <li>
                            <b className="mr-2">Proven Expertise:</b>
                            <span>Benefit from our 15-year-refined process, ensuring accuracy and reliability in each review.</span>
                        </li>
                        <li>
                            <b className="mr-2">Medical Doctor Review:</b>
                            <span>Exclusively performed by trained, experienced Medical Doctors for a meticulous and informed assessment.</span>
                        </li>
                        <li>
                            <b className="mr-2">Comprehensive Coverage:</b>
                            <span>We extend beyond medical journals to include conference proceedings - a primary source of safety information - amplifying the scope of our assessment.</span>
                        </li>
                        <li>
                            <b className="mr-2">Thorough Examination:</b>
                            <span>Our word-by-word, cover-by-cover review leaves no stone unturned, and no detail missed.</span>
                        </li>
                        <li>
                            <b className="mr-2">Monthly Quality Checks:</b>
                            <span>Regular quality controls, including reviewer performance assessments, underscore our commitment to excellence.</span>
                        </li>
                        <li>
                            <b className="mr-2">Extensive Trust:</b>
                            <span>Over 70 MAHs rely on us for screening over 1,000 APIs, attesting to our service&apos;s reliability.</span>
                        </li>
                        <li>
                            <b className="mr-2">Holistic Recording:</b>
                            <span>We document all identified safety information for all pharmaceutical products, enabling comprehensive retrospective reviews.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GlobalAndLocalLiteratureMonitoring;
