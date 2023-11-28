import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import safety from "@assets/services/safety-vector.jpg";

const paragraph = [
    "Efficient ICSR Case Processing Crafted to Client's Requirements: With an extended team of dedicated pharmacovigilance professionals, we manage all aspects of ICSR processing, seamlessly adapting to client's urgent or substantial caseloads.",
];

const paragraph2 = [
    "Partner with us for a synergy of skilled professionals, adaptable solutions, and a robust quality assurance framework. Our ICSR case processing meets industry standards of accuracy and efficiency, tailored to client's specific needs.",
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="CASE PROCESSING" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraph} />

                    <Title title="Key Attributes" />
                    <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
                        <li>
                            <b className="mr-2">Dedicated Professionals:</b>
                            <span>Our skilled team of pharmacovigilance experts is committed to efficient and accurate ICSR processing, ensuring meticulous attention to detail.</span>
                        </li>
                        <li>
                            <b className="mr-2">Urgent and High-Volume adaptability:</b>
                            <span>We are equipped to adapt to urgent or high volume ICSR processing requirements, delivering timely solutions without compromising on quality.</span>
                        </li>
                        <li>
                            <b className="mr-2">Database Expertise:</b>
                            <span>Leveraging our PV Database and extensive experience with major PV databases, we ensure case processing tailored to specific client needs.</span>
                        </li>
                        <li>
                            <b className="mr-2">Flexible Compliance:</b>
                            <span>Our adeptness at navigating a wide range of requirements and systems enables us to accommodate diverse compliance standards, ensuring seamless integration.</span>
                        </li>
                        <li>
                            <b className="mr-2">3-Step process  including Medical Doctors expertise:</b>
                            <span>Clients benefit from our comprehensive 3-step approach, encompassing initial processing, expert medical assessment by qualified Medical Doctors, and thorough Quality Control checks by experienced PV personnel.</span>
                        </li>
                    </ul>

                    <DisplayParagraphs paragraphs={paragraph2} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
