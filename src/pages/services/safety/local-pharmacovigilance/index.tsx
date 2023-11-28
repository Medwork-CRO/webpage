import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import safety from "@assets/services/safety-vector.jpg";

const paragraphs0 = [
    "LPPV & Local PV Services in Greece, Cyprus and Malta",
    "Experience Tailored to Your Needs: Our local Pharmacovigilance (PV) services are designed to cater to a diverse range of clients, ensuring seamless compliance and risk management. Whether you're a small Marketing Authorization Holder (MAH) with limited products and no local office, or a prominent international pharmaceutical company with an extensive portfolio, our expertise adapts to your specific requirements.",
];

function LocalPharmacovigilance() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="LOCAL PHARMACOVIGILANCE" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraphs0} />

                    <Title title="Key Attributes" />
                    <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
                        <li>
                            <b className="mr-2">Customized PV Systems:</b>
                            <span>We design and implement local PV systems that align with the client&apos;s operations, ensuring seamless integration and compliance with local regulations.</span>
                        </li>
                        <li>
                            <b className="mr-2">Expert LPPVs:</b>
                            <span>Clients benefit from the expertise of our Local Qualified Persons for Pharmacovigilance (LPPVs), who bring a comprehensive understanding of local regulations and practices.</span>
                        </li>
                        <li>
                            <b className="mr-2">Adaptive Systems and Databases:</b>
                            <span>Our experts adapt and utilize client&apos;s existing systems and databases, optimizing processes for peak efficiency and convenience.</span>
                        </li>
                        <li>
                            <b className="mr-2">Tailored Compliance:</b>
                            <span>We guide clients through local regulations, providing strategies that ensure compliance while minimizing risks.</span>
                        </li>
                        <li>
                            <b className="mr-2">Diverse Client Base:</b>
                            <span>Our services are tailored to a broad spectrum of clients, from small MAHs with limited products to international pharmaceutical companies with extensive portfolios.</span>
                        </li>
                        <li>
                            <b className="mr-2">Local Expertise:</b>
                            <span>Clients can leverage our local affiliate&apos;s knowledge of regional regulations and practices to ensure smooth operations and timely submissions.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LocalPharmacovigilance;
